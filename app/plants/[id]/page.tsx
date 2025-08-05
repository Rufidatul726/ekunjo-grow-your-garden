import { notFound } from "next/navigation";
import plantData from "@/data/plants.json";
import Image from "next/image";
import { PlantData as Plant } from "@/types/plants";

export default function PlantDetailPage({ params }: { params: { id: string } }) {
  const plant = (plantData as Plant[]).find((p) => p.id.toString() === params.id);

  if (!plant) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">{plant.name}</h1>
      <p className="text-muted-foreground mb-4">{plant.commonNames?.join(", ")}</p>

      {plant.toxicity && (
        <div className="mb-6 p-4 border-l-4 border-red-500 bg-red-50 rounded">
          <p className="font-semibold text-red-700">⚠️ Toxic to Humans & Pets</p>
          <p className="text-sm text-red-600">{plant.toxicity}</p>
        </div>
      )}

      <div className="relative w-full h-64 mb-6">
        {plant.image ? (
          <Image src={plant.image} alt={plant.name} fill className="object-cover rounded-lg" />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
            No image
          </div>
        )}
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🌿 Plant Overview</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div><strong>Lifespan:</strong> {plant.lifespan}</div>
          <div><strong>Bloom Time:</strong> {plant.bloomTime}</div>
          <div><strong>Harvest Time:</strong> {plant.harvestTime}</div>
          <div><strong>Height:</strong> {plant.height}</div>
          <div><strong>Spread:</strong> {plant.spread}</div>
          <div><strong>Leaf Type:</strong> {plant.leafType}</div>
          <div><strong>Leaf Color:</strong> {plant.leafColor}</div>
          <div><strong>Flower Size:</strong> {plant.flowerSize}</div>
          <div><strong>Flower Color:</strong> {plant.flowerColor}</div>
          <div><strong>Stem Color:</strong> {plant.stemColor}</div>
          <div><strong>Dormancy:</strong> {plant.dormancy}</div>
          <div><strong>Ideal Temperature:</strong> {plant.care?.temperature}</div>
          <div><strong>Growth Season:</strong> {plant.growthSeason}</div>
          <div><strong>Growth Rate:</strong> {plant.growthRate}</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🛠️ Care Guide</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><strong>Water:</strong> {plant.care?.water}</li>
          <li><strong>Sunlight:</strong> {plant.care?.light}</li>
          <li><strong>Temperature:</strong> {plant.care?.temperature}</li>
          <li><strong>Fertilizer:</strong> {plant.care?.fertilizer}</li>
          <li><strong>Pruning:</strong> {plant.care?.pruning}</li>
          <li><strong>Propagation:</strong> {plant.care?.propagation}</li>
          <li><strong>Repotting:</strong> {plant.care?.repotting}</li>
        </ul>
      </section>

      {plant.diseases && plant.diseases.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">🦠 Common Diseases</h2>
          <div className="space-y-4 text-sm">
            {plant.diseases.map((disease, idx) => (
              <div key={idx} className="border p-4 rounded-md bg-gray-50">
                <h3 className="font-semibold text-base">{idx + 1}. {disease.name}</h3>
                <p><strong>Identification:</strong> {disease.identification}</p>
                <p><strong>Treatment:</strong> {disease.treatment}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
