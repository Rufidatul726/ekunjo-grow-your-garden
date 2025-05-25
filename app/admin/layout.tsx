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
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* Main content */}
        <div className="lg:pl-64">
          <div className="sticky top-0 z-40 h-16 border-b">
            <div className="flex h-16 items-center justify-between lg:justify-end px-4">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" >
                  <LogOut className="h-5 w-5" onClick={() => {
                    logout();
                    window.location.href = '/'; 
                  }} />
                </Button>
              </div>
            </div>
          </div>
          <main className="p-4">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
}