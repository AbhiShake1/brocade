import {z} from "zod";
import {type Prisma} from '@prisma/client'
import {createTRPCRouter, publicProcedure} from "~/server/api/trpc";

export const productRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ctx}) => {
        return ctx.prisma.product.findMany()
    }),
    create: publicProcedure.input(z.custom<Prisma.ProductCreateArgs>()).mutation(({ctx, input}) => {
        return ctx.prisma.product.create(input)
    })
});
