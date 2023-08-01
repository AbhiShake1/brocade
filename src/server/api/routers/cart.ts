import {z} from "zod";
import {createTRPCRouter, protectedProcedure} from "~/server/api/trpc";

export const cartRouter = createTRPCRouter({
    get: protectedProcedure.query(({ctx}) => {
        const userId = ctx.auth.userId
        return ctx.prisma.cart.upsert({
            where: {userId},
            update: {},
            create: {userId},
            include: {productInCart: {include: {product: true}}}
        })
    }),
    addToCart: protectedProcedure
        .input(z.object({productId: z.string().nonempty()}))
        .mutation(async ({ctx, input}) => {
            const {productId} = input
            const userId = ctx.auth.userId
            const existing = await ctx.prisma.productInCart.findFirst({
                where: {productId, cart: {userId}}
            })

            if (existing) {
                await ctx.prisma.cart.update({
                    where: {userId},
                    data: {
                        productInCart: {
                            updateMany: {
                                where: {productId},
                                data: {quantity: {increment: 1}}
                            },
                        }
                    }
                })
            } else {
                const cart = await ctx.prisma.cart.findUnique({where: {userId}})
                await ctx.prisma.cart.update({
                    where: {userId},
                    data: {
                        productInCart: {
                            connectOrCreate: {
                                where: {
                                    productId_cartId: {productId, cartId: cart!.id},
                                },
                                create: {productId, quantity: 1}
                            }
                        }
                    }
                })
            }

            return await ctx.prisma.productInCart.findFirst({
                where: {productId, cart: {userId}}
            })
        }),
    updateCart: protectedProcedure
        .input(z.object({productId: z.string().nonempty(), quantity: z.number().positive()}))
        .mutation(async ({ctx, input}) => {
            const {productId, quantity} = input
            const userId = ctx.auth.userId
            const cart = await ctx.prisma.cart.findFirst({where: {userId}})
            const cartId = cart!.id
            await ctx.prisma.cart.update({
                where: {userId},
                data: {
                    productInCart: {
                        update: {
                            where: {productId_cartId: {productId, cartId}},
                            data: {quantity}
                        }
                    }
                }
            })
            return await ctx.prisma.productInCart.findUnique({
                where: {productId_cartId: {productId, cartId}}
            })
        }),
    removeFromCart: protectedProcedure
        .input(z.object({productId: z.string().nonempty()}))
        .mutation(async ({ctx, input}) => {
            const {productId} = input
            const userId = ctx.auth.userId
            const cart = await ctx.prisma.cart.findFirst({where: {userId}})

            await ctx.prisma.productInCart.update({
                where: {productId_cartId: {productId, cartId: cart!.id}},
                data: {quantity: {decrement: 1}}
            })
        }),
    addGiftCard: protectedProcedure
        .input(z.object({deno: z.string().nonempty(), quantity: z.number().int().positive()},))
        .mutation(({ctx, input}) => {
            const {deno, quantity} = input
            const userId = ctx.auth.userId
            return ctx.prisma.giftCard.create({
                data: {
                    userId,
                    deno,
                    amount: quantity,
                    code: '',
                }
            })
        }),
    getGiftCards: protectedProcedure
        .query(({ctx}) => {
            const userId = ctx.auth.userId
            return ctx.prisma.giftCard.findMany({
                where: {userId}
            })
        }),
});
