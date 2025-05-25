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