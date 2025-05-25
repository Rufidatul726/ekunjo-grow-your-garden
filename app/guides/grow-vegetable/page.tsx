'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function UrbanVegetableGardening() {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <div className="bg-green-700 text-white text-center py-12 px-4 rounded-b-3xl shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4">Urban Vegetable Gardening 🏙️🌿</h1>
        <p className="text-lg max-w-2xl mx-auto">Transform your rooftop, balcony, or backyard into a thriving food garden — one leaf at a time.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Section: What is Urban Gardening */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <Image 
            src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Urban Garden" width={500} height={300} className="rounded-xl shadow-md" />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-green-600">🌱 What Is Urban Vegetable Gardening?</h2>
            <p>
              It&apos;s the art of growing your own food in small city spaces. Whether it&apos;s a balcony, a windowsill, or a rooftop,
              you can grow fresh tomatoes, spinach, and herbs with minimal resources.
            </p>
          </div>
        </div>

        {/* Section Cards */}
        <section className="py-10 bg-[#F4F9F4]" id="gardening-types">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center text-green-800 mb-8">🌿 Choose Your Gardening Type</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Balcony Gardening */}
      <div className="bg-white p-6 rounded-xl shadow border border-yellow-200 hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-bold mb-2 text-yellow-600">🌇 Balcony</h3>
        <p className="text-gray-700 text-sm">
          Ideal for urban dwellers. Utilize vertical space and containers for herbs and small vegetables.
        </p>
      </div>

      {/* Terrace Gardening */}
      <div className="bg-white p-6 rounded-xl shadow border border-blue-200 hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-bold mb-2 text-blue-600">🏢 Terrace</h3>
        <p className="text-gray-700 text-sm">
          Great for larger setups. Grow fruits, vegetables, and even small trees with ample sunlight.
        </p>
      </div>

      {/* Square Foot Gardening */}
      <div className="bg-white p-6 rounded-xl shadow border border-green-200 hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-bold mb-2 text-green-600">📏 Square Foot</h3>
        <p className="text-gray-700 text-sm">
          Maximize small space with high-yield grid-based planting. Perfect for beginners.
        </p>
      </div>

      {/* Backyard Patio */}
      <div className="bg-white p-6 rounded-xl shadow border border-red-200 hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-bold mb-2 text-red-600">🏡 Backyard Patio</h3>
        <p className="text-gray-700 text-sm">
          Enjoy outdoor gardening with planters and raised beds for a variety of crops.
        </p>
      </div>
    </div>

    {/* Balcony Gardening Deep Dive */}
    <div className="mt-8 bg-white p-6 rounded-xl shadow border border-yellow-200 transition duration-300">
      <h3 className="text-xl font-bold mb-2 text-yellow-600">📘 Balcony Gardening – Step by Step</h3>
      <div className="space-y-4 text-sm text-gray-700">
        <details className="group">
          <summary className="cursor-pointer font-medium text-yellow-700 group-open:underline">1. Best Balcony Direction & Sunlight</summary>
          <p className="mt-1">
            South or west-facing balconies are ideal. East-facing can grow greens and herbs. North-facing? Try shade-tolerant veggies like lettuce, peas, and mustard greens.
          </p>
        </details>
        <details className="group">
          <summary className="cursor-pointer font-medium text-yellow-700 group-open:underline">2. Choosing the Right Containers</summary>
          <p className="mt-1">
            Use 3–5 gallon pots for tomatoes, peppers, or eggplants. For looks, try decorative barrels or colorful planters. Use railing or vertical planters for herbs.
          </p>
        </details>
        <details className="group">
          <summary className="cursor-pointer font-medium text-yellow-700 group-open:underline">3. Ideal Soil Mix</summary>
          <p className="mt-1">
            Go for well-drained, loose, nutrient-rich soil. Mix in compost or slow-release fertilizer. Optionally add hydrogel crystals to retain water in hot balconies.
          </p>
        </details>
        <details className="group">
          <summary className="cursor-pointer font-medium text-yellow-700 group-open:underline">4. Seedlings & Transplants</summary>
          <p className="mt-1">
            Start seeds in trays, transplant when 2 leaves appear. Some veggies like gourds and squash don’t like transplanting—plant them directly in large pots.
          </p>
        </details>
        <details className="group">
          <summary className="cursor-pointer font-medium text-yellow-700 group-open:underline">5. Watering & Fertilizing</summary>
          <p className="mt-1">
            Always water in the morning. Fertilize every 2–4 weeks or use compost twice during the growing season. Watch for pests and treat naturally with neem oil or insecticidal soap.
          </p>
        </details>
      </div>
    </div>

    {/* Terrace Gardening Deep Dive */}
    <div className="mt-6 bg-white p-6 rounded-xl shadow border border-blue-200 transition duration-300">
      <h3 className="text-xl font-bold mb-2 text-blue-600">📘 Terrace Gardening Deep Dive</h3>
      <div className="space-y-4 text-sm text-gray-700">
        <details className="group">
          <summary className="cursor-pointer font-medium text-blue-700 group-open:underline">1. Containers vs. Raised Beds</summary>
          <p className="mt-1">
            Use large, UV-stable containers or consider installing raised beds if your terrace is waterproofed. Raised beds provide better drainage and higher yields.
          </p>
        </details>
        <details className="group">
          <summary className="cursor-pointer font-medium text-blue-700 group-open:underline">2. What to Grow</summary>
          <p className="mt-1">
            Tomatoes, cucumbers, radishes, carrots, beans, onions, lettuce, eggplants, and melons thrive well on a sunny terrace with deep containers or beds.
          </p>
        </details>
        <details className="group">
          <summary className="cursor-pointer font-medium text-blue-700 group-open:underline">3. Soil Prep & Fertility</summary>
          <p className="mt-1">
            Mix compost, manure, and potting mix. Avoid regular garden soil. Check pH (6–7 preferred) and protect raised beds from pests with mesh if needed.
          </p>
        </details>
        <details className="group">
          <summary className="cursor-pointer font-medium text-blue-700 group-open:underline">4. Tips for Success</summary>
          <p className="mt-1">
            Water deeply and early. Use vertical planters for gourds or climbers. Rotate crops to keep soil healthy. Mulch to retain moisture and suppress weeds.
          </p>
        </details>
      </div>
    </div>
  </div>
</section>

        <div>
          <h2 className="text-3xl font-bold text-green-600 text-center mb-8">🌱 Why Grow Your Own Food?</h2>
          <p className="text-center max-w-2xl mx-auto">
            Growing your own food is not just a trend; it’s a lifestyle choice that promotes health, sustainability, and
            self-sufficiency. Plus, nothing beats the taste of fresh produce!
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Section: Benefits of Urban Gardening */}
        <div className="bg-white p-8 rounded-2xl shadow-md text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">🌍 Benefits of Urban Gardening</h2>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>Fresh, organic produce at your fingertips</li>
            <li>Reduces carbon footprint</li>
            <li>Enhances mental well-being</li>
            <li>Promotes biodiversity in urban areas</li>
            <li>Encourages community bonding</li>
          </ul>
        </div>
        {/* Section: Common Mistakes */}
        <div className="bg-white p-8 rounded-2xl shadow-md text-center">
          <h2 className="text-3xl font-bold text-red-800 mb-4">❌ Common Mistakes to Avoid</h2>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>Overwatering or underwatering</li>
            <li>Ignoring pest control</li>
            <li>Not rotating crops</li>
            <li>Using poor quality soil</li>
            <li>Neglecting sunlight requirements</li>
          </ul>
        </div>
          </div>
        </div>

        {/* Care Tips Section */}
        <div className="bg-green-100 p-8 rounded-2xl text-center shadow-md">
          <h2 className="text-3xl font-bold text-green-800 mb-4">🛠️ Garden Care Essentials</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <ul className="list-disc list-inside text-green-700 space-y-1">
              <li>Water early morning</li>
              <li>Use compost & liquid fertilizers</li>
              <li>Trim dead leaves & shoots</li>
            </ul>
            <ul className="list-disc list-inside text-green-700 space-y-1">
              <li>Check pests weekly</li>
              <li>Neem oil spray works wonders</li>
              <li>Rotate crops to avoid soil fatigue</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold text-green-700">Ready to grow your own food?</h2>
          <p className="text-sm text-gray-600 mt-1">Join <span className="font-semibold">Ekunjo</span> and start your urban farming journey today.</p>
          <Button 
          className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full shadow-md transition"
          onClick={() => window.location.href = '/auth/register'}>
            🌿 Get Started
          </Button>
        </div>
      </div>

      {/* Footer */}
        <div className="text-center text-sm text-gray-500 my-16">
          <p>
            Source:{" "}
            <a
              href="https://balconygardenweb.com/how-to-make-an-urban-vegetable-garden-city-vegetable-garden/"
              className="underline hover:text-green-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Urban Vegetable Gardening
            </a>
          </p>
          <p className="mt-2">
            Happy planting! Remember that even experienced gardeners lose plants sometimes. The joy is in the learning
            process.
          </p>
        </div>
    </div>
  );
}
