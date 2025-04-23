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

// const FEATURED_PLANTS = [
//   {
//     id: 1,
//     name: "Snake Plant",
//     image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     category: "Indoor",
//     difficulty: "Easy",
//     care: {
//       light: "Low to Bright",
//       water: "Low",
//       temperature: "60-85°F",
//       humidity: "Any",
//     },
//   },
//   {
//     id: 2,
//     name: "Monstera Deliciosa",
//     image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80",
//     category: "Indoor",
//     difficulty: "Moderate",
//     care: {
//       light: "Bright Indirect",
//       water: "Moderate",
//       temperature: "65-85°F",
//       humidity: "High",
//     },
//   },
//   {
//     id: 3,
//     name: "Herbs Garden",
//     image: "https://plus.unsplash.com/premium_photo-1678653651270-9f0f68119d99?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     category: "Edible",
//     difficulty: "Easy",
//     care: {
//       light: "Full Sun",
//       water: "Moderate",
//       temperature: "60-70°F",
//       humidity: "Moderate",
//     },
//   },
// ];

export default function PlantsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);
  const [searchedPlants, setSearchedPlants] = useState<Plant[] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);


  const handleSearch = () => {
    const search = searchTerm.trim().toLowerCase();
    if (!search) {
      setSearchedPlants(null); // Reset if search is empty
      return;
    }

    const sorted = (plantData as Plant[])
      .filter((plant) => plant.name.toLowerCase().includes(search))
      .sort((a, b) => {
        const aIndex = a.name.toLowerCase().indexOf(search);
        const bIndex = b.name.toLowerCase().indexOf(search);
        return aIndex - bIndex; // closer to beginning = more relevant
      });

    setSearchedPlants(sorted.slice(0, 3)); // Only top 3 most relevant
    setVisibleCount(3);
  };

  const filteredPlants = (plantData as Plant[]).filter((plant) => {
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? plant.category.toLowerCase() === selectedCategory.toLowerCase() : true;
    return matchesSearch && matchesCategory;
  });


  const visiblePlants = filteredPlants.slice(0, visibleCount);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Plant Guide</h1>
          <p className="text-xl text-muted-foreground">
            Discover plants perfect for your urban garden
          </p>
        </div>

        <div className="flex gap-4 mb-8">
          <Input
            type="text"
            placeholder="Search plants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={handleSearch}
            className="w-full"
          />
          <Button className="bg-green-600 hover:bg-green-700">
            <Search className="mr-2 h-4 w-4"
            /> Search
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {visiblePlants.map((plant) => (
            <Card key={plant.id} className="overflow-hidden">
              <div className="relative h-64 bg-gray-100">
                {plant.image ? (
                  <Image
                    src={plant.image}
                    alt={plant.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">No image</div>
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
          {/* {FEATURED_PLANTS.map((plant) => (
            <Card key={plant.id} className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={plant.image}
                  alt={plant.name}
                  fill
                  className="object-cover"
                />
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

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Sun className="h-4 w-4 mr-2 text-yellow-500" />
                    <span className="text-sm">{plant.care.light}</span>
                  </div>
                  <div className="flex items-center">
                    <Droplets className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm">{plant.care.water}</span>
                  </div>
                  <div className="flex items-center">
                    <ThermometerSun className="h-4 w-4 mr-2 text-red-500" />
                    <span className="text-sm">{plant.care.temperature}</span>
                  </div>
                  <div className="flex items-center">
                    <Wind className="h-4 w-4 mr-2 text-purple-500" />
                    <span className="text-sm">{plant.care.humidity}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))} */}
        </div>

        {filteredPlants.length > 3 && (
          <div className="text-center space-x-4 mb-16">
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

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Plant Categories</h2>
            <div className="grid grid-cols-2 gap-4">
              {["Indoor", "Outdoor", "Vegetable", "Herb", "Succulent", "Flower"].map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="justify-start"
                  onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                >
                  {category} Plants
                </Button>
              ))}
            </div>
            {selectedCategory && (
    <Button
      variant="destructive"
      onClick={() => setSelectedCategory(null)}
      className="mt-4"
    >
      Remove Filter
    </Button>
  )}
          </Card>


          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Growing Guides</h2>
            <div className="space-y-4">
              <Link href="/guides/beginners-guide" className="block hover:bg-accent p-3 rounded-lg transition-colors">
                <h3 className="font-semibold">Beginner's Guide to Indoor Plants</h3>
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