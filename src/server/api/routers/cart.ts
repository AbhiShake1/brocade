import {z} from "zod";
import {createTRPCRouter, protectedProcedure} from "~/server/api/trpc";

export const cartRouter = createTRPCRouter({
    get: protectedProcedure.query(({ctx}) => {
        const userId = ctx.auth.userId
        return ctx.prisma.cart.upsert({
            where: {userId},
            update: {},
            create: {userId},
            include: {productInCart: true}
        })
    }),
    addToCart: protectedProcedure
        .input(z.object({productId: z.string().nonempty()}))
        .mutation(async ({ctx, input}) => {
            const {productId} = input
            const userId = ctx.auth.userId
            return ctx.prisma.cart.update({
                where: {userId},
                data: {
                    productInCart: {
                        update: {
                            where: {id: productId},
                            data: {productId, quantity: {increment: 1}}
                        },
                        create: {productId, quantity: 1}
                    }
                }
            })
        }),
    removeFromCart: protectedProcedure
        .input(z.object({productId: z.string().nonempty()}))
        .mutation(async ({ctx, input}) => {
            const {productId} = input
            const {prisma} = ctx
            const userId = ctx.auth.userId

            await ctx.prisma.productInCart.update({
                where: {productId},
                data: {quantity: {decrement: 1}}
            })
        }),
});
