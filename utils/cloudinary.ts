export async function uploadToCloudinary(file: File): Promise<string> {
  console.log("Preset:", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }
  );

  const data = await res.json();
  if (!res.ok || !data.secure_url) {
    console.error("Cloudinary error:", data);
    throw new Error(data.error?.message || "Upload failed");
  }
  return data.secure_url;
}
