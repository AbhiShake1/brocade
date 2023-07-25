import {z} from "zod";
import {createTRPCRouter, publicProcedure} from "~/server/api/trpc";

export const cartRouter = createTRPCRouter({
    addToCart: publicProcedure
        .input(z.object({productId: z.string().nonempty(), userId: z.string().nonempty()}))
        .mutation(async ({ctx, input}) => {
            const {userId, productId} = input
            const {prisma} = ctx
            let cart = await prisma.cart.findUnique({
                where: {userId},
                include: {products: true},
            })

            if (!cart) {
                cart = await prisma.cart.create({
                    data: {
                        userId,
                    },
                    include: {products: true},
                });
            }

            const productIndex = cart.products.findIndex(p => p.id == productId);

            if (productIndex === -1) {
                await prisma.product.update({
                    where: {id: productId},
                    data: {cartId: cart.id},
                });
            }
        }),
    removeFromCart: publicProcedure
        .input(z.object({productId: z.string().nonempty(), userId: z.string().nonempty()}))
        .mutation(async ({ctx, input}) => {
            const {userId, productId} = input
            const {prisma} = ctx
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
