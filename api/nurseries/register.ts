import {doc, setDoc, collection, addDoc} from "firebase/firestore";
import { db } from "@/firebaseConfig";

interface Nursery {
    id?: number; // optional if coming from Firebase or Excel
    uuid?: string;
    name: string;
    address: string;
    fulladdr?: string;
    rating?: string;
    latitude?: number;
    longitude?: number;
    distance?: string;
    specialties?: string[];
    domain?: string;
    thumbnail?: string;
    phone_numbers?: string[];
    created_at?: string;
    source?: "mock" | "google" | "excel"; // helps identify source
  }

export async function pushToFirebase(nurseries: Nursery[]) {
    const nurseryCollection = collection(db, "nurseries");
    for (const nursery of nurseries) {
      try {
        await addDoc(nurseryCollection, nursery);
        console.log("Nursery added:", nursery.name);
      } catch (err) {
        console.error("Error adding nursery:", err);
      }
    }
  }