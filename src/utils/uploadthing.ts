import {generateReactHelpers} from "@uploadthing/react/hooks";
import type {UploadPhotoRouter} from "~/server/api/routers/uploadPhoto";

export const {useUploadThing, uploadFiles} = generateReactHelpers<UploadPhotoRouter>();