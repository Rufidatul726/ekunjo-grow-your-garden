"use client";

import { useState } from "react";

import {
  Menu,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/admin/sidebar";
import { useAuth } from "@/components/context/AuthContext";
import ProtectedRoute from "@/components/protectedRoute";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { logout } = useAuth();

  return (
    <ProtectedRoute allowedRoles={['admin']}>
      <div className="min-h-screen">
          <main className="p-4">{children}</main>
      </div>
    </ProtectedRoute>
  );
}