"use client";

import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, X } from "lucide-react";
import dynamic from "next/dynamic";
import './map.css';
import { getNearestNurseries } from "@/api/nurseries/getNursery";
import { getUserLocation } from "@/utils/geo";

interface Nursery {
  id?: number;
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
  source?: "mock" | "google" | "excel";
}

export default function NurseriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [nurseryList, setNurseryList] = useState<Nursery[]>([]);
  const [searchNurseryList, setSearchNurseryList] = useState<Nursery[]>([]);
  const [selectedNursery, setSelectedNursery] = useState<Nursery | null>(null);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    const fetchLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLoading(false);
        }, (error) => {
          console.error("Error getting location:", error);
          setLoading(false);
        });
      } else {
        console.error("Geolocation is not supported by this browser.");
        setLoading(false);
      }
    };
    fetchLocation();
  }, []);

  useEffect(() => {
    const getNurseries = async () => {
      try {
        const nearestNurseries = await getNearestNurseries(location.lat, location.lng);
        setNurseryList(nearestNurseries.map(n => ({ ...n, distance: n.distance.toString() })));
      } catch (error) {
        console.error("Error fetching nearby nurseries from Firebase:", error);
      }
    };
    if (location.lat !== 0 || location.lng !== 0) getNurseries();
  }, [location, zoom]);

  const Map = useMemo(() => dynamic(() => import('./Map'), {
    loading: () => <p>Map is loading...</p>,
    ssr: false
  }), []);

  const handleSearch = (e: React.KeyboardEvent | React.MouseEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      setSearchNurseryList([]);
      getUserLocation().then(coords => {
        setLocation({ lat: coords.latitude, lng: coords.longitude });
        setZoom(14);
      }).catch(err => console.error("Error getting user location:", err));
      setSelectedNursery(null);
      return;
    }
    const results = nurseryList.filter(nursery =>
      nursery.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchNurseryList(results);
    setShowSearchModal(true);
  };

  const closeModal = () => {
    // getUserLocation().then(coords => {
    //     setLocation({ lat: coords.latitude, lng: coords.longitude });
    //     setZoom(14);
    //   }).catch(err => console.error("Error getting user location:", err));
    setShowSearchModal(false);
    setShowDetailModal(false);
    // setSelectedNursery(null);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Find Local Nurseries</h1>
          <p className="text-xl text-muted-foreground">Discover garden centers and plant shops in your area</p>
        </div>

        <div className="flex flex-col mb-6">
          <div className="flex gap-4 mb-8">
            <div className="flex-1">
              <Input
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
                onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
                />
            </div>
            <Button onClick={handleSearch} className="bg-green-600 hover:bg-green-700">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
            </div>
            {/* Search Modal */}
        {showSearchModal && (
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="p-6 rounded-lg w-full bg-green-600 bg-opacity-90 max-w-xl shadow-lg relative">
              <button onClick={closeModal} className="absolute top-2 right-2">
                <X size={20} />
              </button>
              <h2 className="text-xl font-bold mb-4">Search Results</h2>
              {searchNurseryList.length ? (
                <ul className="space-y-2">
                  {searchNurseryList.map(nursery => (
                    <li
                      key={nursery.id || nursery.uuid}
                      onClick={() => {
                        setSelectedNursery(nursery);
                        setShowSearchModal(false);
                        setShowDetailModal(true);
                        // setLocation({ lat: nursery.latitude || 0, lng: nursery.longitude || 0 });
                        setZoom(14);
                      }}
                      className="p-3 rounded cursor-pointer bg-green-800 hover:bg-green-900 transition"
                    >
                      <strong>{nursery.name}</strong> – {nursery.address}
                    </li>
                  ))}
                </ul>
              ) : <p>No matching nurseries found.</p>}
            </div>
          </div>
        )}

        {/* Detail Modal */}
        {showDetailModal && selectedNursery && (
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="p-6 rounded-lg w-full bg-green-600 max-w-xl shadow-lg relative">
              <button onClick={closeModal} className="absolute top-2 right-2 ">
                <X size={20} />
              </button>
              <h2 className="text-xl font-bold mb-2">{selectedNursery.name}</h2>
              <p><strong>Address:</strong> {selectedNursery.address}</p>
              <p><strong>Full Address:</strong> {selectedNursery.fulladdr || "N/A"}</p>
              <p><strong>Distance:</strong> {selectedNursery.distance} km</p>
              <p><strong>Rating:</strong> {selectedNursery.rating || "N/A"}</p>
            </div>
          </div>
        )}
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 flex-1">
              {nurseryList.slice(0, 4).map(nursery => (
                <Card
                  key={nursery.id || nursery.uuid}
                  className="p-6 cursor-pointer hover:shadow-lg transition"
                  onClick={() => {
                    setSelectedNursery(nursery);
                    setShowDetailModal(true);
                    // setLocation({ lat: nursery.latitude || 0, lng: nursery.longitude || 0 });
                    setZoom(14);
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{nursery.name}</h3>
                      <div className="flex items-center text-muted-foreground mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{nursery.address}</span>
                      </div>
                    </div>
                    <span className="text-sm text-green-600">{parseFloat(nursery.distance!).toFixed(2)} km</span>
                  </div>
                  {nursery.rating && (
                    <div className="mb-4 flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="ml-1">{nursery.rating}</span>
                    </div>
                  )}
                </Card>
              ))}
            </div>
            <div className="flex-1 min-h-[400px]">
              {loading ? <p>Fetching location...</p> : (
                <Map
                  location={location}
                  zoom={zoom}
                  nurseryList={nurseryList}
                  selectedNursery={selectedNursery}
                />
              )}
            </div>
          </div>
      </div>
      
    </div>
  );
}
