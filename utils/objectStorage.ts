// utils/objectStorage.ts
const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY!;
const IMGBB_UPLOAD_URL = "https://api.imgbb.com/1/upload";

export async function uploadToImgBB(base64Image: string): Promise<string> {
  const formData = new FormData();
  formData.append("image", base64Image);

  const res = await fetch(`${IMGBB_UPLOAD_URL}?key=${IMGBB_API_KEY}`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  if (!res.ok || !data.success) {
    throw new Error("Image upload failed");
  }

  return data.data.url; // Public image URL
}
