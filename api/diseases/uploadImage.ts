import { uploadToCloudinary } from "@/utils/cloudinary";

export async function handleImageUpload(file: File): Promise<string> {
  return uploadToCloudinary(file);
}
