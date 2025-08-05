"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Leaf, Users, BookText, LogOut, Sun, Droplet, Notebook, ActivityIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

const mockStats = {
  users: 12,
  nurseries: 5,
  guides: 7,
  issues: 3,
  totalPlants: 150,
};

const mockIssues = [
  {
    id: "ISS-001",
    title: "Unable to upload plant image",
    reportedBy: "Shakil Ahmed",
    status: "Open",
    date: "2025-05-25",
  },
  {
    id: "ISS-002",
    title: "Guide page not loading",
    reportedBy: "Maria Sultana",
    status: "Resolved",
    date: "2025-05-24",
  },
  {
    id: "ISS-003",
    title: "Can't add nursery to favorites",
    reportedBy: "Arif Hossain",
    status: "In Progress",
    date: "2025-05-23",
  },
];

const mockPlants = [
  { name: "Basil", sunlight: "Full Sun", water: "Weekly", notes: "Great for cooking", growthStage: "Seedling", nextWatering: "2025-05-30" },
  { name: "Rose", sunlight: "Partial Shade", water: "Every 3 days", notes: "Needs pruning", growthStage: "Flowering", nextWatering: "2025-05-28" },
  { name: "Cactus", sunlight: "Full Sun", water: "Monthly", notes: "Low maintenance", growthStage: "Mature", nextWatering: "2025-06-15" },
  { name: "Mint", sunlight: "Partial Shade", water: "Weekly", notes: "Fast-growing herb", growthStage: "Seedling", nextWatering: "2025-05-30" },
];


const mockUsers = [
  { name: "Tania Akter", email: "tania@example.com" },
  { name: "Rahim Uddin", email: "rahim@example.com" },
  { name: "Nusrat Jahan", email: "nusrat@example.com" },
];

const mockNurseries = [
  {
    name: "Green Leaf Nursery",
    address: "Dhanmondi 27, Dhaka",
    phone_numbers: ["01700000001"],
    specialties: ["Cactus", "Flowering Plants"],
    rating: "4.5",
    thumbnail: "https://via.placeholder.com/80",
  },
  {
    name: "Urban Roots",
    address: "Banani, Dhaka",
    phone_numbers: ["01700000002"],
    specialties: ["Vegetables", "Herbs"],
    rating: "4.8",
    thumbnail: "https://via.placeholder.com/80",
  },
];

const mockGuides = [
  {
    title: "How to Grow Basil Indoors",
    authorName: "Sadia Khan",
    difficulty: "Beginner",
    timeEstimate: "2 weeks",
  },
  {
    title: "Pruning Rose Plants",
    authorName: "Asif Rahman",
    difficulty: "Intermediate",
    timeEstimate: "1 hour",
  },
];

const Sidebar = ({ onSelect }: { onSelect: (view: string) => void }) => (
  <div className="h-full w-72 bg-gradient-to-b from-green-700 to-green-500 text-white p-6 shadow-xl">
    <h2 className="text-2xl font-extrabold mb-8 tracking-wide">Ekunjo Admin</h2>
    <nav className="space-y-4">
      <Button variant="ghost" className="w-full justify-start text-white hover:bg-green-600" onClick={() => onSelect("dashboard")}>Dashboard</Button>
      <Button variant="ghost" className="w-full justify-start text-white hover:bg-green-600" onClick={() => onSelect("users")}>Users</Button>
      <Button variant="ghost" className="w-full justify-start text-white hover:bg-green-600" onClick={() => onSelect("nurseries")}>Nurseries</Button>
      <Button variant="ghost" className="w-full justify-start text-white hover:bg-green-600" onClick={() => onSelect("guides")}>Guides</Button>
      <Button variant="ghost" className="w-full justify-start text-white hover:bg-green-600" onClick={() => onSelect("plants")}>Plants</Button>
      <Button variant="ghost" className="w-full justify-start text-white hover:bg-green-600" onClick={() => onSelect("issues")}>Issues</Button>
      <div className="pt-10 border-t border-white/30">
        <Button variant="ghost" className="w-full justify-start text-red-300 hover:bg-red-600/40" onClick={() => alert("Logged out")}> <LogOut className="mr-2 h-4 w-4" /> Logout </Button>
      </div>
    </nav>
  </div>
);

const DashboardCards = ({ data }: { data: any }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card className="bg-white shadow-lg border border-green-200 hover:shadow-xl transition duration-300">
      <CardContent className="p-6 flex items-center gap-6">
        <Users className="h-10 w-10 text-green-600" />
        <div>
          <p className="text-sm text-gray-500">Total Users</p>
          <p className="text-2xl font-bold text-gray-800">{data.users}</p>
        </div>
      </CardContent>
    </Card>
    <Card className="bg-white shadow-lg border border-green-200 hover:shadow-xl transition duration-300">
      <CardContent className="p-6 flex items-center gap-6">
        <Leaf className="h-10 w-10 text-green-600" />
        <div>
          <p className="text-sm text-gray-500">Nurseries Listed</p>
          <p className="text-2xl font-bold text-gray-800">{data.nurseries}</p>
        </div>
      </CardContent>
    </Card>
    <Card className="bg-white shadow-lg border border-green-200 hover:shadow-xl transition duration-300">
      <CardContent className="p-6 flex items-center gap-6">
        <BookText className="h-10 w-10 text-green-600" />
        <div>
          <p className="text-sm text-gray-500">Active Guides</p>
          <p className="text-2xl font-bold text-gray-800">{data.guides}</p>
        </div>
      </CardContent>
    </Card>
    <Card className="bg-white shadow-lg border border-green-200 hover:shadow-xl transition duration-300">
      <CardContent className="p-6 flex items-center gap-6">
        <BarChart className="h-10 w-10 text-green-600" />
        <div>
          <p className="text-sm text-gray-500">Reported Issues</p>
          <p className="text-2xl font-bold text-gray-800">{data.issues}</p>
        </div>
      </CardContent>
    </Card>
    <Card className="bg-white shadow-lg border border-green-200 hover:shadow-xl transition duration-300">
      <CardContent className="p-6 flex items-center gap-6">
        <Leaf className="h-10 w-10 text-green-600" />
        <div>
          <p className="text-sm text-gray-500">Total Plants</p>
          <p className="text-2xl font-bold text-gray-800">{data.totalPlants}</p>
        </div>
      </CardContent>
    </Card>
  </div>
);

const Header = () => (
  <div className="flex justify-between items-center mb-8">
    <div>
      <h1 className="text-3xl font-bold text-green-800 tracking-tight">Welcome, Admin</h1>
      <p className="text-sm text-gray-500">Manage your platform insights and data here.</p>
    </div>
    <div className="bg-green-100 px-4 py-2 rounded-md text-sm font-medium text-green-800">Ekunjo Platform</div>
  </div>
);

const UsersList = ({ users }: { users: any[] }) => (
  <ScrollArea className="h-[70vh] bg-white shadow border rounded-lg p-6">
    <h2 className="text-xl font-semibold mb-4 text-green-800">User Management</h2>
    <div className="space-y-4">
      {users.map((user, idx) => (
        <div key={idx} className="border rounded-md p-4 flex justify-between items-center hover:shadow-md">
          <div>
            <p className="font-semibold text-gray-800">{user.name || "No Name"}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
          <Button variant="outline" size="sm">Disable</Button>
        </div>
      ))}
    </div>
  </ScrollArea>
);

const NurseriesList = ({ nurseries }: { nurseries: any[] }) => (
  <ScrollArea className="h-[70vh] bg-white shadow border rounded-lg p-6">
    <h2 className="text-xl font-semibold mb-4 text-green-800">Nursery Directory</h2>
    <div className="space-y-4">
      {nurseries.map((nursery, idx) => (
        <div key={idx} className="border rounded-md p-4 flex items-center gap-4 hover:shadow-md">
          <Image src={nursery.thumbnail} alt="thumb" className="w-20 h-20 rounded-md object-cover border" width={80} height={80} />
          <div className="flex-1">
            <p className="font-semibold text-gray-800">{nursery.name}</p>
            <p className="text-sm text-gray-500">{nursery.address}</p>
            <p className="text-sm text-green-600">Specialties: {nursery.specialties.join(", ")}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-yellow-600">⭐ {nursery.rating}</p>
            <p className="text-xs text-gray-500">{nursery.phone_numbers[0]}</p>
          </div>
        </div>
      ))}
    </div>
  </ScrollArea>
);

const GuidesList = ({ guides }: { guides: any[] }) => (
  <ScrollArea className="h-[70vh] bg-white shadow border rounded-lg p-6">
    <h2 className="text-xl font-semibold mb-4 text-green-800">Guide Library</h2>
    <div className="space-y-4">
      {guides.map((guide, idx) => (
        <div key={idx} className="border rounded-md p-4 hover:shadow-md">
          <p className="font-semibold text-gray-800">{guide.title}</p>
          <p className="text-sm text-gray-500">By {guide.authorName} - {guide.difficulty}</p>
          <p className="text-xs text-green-600">Est. Time: {guide.timeEstimate}</p>
        </div>
      ))}
    </div>
  </ScrollArea>
);

const IssuesList = ({ issues }: { issues: any[] }) => (
  <ScrollArea className="h-[70vh] bg-white shadow border rounded-lg p-6">
    <h2 className="text-xl font-semibold mb-4 text-red-800">Reported Issues</h2>
    <div className="space-y-4">
      {issues.map((issue, idx) => (
        <div key={idx} className={`border rounded-md p-4 ${issue.status === "Open" ? "bg-red-50" : issue.status === "Resolved" ? "bg-green-50" : "bg-yellow-50"} hover:shadow-md`}>
          <p className="font-semibold text-gray-800">{issue.title}</p>
          <p className="text-sm text-gray-500">Reported by: {issue.reportedBy}</p>
          <p className={`text-xs ${issue.status === "Open" ? "text-red-600" : issue.status === "Resolved" ? "text-green-600" : "text-yellow-600"}`}>Status: {issue.status}</p>
          <p className="text-xs text-gray-400">Date: {issue.date}</p>
        </div>
      ))}
    </div>
  </ScrollArea>
);

const plantList = (plants: any[]) => (
  <ScrollArea className="h-[70vh] bg-white shadow border rounded-lg p-6">
    <h2 className="text-xl font-semibold mb-4 text-green-800">Plant List</h2>
    <div className="space-y-4">
      {plants.map((plant, idx) => (
        <div key={idx} className="border rounded-md p-4 hover:shadow-md">
          <p className="font-semibold text-gray-800">{plant.name}</p>
          <p className="text-sm text-gray-500">
            <Sun className="inline-block mr-1 h-4 w-4 text-yellow-500" />
             <span> {plant.sunlight}</span>
          </p>
          <p className="text-sm text-gray-500"><Droplet className="inline-block mr-1 h-4 w-4 text-blue-500" />
             <span>{plant.water} </span>
          </p>
          <p className="text-sm text-gray-500">
            <Notebook className="inline-block mr-1 h-4 w-4 text-green-500" />
            <span> {plant.notes}</span>
          </p>
          <p className="text-sm text-gray-500">
            <Leaf className="inline-block mr-1 h-4 w-4 text-green-500" />
            <span> Growth Stage: {plant.growthStage}</span>
          </p>
          <p className="text-sm text-gray-500">
            <ActivityIcon className="inline-block mr-1 h-4 w-4 text-blue-500" />
            <span> {plant.nextWatering}</span>
          </p>
        </div>
      ))}
    </div>
  </ScrollArea>
);

export default function AdminDashboard() {
  const [view, setView] = useState("dashboard");
  const [loading, setLoading] = useState(false);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Skeleton className="h-32 w-full rounded-lg" />
          <Skeleton className="h-32 w-full rounded-lg" />
          <Skeleton className="h-32 w-full rounded-lg" />
        </div>
      );
    }
    switch (view) {
      case "dashboard": return <DashboardCards data={mockStats} />;
      case "users": return <UsersList users={mockUsers} />;
      case "nurseries": return <NurseriesList nurseries={mockNurseries} />;
      case "guides": return <GuidesList guides={mockGuides} />;
      case "issues": return <IssuesList issues={mockIssues} />;
      case "plants": return plantList(mockPlants);
      default: return (
        <ScrollArea className="h-[70vh] bg-white shadow border rounded-lg p-6">
          <div className="text-lg text-gray-600 capitalize">{view} management coming soon...</div>
        </ScrollArea>
      );
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-green-50">
      <Sidebar onSelect={setView} />
      <main className="flex-1 p-8 overflow-y-auto">
        <Header />
        {renderContent()}
      </main>
    </div>
  );
}
