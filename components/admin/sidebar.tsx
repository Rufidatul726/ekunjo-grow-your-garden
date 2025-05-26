"use client"

import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { navigation } from "@/types/adminConstants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({sidebarOpen, setSidebarOpen}: {sidebarOpen: boolean, setSidebarOpen: Dispatch<SetStateAction<boolean>>}){
  const pathname = usePathname();

    return(
        <>
            <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          sidebarOpen ? "block" : "hidden"
        )}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Mobile sidebar panel */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-200 ease-in-out lg:hidden",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b">
          <span className="text-xl font-semibold">Admin Panel</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex flex-col gap-1 p-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium",
                  pathname === item.href
                    ? " text-green-600"
                    : "text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-700"
                )}
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow border-r border-green-400 shadow-md">
          <div className="flex h-16 items-center px-4 border-b">
            <span className="text-xl font-semibold">Admin Panel</span>
          </div>
          <nav className="flex flex-col gap-1 p-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium",
                    pathname === item.href
                      ? "bg-green-100 dark:bg-green-700 text-green-600 dark:text-green-100"
                      : "text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-700"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
        </>
    )
}