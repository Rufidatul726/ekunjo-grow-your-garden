"use client"

import { onAuthStateChanged, updateProfile, User as FirebaseUser } from 'firebase/auth';
import { createContext, useState, ReactNode, useEffect, useContext } from 'react';
import { auth } from '@/firebaseConfig';
import { getUser } from '@/api/getUser';

interface ExtendedUser extends FirebaseUser {
  role?: string;
}

type AuthContextType = {
  user: ExtendedUser | null;
  isAuth: boolean | null;
  role: string;
  login: () => void;
  logout: () => void;
};

const authContextDefaultValues: AuthContextType = {
  user: null,
  isAuth: null,
  role: 'guest',
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<ExtendedUser | null>(null);
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  const [role, setRole] = useState<string>('guest');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser?.uid) {
        const data = await getUser(currentUser.uid);
        if (!currentUser.displayName && data?.userName) {
          await updateProfile(currentUser, { displayName: data.userName });
        }
        setUser({
          ...currentUser,
          displayName: currentUser.displayName || data?.userName,
          role: data?.role,  
        });
        setRole(data?.role || 'guest');
        setIsAuth(true);
      } else {
        setUser(null);
        setRole('guest');
        setIsAuth(false);
      }
    });
    return unsubscribe;
  }, []);

  const login = () => {};
  const logout = () => {
    auth.signOut();
    setUser(null);
    setRole('guest');
    setIsAuth(false);
  };

  const value = {
    user,
    isAuth,
    role,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}