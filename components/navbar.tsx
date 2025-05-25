"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Sprout, LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useAuth } from "./context/AuthContext";
import { redirect } from "next/navigation";

export default function Navbar() {
  const { setTheme, theme } = useTheme();
  const [ userName, setUserName ] = useState(""); 
  const [ showModal, setShowModal ] = useState(false);

  const { isAuth, user, logout} = useAuth()

  useEffect(() => {
    const getUserName = async() => {
    if(user && user.displayName){
      setUserName(user?.displayName)
    }
  }
    getUserName()
  },[isAuth, user])

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Sprout className="h-6 w-6 text-green-600" />
              <span className="font-bold text-xl">E-Kunjo</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/nurseries">
              <Button variant="ghost">Find Nurseries</Button>
            </Link>
            <Link href="/plants">
              <Button variant="ghost">Plant Guide</Button>
            </Link>
            <Link href="/disease-detection">
              <Button variant="ghost">Disease Detection</Button>
            </Link>
            {isAuth ?
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="default"
                    onClick={() => setShowModal(!showModal)}
                  >
                    {userName}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href={`/${user?.role}/`}>
                      <Button variant="outline" className="gap-2">
                        Dashboard
                      </Button>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button variant="destructive" className="gap-2" onClick={() =>{
                      logout();
                      redirect('/');
                    }}>
                      <LogOut className="h-4 w-4"/>
                      Log Out
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              :
              <Link href="/auth/login">
                <Button variant="outline" className="gap-2">
                  <LogIn className="h-4 w-4" />
                  Log In
                </Button>
              </Link>
            }
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}