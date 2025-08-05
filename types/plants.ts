import { Disease } from "./diseases";
import { Timestamp } from "firebase/firestore";

export type Plant = {
  id: string;
    name: string;
    sunlight: string;
    water: string;
    notes: string;
    addedAt: Timestamp;
    growthStage?: string; // Optional, e.g., "Seedling", "Vegetative", "Flowering"
    nextWaterDate?: Timestamp; // Optional, for scheduling watering
    imageUrl?: string; // Optional, for plant images
}


export type PlantData = {
  id: number | string;
  name: string;
  category?: string[];
  image?: string;
  difficulty?: string;
  commonNames?: string[];
  toxicity?: string;

  lifespan?: string;
  bloomTime?: string;
  harvestTime?: string;
  height?: string;
  spread?: string;
  leafType?: string;
  leafColor?: string;
  flowerSize?: string;
  flowerColor?: string;
  stemColor?: string;
  dormancy?: string;
  growthSeason?: string;
  growthRate?: string;

  care?: {
    light?: string;
    water?: string;
    temperature?: string;
    humidity?: string;
    fertilizer?: string;
    pruning?: string;
    propagation?: string;
    repotting?: string;
  };

  diseases?: Disease[];
};
