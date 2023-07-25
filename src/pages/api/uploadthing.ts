import {createNextPageApiHandler} from "uploadthing/next-legacy";
import {uploadPhotoRouter} from "~/server/api/routers/uploadPhoto";

const handler = createNextPageApiHandler({
    router: uploadPhotoRouter,
});

export default handler;