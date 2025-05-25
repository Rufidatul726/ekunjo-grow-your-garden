"use client";

import plantData from "@/data/plants.json";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Droplets, ThermometerSun, Wind, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";

type Plant = {
  id: number;
  name: string;
  category: string;
  image: string;
  difficulty: string;
  care: {
    light: string;
    water: string;
    temperature: string;
    humidity: string;
  };
};

const categories = ["Indoor", "Outdoor", "Vegetable", "Herb", "Succulent", "Flower"];

export default function PlantsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPlants = (plantData as Plant[]).filter((plant) => {
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? plant.category.toLowerCase() === selectedCategory.toLowerCase() : true;
    return matchesSearch && matchesCategory;
  });

  const visiblePlants = filteredPlants.slice(0, visibleCount);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">🌿 Plant Guide</h1>
          <p className="text-lg text-muted-foreground">Discover plants perfect for your urban garden</p>
        </div>

        {/* Search and Categories */}
        <div className="mb-6 space-y-4">
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="Search plants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
            <Button onClick={() => {}} className="bg-green-600 hover:bg-green-700">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                size="sm"
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
              >
                {category}
              </Button>
            ))}
            {selectedCategory && (
              <Button variant="ghost" size="sm" onClick={() => setSelectedCategory(null)}>
                ✕ Clear Filter
              </Button>
            )}
          </div>
        </div>

        {/* Main Grid */}
        <div className="lg:flex lg:gap-8">
          {/* Plant Cards */}
          <div className="flex-1">
            {visiblePlants.length > 0 ? (
              <>
                <h2 className="text-2xl font-semibold mb-4">
                  {selectedCategory ? `${selectedCategory} Plants` : "All Plants"}
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mb-10">
                  {visiblePlants.map((plant) => (
                    <Card key={plant.id} className="overflow-hidden">
                      <div className="relative h-64 bg-gray-100">
                        {plant.image ? (
                          <Image src={plant.image} alt={plant.name} fill className="object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                            No image
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-semibold">{plant.name}</h3>
                            <p className="text-sm text-muted-foreground">{plant.category}</p>
                          </div>
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-sm">
                            {plant.difficulty}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center"><Sun className="h-4 w-4 mr-2" /> {plant.care.light}</div>
                          <div className="flex items-center"><Droplets className="h-4 w-4 mr-2" /> {plant.care.water}</div>
                          <div className="flex items-center"><ThermometerSun className="h-4 w-4 mr-2" /> {plant.care.temperature}</div>
                          <div className="flex items-center"><Wind className="h-4 w-4 mr-2" /> {plant.care.humidity}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {filteredPlants.length > 3 && (
                  <div className="text-center space-x-4 mb-12">
                    {visibleCount < filteredPlants.length && (
                      <Button onClick={() => setVisibleCount((prev) => prev + 10)}>Show More</Button>
                    )}
                    {visibleCount > 3 && (
                      <Button variant="secondary" onClick={() => setVisibleCount((prev) => Math.max(prev - 10, 3))}>
                        Show Less
                      </Button>
                    )}
                  </div>
                )}
              </>
            ) : (
              <p className="text-center text-muted-foreground py-8">No plants match your search or filter.</p>
            )}
          </div>

          {/* Growing Guides - Side Panel */}
          <div className="hidden lg:block w-full max-w-sm">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">🌱 Growing Guides</h2>
              <div className="space-y-4">
                <Link href="/guides/beginners-guide" className="block hover:bg-accent p-3 rounded-lg transition-colors">
                  <h3 className="font-semibold">Beginner&apos;s Guide to Indoor Plants</h3>
                  <p className="text-sm text-muted-foreground">Essential tips for new plant parents</p>
                </Link>
                <Link href="/guides/grow-vegetable" className="block hover:bg-accent p-3 rounded-lg transition-colors">
                  <h3 className="font-semibold">Urban Vegetable Garden</h3>
                  <p className="text-sm text-muted-foreground">Start growing your own food</p>
                </Link>
                <Link href="#" className="block hover:bg-accent p-3 rounded-lg transition-colors">
                  <h3 className="font-semibold">Sustainable Gardening</h3>
                  <p className="text-sm text-muted-foreground">Eco-friendly growing practices</p>
                </Link>
              </div>
            </Card>
          </div>
        </div>

        {/* Growing Guides on mobile */}
        <div className="lg:hidden mt-12">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">🌱 Growing Guides</h2>
            <div className="space-y-4">
              <Link href="/guides/beginners-guide" className="block hover:bg-accent p-3 rounded-lg transition-colors">
                <h3 className="font-semibold">Beginner&apos;s Guide to Indoor Plants</h3>
                <p className="text-sm text-muted-foreground">Essential tips for new plant parents</p>
              </Link>
              <Link href="#" className="block hover:bg-accent p-3 rounded-lg transition-colors">
                <h3 className="font-semibold">Urban Vegetable Garden</h3>
                <p className="text-sm text-muted-foreground">Start growing your own food</p>
              </Link>
              <Link href="#" className="block hover:bg-accent p-3 rounded-lg transition-colors">
                <h3 className="font-semibold">Sustainable Gardening</h3>
                <p className="text-sm text-muted-foreground">Eco-friendly growing practices</p>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
