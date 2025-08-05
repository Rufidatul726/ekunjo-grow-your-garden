// api/detectDisease.ts
import { PredictionResult } from "@/types/predictionResult";

export async function detectDisease(imageUrl: string): Promise<PredictionResult> {
  const formData = new FormData();
  const response = await fetch(imageUrl);
  const blob = await response.blob();
  formData.append("file", blob, "image.jpg");

  const res = await fetch("https://ekunjo-ai-backend.onrender.com/predict", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Prediction request failed");
  }

  return res.json(); // { label: string, score: float }
}
