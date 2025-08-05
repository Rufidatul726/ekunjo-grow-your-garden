import {collection, addDoc} from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { Nursery } from "@/types/nurseries";

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