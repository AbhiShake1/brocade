import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ['/', '/api/trpc/product.getAll,cart.get', '/api/trpc/product.getAll,product.getCategories', '/api/trpc/product.getAll,product.getCategories,cart.get'],
})

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
