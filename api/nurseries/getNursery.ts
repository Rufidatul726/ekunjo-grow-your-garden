import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { Nursery } from "@/types/nurseries";

function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // km
  const toRad = (x: number) => x * Math.PI / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) *
    Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) ** 2;

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export async function getNearestNurseries(userLat: number, userLng: number) {
  const snapshot = await getDocs(collection(db, "nurseries"));
  const all = snapshot.docs.map(doc => doc.data() as Nursery);

  const withDistance = all
    .filter(n => n.latitude && n.longitude && !n.name?.toLowerCase().includes("school"))
    .map(n => ({
      ...n,
      distance: haversineDistance(userLat, userLng, n.latitude!, n.longitude!)
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 10);

  return withDistance;
}
