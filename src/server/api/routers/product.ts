import {z} from "zod";
import {type Prisma} from '@prisma/client'
import {createTRPCRouter, protectedProcedure, publicProcedure} from "~/server/api/trpc";

export const productRouter = createTRPCRouter({
    getAll: publicProcedure.query(async ({ctx}) => {
        const products = await ctx.prisma.product.findMany({
            include: {
                favouriteProducts: {
                    where: {
                        userId: ctx.auth.userId,
                    },
                    select: {
                        productId: true,
                    },
                },
            },
        });

        return products.map((product) => ({
            ...product,
            isFavourite: product.favouriteProducts.some((favProduct) => favProduct.productId === product.id),
        }))
    }),
    toggleFavourite: protectedProcedure
        .input(z.object({productId: z.string().nonempty()}))
        .mutation(async ({ctx, input}) => {
            const {userId} = ctx.auth
            const {productId} = input
            const existingFavorite = await ctx.prisma.productFavourites.findUnique({
                where: {
                    userId_productId: {
                        userId,
                        productId,
                    },
                },
            });

            if (existingFavorite) {
                await ctx.prisma.productFavourites.delete({
                    where: {
                        id: existingFavorite.id,
                    },
                });

                return false
            } else {
                await ctx.prisma.productFavourites.create({
                    data: {
                        userId,
                        productId,
                    },
                });

                return true
            }
        }),
    favourites: protectedProcedure.query(async ({ctx}) => {
        const favoriteProducts = await ctx.prisma.productFavourites.findMany({
            where: {
                userId: ctx.auth.userId,
            },
            select: {
                productId: true,
            },
        });

        const favoriteProductIds = favoriteProducts.map((favProduct) => favProduct.productId);

        if (favoriteProductIds.length == 0) {
            return [];
        }

        const products = await ctx.prisma.product.findMany({
            where: {
                id: {
                    in: favoriteProductIds,
                },
            },
        });

        return products;
    }),
    create: publicProcedure.input(z.custom<Prisma.ProductCreateArgs>()).mutation(async ({ctx, input}) => {
        const product = await ctx.prisma.product.create(input)
        return {...product, isFavourite: false}
    })
});
