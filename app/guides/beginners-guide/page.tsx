"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Leaf, Droplet, Sun, Wind, AlertTriangle, Bug, Lightbulb, FlowerIcon as PotPlants } from "lucide-react"

const BeginnersGuide = () => {
  // Animation variants for staggered animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 ">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1669205410750-0e231c0a0bcd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DS"
          alt="Indoor plants in a bright room"
          width={1200}
          height={400}
          className="object-cover w-full h-full brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
          <Badge className="mb-4 bg-green-600 hover:bg-green-700">Plant Care Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Beginner&apos;s Guide to Indoor Plants</h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Bring nature indoors with easy-to-grow houseplants that purify air and elevate your space
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <motion.div
          className="prose prose-lg max-w-none mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl text-gray-700 leading-relaxed">
            Houseplants are more than just decor — they clean the air, boost your mood, and bring nature into your home.
            Whether you&apos;re in a small apartment or just starting your plant journey, this guide will help you choose the
            right plants and care for them confidently.
          </p>
        </motion.div>

        {/* Why Grow Houseplants */}
        <motion.div className="mb-16" variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <Card className="overflow-hidden border-green-100 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-green-50 border-b border-green-100">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl text-green-800">Why Grow Houseplants?</CardTitle>
                </div>
                <CardDescription>The benefits of bringing nature indoors</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <Wind className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Purify Indoor Air</h3>
                      <p className="text-gray-600">Plants naturally filter toxins and release oxygen</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <Lightbulb className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Reduce Stress</h3>
                      <p className="text-gray-600">Studies show plants help lower anxiety and enhance focus</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <PotPlants className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Natural Beauty</h3>
                      <p className="text-gray-600">Add living decor that evolves and grows with you</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <Leaf className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Connect with Nature</h3>
                      <p className="text-gray-600">Bring the outdoors in, especially in urban environments</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Easiest Plants & Light Needs */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <Card className="h-full border-green-100 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-green-50 border-b border-green-100">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <PotPlants className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl text-green-800">Easiest Plants for Beginners</CardTitle>
                </div>
                <CardDescription>Low-maintenance options for new plant parents</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Snake Plant", difficulty: "Very Easy" },
                    { name: "Pothos", difficulty: "Very Easy" },
                    { name: "Spider Plant", difficulty: "Easy" },
                    { name: "Peace Lily", difficulty: "Easy" },
                    { name: "Aloe Vera", difficulty: "Easy" },
                    { name: "Lucky Bamboo", difficulty: "Easy" },
                    { name: "Rubber Tree", difficulty: "Moderate" },
                    { name: "Fern", difficulty: "Moderate" },
                  ].map((plant, index) => (
                    <div key={index} className="flex flex-col items-start">
                      <span className="font-medium text-gray-900">{plant.name}</span>
                      <Badge variant="outline" className="mt-1 text-xs bg-green-50 text-green-700 border-green-200">
                        {plant.difficulty}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full border-green-100 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-green-50 border-b border-green-100">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Sun className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl text-green-800">Light Needs</CardTitle>
                </div>
                <CardDescription>Finding the right spot for your plants</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge className="mt-1 bg-gray-200 text-gray-700">Low Light</Badge>
                    <div>
                      <p className="text-gray-700">Snake Plant, Peace Lily, Pothos</p>
                      <p className="text-sm text-gray-500">
                        Perfect for north-facing windows or rooms with minimal sunlight
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="mt-1 bg-yellow-100 text-yellow-700">Medium Light</Badge>
                    <div>
                      <p className="text-gray-700">Spider Plant, Rubber Tree</p>
                      <p className="text-sm text-gray-500">Ideal for east or west-facing windows with filtered light</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="mt-1 bg-yellow-200 text-yellow-800">Bright Light</Badge>
                    <div>
                      <p className="text-gray-700">Aloe Vera, Croton</p>
                      <p className="text-sm text-gray-500">
                        Best near south-facing windows with bright, indirect light
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="mt-1 bg-purple-100 text-purple-700">No Window?</Badge>
                    <div>
                      <p className="text-gray-700">Use grow lights to mimic sunlight</p>
                      <p className="text-sm text-gray-500">LED grow lights can supplement or replace natural light</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Care Tabs */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-2">
            <span className="bg-green-100 p-2 rounded-full">
              <Droplet className="h-6 w-6 text-green-600" />
            </span>
            Plant Care Essentials
          </h2>

          <Tabs defaultValue="watering" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="watering">Watering & Feeding</TabsTrigger>
              <TabsTrigger value="containers">Containers & Soil</TabsTrigger>
              <TabsTrigger value="problems">Common Problems</TabsTrigger>
            </TabsList>

            <TabsContent value="watering" className="border rounded-lg p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Watering Tips</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Droplet className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Only water when the top inch of soil is dry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Droplet className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Use pots with drainage holes to prevent root rot</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Droplet className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Water less frequently in winter when growth slows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Droplet className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Watch for overwatering signs: yellow or mushy leaves</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Feeding Schedule</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Leaf className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Fertilize every 4–6 weeks during growing season (spring/summer)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Leaf className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Use half-strength fertilizer to avoid burning roots</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Leaf className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Reduce or stop fertilizing in fall and winter</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Leaf className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Consider organic options like worm castings or compost tea</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="containers" className="border rounded-lg p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Container Tips</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <PotPlants className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Choose pots 1-2 inches larger than the current one when repotting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <PotPlants className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Ensure all containers have drainage holes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <PotPlants className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Rotate pots regularly so all sides get light</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <PotPlants className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Consider self-watering pots for consistent moisture</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Soil Needs</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Leaf className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Use well-draining potting soil (not garden soil)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Leaf className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Add perlite or pumice for better drainage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Leaf className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Repot every 1–2 years or when rootbound</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Leaf className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Clean dust from leaves to help with photosynthesis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="problems" className="border rounded-lg p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Common Issues</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Yellow Leaves:</span>
                        <span className="block text-gray-600">Overwatering or low light</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Browning Edges:</span>
                        <span className="block text-gray-600">Low humidity or too much fertilizer</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Leaf Drop:</span>
                        <span className="block text-gray-600">Drafts or sudden temperature changes</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Mold or Mushrooms:</span>
                        <span className="block text-gray-600">Too much moisture in soil</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Pest Control</h3>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Bug className="h-4 w-4 text-amber-500" />
                      Common Pests
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      <Badge variant="outline" className="justify-start">
                        Aphids
                      </Badge>
                      <Badge variant="outline" className="justify-start">
                        Fungus Gnats
                      </Badge>
                      <Badge variant="outline" className="justify-start">
                        Spider Mites
                      </Badge>
                      <Badge variant="outline" className="justify-start">
                        Scale
                      </Badge>
                      <Badge variant="outline" className="justify-start">
                        Whiteflies
                      </Badge>
                      <Badge variant="outline" className="justify-start">
                        Thrips
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Treatment Options:</h4>
                    <ul className="space-y-1 text-gray-100">
                      <li>• Neem oil spray (natural pesticide)</li>
                      <li>• Insecticidal soap for most infestations</li>
                      <li>• Sticky traps for flying insects</li>
                      <li>• Isolate affected plants immediately</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Fun Ideas */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Card className="border-green-100 shadow-md overflow-hidden">
            <CardHeader className="bg-green-50 border-b border-green-100">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Lightbulb className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-800">Fun Indoor Gardening Ideas</CardTitle>
              </div>
              <CardDescription>Creative ways to display and enjoy your plants</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="bg-green-100 p-3 rounded-full h-fit">
                    <PotPlants className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Kitchen Herb Garden</h3>
                    <p className="text-gray-600">
                      Grow basil, mint, and cilantro on your kitchen counter for fresh herbs at your fingertips. Use
                      matching pots for a cohesive look.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-green-100 p-3 rounded-full h-fit">
                    <PotPlants className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">DIY Terrarium</h3>
                    <p className="text-gray-600">
                      Build a self-contained ecosystem with moss, mini ferns, and small stones in a glass container.
                      Perfect for small spaces.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-green-100 p-3 rounded-full h-fit">
                    <PotPlants className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Jungalow Corner</h3>
                    <p className="text-gray-600">
                      Create a &quot;jungalow&quot; corner with layered plant stands, hanging planters, and plants of varying
                      heights for a lush look.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-green-100 p-3 rounded-full h-fit">
                    <PotPlants className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Upside-Down Planters</h3>
                    <p className="text-gray-600">
                      Try upside-down planters for trailing plants like pothos or spider plants. They create visual
                      interest and save space.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-16">
          <p>
            Source:{" "}
            <a
              href="https://www.gardeningknowhow.com/houseplants/hpgen/beginners-guide-to-houseplants.htm"
              className="underline hover:text-green-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gardening Know How
            </a>
          </p>
          <p className="mt-2">
            Happy planting! Remember that even experienced gardeners lose plants sometimes. The joy is in the learning
            process.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BeginnersGuide
