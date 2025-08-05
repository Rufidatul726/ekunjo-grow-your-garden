// components/ConditionalNavbar.tsx
"use client";

import { usePathname } from 'next/navigation';
import Navbar from './navbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin');
  
  return !isAdminPage ? <Navbar /> : null;
}
