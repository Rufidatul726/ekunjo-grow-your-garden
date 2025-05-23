"use client";

import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
import dynamic from "next/dynamic";
import axios from 'axios';
import './map.css'

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

const MOCK_NURSERIES = [
    {
        "id": 1,
        "name": "Suhrawardi Medical Garden",
        "address": "Q99C+MGP, Dhaka, Bangladesh",
        "rating": "4.0",
        "distance": "",
        "specialties": [""]
    },
    {
        "id": 2,
        "name": "BRAC Nursery",
        "address": "Bir Uttam Mir Shawkat Sarak, Dhaka 1212, Bangladesh",
        "rating": "4.0",
        "distance": "",
        "specialties": [""]
    },
    {
        "id": 3,
        "name": "100 Feet Madani Avenue Nursery",
        "address": "100 Madani Ave, Dhaka, Bangladesh",
        "rating": "4.0",
        "distance": "",
        "specialties": [""]
    },
    {
        "id": 4,
        "name": "Green Dhaka Bus Counter",
        "address": "215 Shahid Syed Nazrul Islam Sharani, Dhaka 1000, Bangladesh",
        "rating": "4.0",
        "distance": "",
        "specialties": ["Buses and trains"]
    },
    {
        "id": 5,
        "name": "Ashulia Garden Center-আশুলিয়া গার্ডেন সেন্টার",
        "address": "Basaid Mosque Rd, Dhaka 1341, Bangladesh",
        "rating": "4.5",
        "distance": "",
        "specialties": ["Landscaping"]
    },
    {
        "id": 6,
        "name": "Khan Palace",
        "address": "1360, Bangladesh",
        "rating": "4.5",
        "distance": "",
        "specialties": [""]
    },

]


export default function NurseriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [nurseryList, setNurseryList] = useState<Nursery[]>([]);
  const [params, setParams] = useState("")

  const [location, setLocation] = useState({
    lat: 0,
    lng: 0
  })
  const [zoom, setZoom] = useState(12)

  const handleSearch = async () => { 
    try { 
        const latDiff = 0.5; // Adjust based on zoom for nearby results
        const lonDiff = 0.5;

        const viewbox = [
          location.lng - lonDiff, // west (min lon)
          location.lat - latDiff, // south (min lat)
          location.lng + lonDiff, // east (max lon)
          location.lat + latDiff, // north (max lat)
        ];
        await axios.get(`https://nominatim.openstreetmap.org/search?q=nursery&format=json&viewbox=${viewbox.join("%2C")}&bounded=1`)
          .then((response) => response.data)
          .then((data) => {           
            const filteredData = data.filter((place: { type: string; }) => place.type !== "kindergarten");
            console.log(filteredData)
            setNurseryList(filteredData)
          })
          .catch((error) => console.error("Error fetching nurseries:", error));
      } catch (error) { 
        console.error("Error fetching search results: ", error); 
      }
    }

    function handleFromDummyData(searchTerm: string) {
      const filtered = MOCK_NURSERIES.filter(nursery =>
        nursery.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        nursery.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log(filtered);
      setNurseryList(filtered || []);
    }

  useEffect(() => {
    console.log(Date.now());
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLoading(false);
      },
      (error) => {
        console.error("Error getting location: ", error);
      }
    );
  }, []);

  useEffect(() =>{
    if(location.lat!=0 || location.lng!=0){
      handleSearch()
    }
  }, [location, zoom])
  

  const Map = useMemo(() => dynamic(
    () => import('./Map'),
    { 
      loading: () => <p>Map is loading</p>,
      ssr: false
    }
  ), [])

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Find Local Nurseries</h1>
          <p className="text-xl text-muted-foreground">
            Discover garden centers and plant shops in your area
          </p>
        </div>

        <div className="flex gap-4 mb-8">
          <div className="flex-1">
            <Input
              placeholder="Search by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleFromDummyData(searchTerm);
                }
              }}
            />
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>

        <div className="flex flex-row space-x-3">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_NURSERIES.map((nursery) => (
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

                
                {/* <div className="flex flex-wrap gap-2">
                  {nursery.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div> */}
              </Card>
            ))}
          </div>

          <div className="container">
            {loading ? (
              <p>Fetching location...</p>
            ) : (
              <Map
                location={location}
                zoom={zoom}
                setLocation={setLocation}
                setZoom={setZoom}
              />
              // <iframe 
              // src={`https://www.google.com/maps?q=nursery&ll=${location.lat},${location.lng}&center=${location.lat},${location.lng}&z=14&output=embed`} 
              // className="map-iframe"
              // title="Nursery Map"
              // allowFullScreen
              // referrerPolicy="no-referrer-when-downgrade"></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}