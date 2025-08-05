"use client";

import { MapContainer, Marker, TileLayer, Tooltip, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { useEffect } from "react";
import { Nursery } from "@/types/nurseries";
import L from "leaflet";
import "leaflet-routing-machine";

interface MapProps {
  location: { lat: number; lng: number };
  zoom: number;
  nurseryList?: Nursery[];
  selectedNursery?: Nursery | null;
}

function RecenterMap({ location }: { location: { lat: number; lng: number } }) {
  const map = useMap();
  useEffect(() => {
    map.setView(location);
  }, [location, map]);
  return null;
}

function Routing({ from, to }: { from: L.LatLngExpression; to: L.LatLngExpression }) {
  const map = useMap();

  useEffect(() => {
    if (!from || !to) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(from), L.latLng(to)],
      routeWhileDragging: false,
      show: false,
      addWaypoints: false,
    }).addTo(map);

    return () => {
      // Try removing safely
      try {
        if (routingControl) 
          map.removeControl(routingControl);
        routingControl.getPlan().setWaypoints([]);
      } catch (error) {
        console.warn("Error removing routing control:", error);
      }
    };
  }, [from, to, map]);

  return null;
}


export default function MyMap({ location, zoom, nurseryList = [], selectedNursery }: MapProps) {
  const userLatLng = L.latLng(location.lat, location.lng);
  const nurseryLatLng = selectedNursery
    ? L.latLng(selectedNursery.latitude ?? 0, selectedNursery.longitude ?? 0)
    : null;

  return (
    <div className="w-[600px] h-[600px]">
      <MapContainer
        center={location}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <RecenterMap location={location} />

        {/* Marker for user location */}
        <Marker position={location}
          icon={new L.Icon({
            iconUrl:
              "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
            shadowUrl:
              "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          })}>
          <Tooltip>Your Location</Tooltip>
        </Marker>

        {/* Markers for nurseryList */}
        {nurseryList.map((nursery, index) => (
          <Marker
            key={index}
            position={{ lat: nursery.latitude ?? 0, lng: nursery.longitude ?? 0 }}
            icon={new L.Icon({
              iconUrl:
                selectedNursery?.uuid === nursery.uuid
                  ? "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png"
                  : "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
              shadowUrl:
                "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [41, 41]
            })}
            eventHandlers={{
              click: () => {
                console.log("Marker clicked:", nursery);
              },
            }}
          >
            <Tooltip>{nursery.name}</Tooltip>
          </Marker>
        ))}

        {/* Routing Line */}
        {selectedNursery && <Routing from={userLatLng} to={nurseryLatLng!} />}
      </MapContainer>
    </div>
  );
}
