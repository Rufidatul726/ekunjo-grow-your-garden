// components/ProtectedRoute.tsx
'use client';

import { useAuth } from './context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children, allowedRoles }: {
  children: React.ReactNode;
    allowedRoles: string[];
}) {
  const { user, role, isAuth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuth && (!user || !allowedRoles.includes(role))) {
      router.push('/'); 
    }
  }, [user, role, isAuth, allowedRoles, router]);

  return children;
}
