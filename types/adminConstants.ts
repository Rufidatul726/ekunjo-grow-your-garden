import { BarChart3, Settings, Store, Users } from "lucide-react";

export const navigation = [
    { name: "Analytics", href: "/admin", icon: BarChart3 },
    { name: "User Management", href: "/admin/users", icon: Users },
    { name: "Nurseries", href: "/admin/nurseries", icon: Store },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];