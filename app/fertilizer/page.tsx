import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Leaf,
  Droplets,
  Calendar,
  Sprout,
  Sun,
  Clock,
  AlertTriangle,
  CheckCircle,
  Beaker,
  Recycle,
  TrendingUp,
  Target,
  Zap,
  Shield,
  Heart,
  Star,
  ThermometerSun,
  CloudRain,
  BookOpen,
  Users,
  Award,
} from "lucide-react"
import Image from "next/image"

export default function FertilizerGuidelinePage() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-x-6">
      <section className="py-6 px-4 bg-gradient-to-br from-green-50 to-gray-50 my-4 text-center space-y-8">
        <h1 className="text-4xl font-bold">Fertilizer Guide for Bangladeshi Gardens</h1>
        <p className="text-lg text-muted-foreground">
          Boost your plants&apos; growth with the right nutrients – tailored for Bangladesh&apos;s soil and climate
        </p>

        <div className="grid lg:grid-cols-3 gap-8 text-start">
          <Card className="bg-emerald-500/10 backdrop-blur-sm border-emerald-500/20 hover:bg-emerald-500/20 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="bg-emerald-500 p-2 rounded-lg text-white">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Container Mastery</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm opacity-90">
                Containers lose nutrients 3x faster than ground soil. Here&apos;s how to compensate:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span>Use 1/4 strength liquid fertilizer weekly</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span>Add slow-release pellets every 3 months</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span>Mix compost into potting soil annually</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-blue-500/10 backdrop-blur-sm border-blue-500/20 hover:bg-blue-500/20 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 p-2 rounded-lg text-white">
                  <CloudRain className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Water-Nutrient Sync</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm opacity-90">Perfect timing prevents nutrient lockout and maximizes uptake:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-400" />
                  <span>Water before fertilizing (moist soil)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-400" />
                  <span>Apply fertilizer in early morning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-400" />
                  <span>Water lightly after application</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-yellow-500/10 backdrop-blur-sm border-yellow-500/20 hover:bg-yellow-500/20 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="bg-yellow-500 p-2 rounded-lg text-white">
                  <ThermometerSun className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Microclimate Magic</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm opacity-90">Urban heat islands affect nutrient needs dramatically:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-yellow-400" />
                  <span>Increase potassium in hot spots</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-yellow-400" />
                  <span>Reduce nitrogen during heat waves</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-yellow-400" />
                  <span>Use foliar feeding in shade areas</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Pro Secret Alert */}
        <div className="container mx-auto text-start bg-green-50 shadow-lg rounded-lg">
          <Alert className="border-white/30 bg-white/10">
            <Star className="h-4 w-4" />
            <AlertTitle>Pro Secret</AlertTitle>
            <AlertDescription>
              Mix 1 tablespoon of Epsom salt per gallon of water monthly for magnesium boost - especially crucial for
              tomatoes and peppers in containers!
            </AlertDescription>
          </Alert>
        </div>
      </section>


      {/* NPK Science Section */}
      <section className="py-6 px-4 my-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">The Science</Badge>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Understanding NPK: The Plant Nutrition Trinity
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Master the three essential nutrients that determine your garden&apos;s success
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl group">
              <CardHeader className="text-center">
                <div className="mx-auto bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-800">Nitrogen (N)</CardTitle>
                <CardDescription className="text-lg">The Growth Engine</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">What it does:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Promotes lush, green foliage</li>
                    <li>• Essential for photosynthesis</li>
                    <li>• Builds plant proteins</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Deficiency signs:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Yellowing older leaves</li>
                    <li>• Stunted growth</li>
                    <li>• Poor leaf development</li>
                  </ul>
                </div>
                <Progress value={85} className="h-2" />
                <p className="text-xs text-gray-600">Most important for leafy greens</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl group">
              <CardHeader className="text-center">
                <div className="mx-auto bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Sprout className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl text-purple-800">Phosphorus (P)</CardTitle>
                <CardDescription className="text-lg">The Root Builder</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">What it does:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Develops strong root systems</li>
                    <li>• Promotes flowering & fruiting</li>
                    <li>• Energy transfer in plants</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Deficiency signs:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Purple leaf discoloration</li>
                    <li>• Poor flowering</li>
                    <li>• Weak root development</li>
                  </ul>
                </div>
                <Progress value={70} className="h-2" />
                <p className="text-xs text-gray-600">Critical for flowering plants</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl group">
              <CardHeader className="text-center">
                <div className="mx-auto bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl text-orange-800">Potassium (K)</CardTitle>
                <CardDescription className="text-lg">The Protector</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">What it does:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Strengthens disease resistance</li>
                    <li>• Improves water regulation</li>
                    <li>• Enhances fruit quality</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Deficiency signs:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Brown leaf edges</li>
                    <li>• Weak stems</li>
                    <li>• Poor fruit development</li>
                  </ul>
                </div>
                <Progress value={75} className="h-2" />
                <p className="text-xs text-gray-600">Essential for fruit production</p>
              </CardContent>
            </Card>
          </div>

          <Alert className="border-emerald-200 bg-emerald-50">
            <Zap className="h-4 w-4 text-emerald-600" />
            <AlertTitle className="text-emerald-800">Pro Tip</AlertTitle>
            <AlertDescription className="text-emerald-700">
              The ideal NPK ratio changes with plant growth stages: High N for vegetative growth (20-10-10), balanced
              for general feeding (10-10-10), and high P-K for flowering/fruiting (5-10-10).
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Fertilizer Types Section */}
      <section id="fertilizer-types" className="py-6 px-4 bg-gradient-to-br from-gray-50 to-green-50 my-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800">Choose Your Weapon</Badge>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">The Complete Fertilizer Arsenal</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From organic slow-release to synthetic quick-fix solutions - find your perfect match
            </p>
          </div>

          <Tabs defaultValue="organic" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-white shadow-lg">
              <TabsTrigger
                value="organic"
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
              >
                Organic Powerhouse
              </TabsTrigger>
              <TabsTrigger value="synthetic" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Synthetic Precision
              </TabsTrigger>
              <TabsTrigger value="liquid" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
                Liquid Lightning
              </TabsTrigger>
            </TabsList>

            <TabsContent value="organic" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1632660879345-50887555aafc?q=80&w=1935&h=1800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Organic compost and natural fertilizers"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-2xl"
                  />
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Recycle className="h-8 w-8 text-emerald-600" />
                    <h3 className="text-xl font-bold text-emerald-800">Organic Fertilizers</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    Nature&apos;s slow and steady approach to plant nutrition. Perfect for building long-term soil health.
                  </p>

                  <div className="grid gap-4">
                    <Card className="border-emerald-200 bg-emerald-50">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-emerald-800 mb-2">🌱 Compost & Worm Castings</h4>
                        <p className="text-sm text-gray-600">
                          The gold standard - improves soil structure, adds beneficial microbes
                        </p>
                        <div className="mt-2 flex items-center space-x-2">
                          <Badge variant="secondary" className="text-xs">
                            Slow Release
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            Soil Builder
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-emerald-200 bg-emerald-50">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-emerald-800 mb-2">🐟 Fish Emulsion</h4>
                        <p className="text-sm text-gray-600">
                          High nitrogen, fast-acting organic option for quick green-up
                        </p>
                        <div className="mt-2 flex items-center space-x-2">
                          <Badge variant="secondary" className="text-xs">
                            High N
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            Fast Acting
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-emerald-200 bg-emerald-50">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-emerald-800 mb-2">🦴 Bone Meal & Blood Meal</h4>
                        <p className="text-sm text-gray-600">Bone meal for phosphorus, blood meal for nitrogen boost</p>
                        <div className="mt-2 flex items-center space-x-2">
                          <Badge variant="secondary" className="text-xs">
                            Targeted Nutrients
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            Long Lasting
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="synthetic" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Beaker className="h-8 w-8 text-blue-600" />
                    <h3 className="text-xl font-bold text-blue-800">Synthetic Fertilizers</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    Precision nutrition with immediate results. Perfect for correcting deficiencies quickly.
                  </p>

                  <div className="grid gap-4">
                    <Card className="border-blue-200 bg-blue-50">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-blue-800 mb-2">⚡ Granular NPK (10-10-10)</h4>
                        <p className="text-sm text-gray-600">Balanced nutrition for general feeding, lasts 6-8 weeks</p>
                        <div className="mt-2 flex items-center space-x-2">
                          <Badge variant="secondary" className="text-xs">
                            Balanced
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            Long Release
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-blue-200 bg-blue-50">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-blue-800 mb-2">🚀 Water-Soluble (20-20-20)</h4>
                        <p className="text-sm text-gray-600">Immediate nutrient availability, perfect for containers</p>
                        <div className="mt-2 flex items-center space-x-2">
                          <Badge variant="secondary" className="text-xs">
                            Instant
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            High Concentration
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-blue-200 bg-blue-50">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-blue-800 mb-2">🎯 Specialized Blends</h4>
                        <p className="text-sm text-gray-600">
                          Tomato, rose, citrus - formulated for specific plant needs
                        </p>
                        <div className="mt-2 flex items-center space-x-2">
                          <Badge variant="secondary" className="text-xs">
                            Targeted
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            Optimized
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div>
                  <Image
                    src="https://www.fgsourcing.com/wp-content/uploads/2023/05/fert1-1.jpg"
                    alt="Synthetic fertilizer granules and measuring tools"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="liquid" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Image
                    src="https://salmanzafar.me/wp-content/uploads/2020/05/organic-liquid-fertilizer-for-garden.jpg"
                    alt="Liquid fertilizer application in urban garden"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-2xl"
                  />
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Droplets className="h-8 w-8 text-purple-600" />
                    <h3 className="text-xl font-bold text-purple-800">Liquid Fertilizers</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    The speed demons of plant nutrition. Instant absorption for rapid results.
                  </p>

                  <div className="grid gap-4">
                    <Card className="border-purple-200 bg-purple-50">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-purple-800 mb-2">💧 Foliar Feeding</h4>
                        <p className="text-sm text-gray-600">Direct leaf absorption - 90% faster than root feeding</p>
                        <div className="mt-2 flex items-center space-x-2">
                          <Badge variant="secondary" className="text-xs">
                            Ultra Fast
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            Direct Absorption
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-purple-200 bg-purple-50">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-purple-800 mb-2">🏺 Container Perfect</h4>
                        <p className="text-sm text-gray-600">
                          No salt buildup, easy application, perfect for urban gardens
                        </p>
                        <div className="mt-2 flex items-center space-x-2">
                          <Badge variant="secondary" className="text-xs">
                            Clean
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            Urban Friendly
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-purple-200 bg-purple-50">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-purple-800 mb-2">🎛️ Precise Control</h4>
                        <p className="text-sm text-gray-600">Adjust concentration weekly based on plant needs</p>
                        <div className="mt-2 flex items-center space-x-2">
                          <Badge variant="secondary" className="text-xs">
                            Flexible
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            Customizable
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* DIY Fertilizer Recipes */}
      <section className="py-6 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">Kitchen Chemistry</Badge>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">DIY Fertilizer Recipes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Create powerful plant food from everyday kitchen scraps and household items
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Recycle className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-green-800">Banana Peel Tea</CardTitle>
                </div>
                <CardDescription>High-potassium boost for flowering plants</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Ingredients:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 5 banana peels</li>
                      <li>• 1 gallon water</li>
                      <li>• 1 week steeping time</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Best for:</h4>
                    <p className="text-sm">Tomatoes, roses, flowering plants</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">High Potassium</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Droplets className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-800">Coffee Ground Compost</CardTitle>
                </div>
                <CardDescription>Nitrogen-rich soil amendment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Ingredients:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Used coffee grounds</li>
                      <li>• Brown materials (leaves)</li>
                      <li>• 2-3 months composting</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Best for:</h4>
                    <p className="text-sm">Acid-loving plants, leafy greens</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">High Nitrogen</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Beaker className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-purple-800">Eggshell Calcium</CardTitle>
                </div>
                <CardDescription>Slow-release calcium supplement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Ingredients:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Clean, dried eggshells</li>
                      <li>• Coffee grinder or mortar</li>
                      <li>• Sprinkle around plants</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Best for:</h4>
                    <p className="text-sm">Tomatoes, peppers (prevents blossom end rot)</p>
                  </div>
                  <Badge className="bg-purple-100 text-purple-800">Calcium Rich</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Smart Schedule */}
      <section id="schedule" className="py-6 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 my-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Smart Timing</Badge>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Your Year-Round Fertilizing Calendar</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Never guess again - follow this science-based schedule for maximum results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-2 border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl group">
              <CardHeader className="text-center">
                <div className="mx-auto bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Sprout className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-800">Spring Awakening</CardTitle>
                <CardDescription className="text-lg">March - May</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Week 1-2:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Soil test and pH adjustment</li>
                    <li>• Apply compost layer</li>
                    <li>• Start with balanced 10-10-10</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Week 3-8:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Weekly liquid feeding</li>
                    <li>• Higher nitrogen for leafy growth</li>
                    <li>• Monitor for deficiencies</li>
                  </ul>
                </div>
                <Progress value={90} className="h-2" />
                <p className="text-xs text-gray-600">Peak growing season preparation</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:border-yellow-300 transition-all duration-300 hover:shadow-xl group">
              <CardHeader className="text-center">
                <div className="mx-auto bg-gradient-to-br from-yellow-100 to-yellow-200 p-4 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Sun className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl text-yellow-800">Summer Power</CardTitle>
                <CardDescription className="text-lg">June - August</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">High Intensity:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Bi-weekly liquid feeding</li>
                    <li>• Increase phosphorus for flowers</li>
                    <li>• Early morning applications</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Heat Stress Care:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Reduce nitrogen in extreme heat</li>
                    <li>• Increase potassium for stress</li>
                    <li>• Foliar feeding in shade</li>
                  </ul>
                </div>
                <Progress value={100} className="h-2" />
                <p className="text-xs text-gray-600">Maximum nutrient demand period</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl group">
              <CardHeader className="text-center">
                <div className="mx-auto bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl text-orange-800">Fall Harvest</CardTitle>
                <CardDescription className="text-lg">September - November</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Transition Phase:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Reduce nitrogen gradually</li>
                    <li>• Increase potassium for hardening</li>
                    <li>• Apply slow-release for winter</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Preparation:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Compost application</li>
                    <li>• Soil amendment for next year</li>
                    <li>• Final harvest nutrition</li>
                  </ul>
                </div>
                <Progress value={60} className="h-2" />
                <p className="text-xs text-gray-600">Preparing for dormancy</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl group">
              <CardHeader className="text-center">
                <div className="mx-auto bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-800">Winter Rest</CardTitle>
                <CardDescription className="text-lg">December - February</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Minimal Care:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Indoor plants only</li>
                    <li>• Reduced frequency</li>
                    <li>• Focus on houseplants</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Planning Phase:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Order seeds and supplies</li>
                    <li>• Plan next year&apos;s garden</li>
                    <li>• Maintain compost systems</li>
                  </ul>
                </div>
                <Progress value={20} className="h-2" />
                <p className="text-xs text-gray-600">Rest and planning period</p>
              </CardContent>
            </Card>
          </div>

          <Alert className="border-blue-200 bg-blue-50">
            <Calendar className="h-4 w-4 text-blue-600" />
            <AlertTitle className="text-blue-800">Smart Reminder</AlertTitle>
            <AlertDescription className="text-blue-700">
              Download our free mobile app to get personalized fertilizing reminders based on your location, plants, and
              weather conditions. Never miss the perfect feeding window again!
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Troubleshooting Guide */}
      <section className="py-6 px-4 bg-gradient-to-br from-red-50 to-orange-50 my-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-800">Problem Solver</Badge>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Fertilizer Troubleshooting Guide</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Diagnose and fix common fertilizing problems before they damage your plants
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-red-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                  <CardTitle className="text-red-800">Fertilizer Burn</CardTitle>
                </div>
                <CardDescription>Brown, crispy leaf edges and stunted growth</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Symptoms:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Brown, burnt leaf tips</li>
                    <li>• Wilting despite moist soil</li>
                    <li>• White salt crust on soil</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Quick Fix:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Flush soil with plain water</li>
                    <li>• Remove damaged leaves</li>
                    <li>• Reduce fertilizer concentration by 50%</li>
                  </ul>
                </div>
                <Badge className="bg-red-100 text-red-800">Emergency Action Required</Badge>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-6 w-6 text-yellow-500" />
                  <CardTitle className="text-yellow-800">Nitrogen Deficiency</CardTitle>
                </div>
                <CardDescription>Yellowing leaves starting from bottom</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Symptoms:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Older leaves turn yellow</li>
                    <li>• Slow, stunted growth</li>
                    <li>• Pale green overall color</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Solution:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Apply high-nitrogen fertilizer</li>
                    <li>• Use fish emulsion for quick fix</li>
                    <li>• Increase feeding frequency</li>
                  </ul>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800">Common Issue</Badge>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-6 w-6 text-purple-500" />
                  <CardTitle className="text-purple-800">Phosphorus Deficiency</CardTitle>
                </div>
                <CardDescription>Purple leaves and poor flowering</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Symptoms:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Purple or reddish leaves</li>
                    <li>• Poor flower/fruit development</li>
                    <li>• Delayed maturity</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Solution:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Apply bone meal or rock phosphate</li>
                    <li>• Check soil pH (should be 6.0-7.0)</li>
                    <li>• Use bloom booster fertilizer</li>
                  </ul>
                </div>
                <Badge className="bg-purple-100 text-purple-800">Flowering Issue</Badge>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-6 w-6 text-orange-500" />
                  <CardTitle className="text-orange-800">Potassium Deficiency</CardTitle>
                </div>
                <CardDescription>Brown leaf edges and weak stems</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Symptoms:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Brown, scorched leaf edges</li>
                    <li>• Weak, floppy stems</li>
                    <li>• Poor disease resistance</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Solution:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Apply potassium sulfate</li>
                    <li>• Use banana peel tea</li>
                    <li>• Switch to high-K fertilizer</li>
                  </ul>
                </div>
                <Badge className="bg-orange-100 text-orange-800">Stress Related</Badge>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-6 w-6 text-blue-500" />
                  <CardTitle className="text-blue-800">pH Lockout</CardTitle>
                </div>
                <CardDescription>Nutrients present but unavailable</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Symptoms:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Multiple deficiency signs</li>
                    <li>• No improvement with fertilizer</li>
                    <li>• Soil test shows adequate nutrients</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Solution:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Test and adjust soil pH</li>
                    <li>• Add lime (raise pH) or sulfur (lower pH)</li>
                    <li>• Use chelated fertilizers temporarily</li>
                  </ul>
                </div>
                <Badge className="bg-blue-100 text-blue-800">pH Issue</Badge>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-6 w-6 text-green-500" />
                  <CardTitle className="text-green-800">Over-fertilization</CardTitle>
                </div>
                <CardDescription>Too much of a good thing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Symptoms:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Excessive leafy growth</li>
                    <li>• Few flowers/fruits</li>
                    <li>• Soft, weak plant tissue</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Solution:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Stop fertilizing temporarily</li>
                    <li>• Flush soil with water</li>
                    <li>• Resume with 1/4 strength</li>
                  </ul>
                </div>
                <Badge className="bg-green-100 text-green-800">Less is More</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
