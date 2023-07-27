import {z} from "zod";
import {type Prisma, Product} from '@prisma/client'
import {createTRPCRouter, protectedProcedure, publicProcedure} from "~/server/api/trpc";

export const productRouter = createTRPCRouter({
    getAll: publicProcedure
        .query(async ({ctx}) => {
            const include = {
                favouriteProducts: {
                    where: {
                        userId: ctx.auth.userId ?? undefined,
                    },
                    select: {
                        productId: true,
                    },
                },
            }

            const products = await ctx.prisma.product.findMany({include})

            return products.map((product) => ({
                ...product,
                isFavourite: ctx.auth.userId == null ? false : product.favouriteProducts.some((favProduct) => favProduct.productId === product.id),
            }))
        }),
    getById: publicProcedure
        .input(z.string())
        .query(async ({ctx, input}) => {
            const product = await ctx.prisma.product.findFirst({
                include: {
                    favouriteProducts: {
                        where: {
                            userId: ctx.auth.userId ?? undefined,
                        },
                        select: {
                            productId: true,
                        },
                    },
                },
                where: {id: input}
            })

            return {
                ...product,
                isFavourite: ctx.auth.userId == null || product == null ? false : product.favouriteProducts.some((favProduct) => favProduct.productId === product.id),
            }
        }),
    getBySearch: publicProcedure
        .input(z.string())
        .mutation(async ({ctx, input}) => {
            const products = await ctx.prisma.product.findMany({
                include: {
                    favouriteProducts: {
                        where: {
                            userId: ctx.auth.userId ?? undefined,
                        },
                        select: {
                            productId: true,
                        },
                    },
                },
                where: {
                    name: {
                        contains: input.length == 0 ? undefined : input,
                    }
                }
            })

            return products.map((product) => ({
                ...product,
                isFavourite: ctx.auth.userId == null ? false : product.favouriteProducts.some((favProduct) => favProduct.productId === product.id),
            }))
        }),
    getByCategory: publicProcedure
        .input(z.object({category: z.string().nonempty(), query: z.string().nullish()}))
        .mutation(async ({ctx, input}) => {
            const products = await ctx.prisma.product.findMany({
                include: {
                    favouriteProducts: {
                        where: {
                            userId: ctx.auth.userId ?? undefined,
                        },
                        select: {
                            productId: true,
                        },
                    },
                },
                where: {
                    name: {
                        contains: input.query ?? undefined,
                    },
                    category: input.category,
                }
            })

            return products.map((product) => ({
                ...product,
                isFavourite: ctx.auth.userId == null ? false : product.favouriteProducts.some((favProduct) => favProduct.productId === product.id),
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
                })
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
            include: {favouriteProducts: true},
        })

        return products.map((product) => ({
            ...product,
            isFavourite: product.favouriteProducts.some((favProduct) => favProduct.productId === product.id),
        }))
    }),
    create: publicProcedure.input(z.custom<Prisma.ProductCreateArgs>()).mutation(async ({ctx, input}) => {
        const product = await ctx.prisma.product.create(input)
        return {...product, isFavourite: false}
    }),
    getCategories: publicProcedure.query(async ({ctx}) => {
        const categories = await ctx.prisma.product.groupBy({
            by: ['category'],
            having: {
                category: {not: ''},
            },
        })
        const products: Product[] = []
        for (const category of categories) {
            const product = await ctx.prisma.product.findFirst({where: {category: category.category}})
            products.push(product!)
        }
        return products
    }),
});
