import {z} from "zod";
import {createTRPCRouter, protectedProcedure} from "~/server/api/trpc";

export const cartRouter = createTRPCRouter({
    get: protectedProcedure.query(({ctx}) => {
        const userId = ctx.auth.userId
        return ctx.prisma.cart.upsert({
            where: {userId},
            update: {},
            create: {userId},
            include: {products: true}
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
                    products: {
                        connect: {id: productId}
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
            const cart = await prisma.cart.findUnique({
                where: {userId},
                include: {products: true},
            })

            if (!cart) return

            const productIndex = cart.products.findIndex(p => p.id == productId)

            if (productIndex != -1) {
                await prisma.product.update({
                    where: {id: productId},
                    data: {cartId: ''},
                });
            }
        }),
});
