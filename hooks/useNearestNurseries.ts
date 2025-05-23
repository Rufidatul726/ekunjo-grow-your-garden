import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebaseConfig"; 
import { getUserLocation } from "@/utils/geo";
import { getDistance } from "@/utils/distance"; 
import { Nursery } from "@/interfaces/nursery";

export async function getTop10NearestNurseries() {
  const coords = await getUserLocation();
  const snapshot = await getDocs(collection(db, "nurseries"));

  const nurseries = snapshot.docs.map((doc) => {
    const data = doc.data() as Nursery;
    console.log(data);
    
    if (!data.name || !data.address) {
      return null; // Skip nurseries with missing required fields
    }
    if (!data.latitude || !data.longitude) {
      return null; // Skip nurseries without coordinates
    }

    const distance = getDistance(
      coords.latitude,
      coords.longitude,
      data.latitude,
      data.longitude
    );

    return {
      id: doc.id,
      ...data,
      distance: parseFloat(distance.toFixed(2)),
    };
  });

  return nurseries
    .filter((nursery) => nursery !== null)
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 10);
}
