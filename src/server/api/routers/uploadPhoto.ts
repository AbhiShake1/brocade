import {createUploadthing, type FileRouter} from "uploadthing/next-legacy";

const f = createUploadthing();


export const uploadPhotoRouter = {
    imageUploader: f({image: {maxFileSize: "64MB", maxFileCount: 1}})
        .onUploadComplete(() => void console.log('')),
} satisfies FileRouter;

export type UploadPhotoRouter = typeof uploadPhotoRouter;