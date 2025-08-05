"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Camera } from "lucide-react";
import Image from "next/image";
import { handleImageUpload } from "@/api/diseases/uploadImage";
import { detectDisease } from "@/api/diseases/detectDisease";
import { PredictionResult } from "@/types/predictionResult";

export default function DiseaseDetectionPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [result, setResult] = useState<PredictionResult | null>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const localPreview = URL.createObjectURL(file);
    setSelectedImage(localPreview);
    setProgress(0);
    setIsProcessing(true);
    setResult(null);

    try {
      // Upload to cloud storage
      const imageUrl = await handleImageUpload(file);

      // Simulate progress bar
      for (let i = 0; i <= 90; i += 10) {
        await new Promise((r) => setTimeout(r, 100));
        setProgress(i);
      }

      // Predict using backend
      const prediction = await detectDisease(imageUrl);

      setProgress(100);
      setResult({
        label: prediction.label,
        score: Math.round(prediction.score * 100),
      });
    } catch (err) {
      alert("Upload or prediction failed. Please try again.");
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Plant Disease Detection</h1>
          <p className="text-xl text-muted-foreground">
            Upload a photo of your plant to identify potential diseases
          </p>
        </div>

        <Card className="p-8">
          <div className="space-y-8">
            <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-12">
              {selectedImage ? (
                <div className="relative w-full h-64">
                  <Image
                    src={selectedImage}
                    alt="Selected plant"
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-4 text-sm text-muted-foreground">
                    Drag and drop an image, or click to select
                  </p>
                </div>
              )}

              <div className="mt-4 flex gap-4">
                <Button
                  onClick={() => document.getElementById("file-upload")?.click()}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Upload className="mr-2 h-4 w-4" /> Upload Image
                </Button>
                <Button variant="outline">
                  <Camera className="mr-2 h-4 w-4" /> Take Photo
                </Button>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            {selectedImage && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Analysis Results</h3>

                {isProcessing && (
                  <div>
                    <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                      <div
                        className="bg-green-600 h-4 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground text-center">
                      Analyzing image... {progress}%
                    </p>
                  </div>
                )}

                {!isProcessing && result && (
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                    <p className="text-xl font-semibold">
                      Disease Detected:{" "}
                      <span className="text-green-700">{result.label}</span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Confidence: {result.score}%
                    </p>
                  </div>
                )}

                {!isProcessing && !result && (
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-center text-muted-foreground">
                      Upload a photo to get instant disease detection results and treatment
                      recommendations
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </Card>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">1. Upload Photo</h3>
              <p className="text-sm text-muted-foreground">
                Take a clear photo of the affected plant part or upload an existing image
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">2. AI Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Our AI system analyzes the image to identify potential diseases
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">3. Get Results</h3>
              <p className="text-sm text-muted-foreground">
                Receive detailed information about the disease and treatment recommendations
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
