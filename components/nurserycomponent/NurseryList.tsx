"use client";


import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Nursery } from "@/interfaces/nursery";
import { MapPin } from "lucide-react";
import { getTop10NearestNurseries } from "@/hooks/useNearestNurseries";

const NurseryList = () => {
    const [nurseryList, setNurseryList] = useState<Nursery[]>([]);

    useEffect(() => {
        getTop10NearestNurseries()
            .then((data) => {
                setNurseryList(data);
                console.log("Nursery List:", data);
            })
            .catch((error) => {
                console.error("Error fetching nurseries:", error);
            });
    }
    , []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(nurseryList?.length > 0 ? nurseryList : []).map((nursery : Nursery) => (
        <Card key={nursery.id} className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold">{nursery.name}</h3>
              <div className="flex items-center text-muted-foreground mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{nursery.address}</span>
              </div>
            </div>
            <span className="text-sm text-green-600">{nursery.distance}</span>
          </div>
          
          {nursery.rating && 
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="ml-1">{nursery.rating}</span>
              </div>
            </div>
          }

          
          <div className="flex flex-wrap gap-2">
            {nursery?.specialties?.map((specialty, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-sm"
              >
                {specialty}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}

export default NurseryList