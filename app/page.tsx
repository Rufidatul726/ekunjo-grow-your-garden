"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, MapPin, Camera } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80"
          alt="Urban Garden"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-6 max-w-3xl px-4">
            <h1 className="text-5xl font-bold">Grow Your Urban Garden</h1>
            <p className="text-xl">
              Your complete guide to urban farming, plant care, and local nurseries
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/nurseries">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Find Nurseries
                </Button>
              </Link>
              <Link href="/disease-detection">
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/30">
                  Detect Plant Disease
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 space-y-4">
              <MapPin className="h-12 w-12 text-green-600" />
              <h3 className="text-2xl font-semibold">Find Local Nurseries</h3>
              <p className="text-muted-foreground">
                Discover nearby nurseries and garden centers with our interactive map
              </p>
            </Card>

            <Card className="p-6 space-y-4">
              <Leaf className="h-12 w-12 text-green-600" />
              <h3 className="text-2xl font-semibold">Plant Encyclopedia</h3>
              <p className="text-muted-foreground">
                Access detailed information about various plants and their care requirements
              </p>
            </Card>

            <Card className="p-6 space-y-4">
              <Camera className="h-12 w-12 text-green-600" />
              <h3 className="text-2xl font-semibold">Disease Detection</h3>
              <p className="text-muted-foreground">
                Upload plant photos to identify diseases and get treatment recommendations
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-50 dark:bg-green-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Urban Farming Journey</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of urban farmers and learn how to grow your own food, 
            create sustainable gardens, and contribute to a greener future.
          </p>
          <Link href="/plants">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Explore Plant Guide
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}