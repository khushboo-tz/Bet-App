import { createContext, useContext, useState, type ReactNode } from 'react';

type AuthState = {
  isAuthed: boolean;
  phone: string | null;
  login: (phone: string) => void;
  logout: () => void;
};

const Ctx = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [phone, setPhone] = useState<string | null>(null);
  const value: AuthState = {
    isAuthed: !!phone,
    phone,
    login: (p) => setPhone(p),
    logout: () => setPhone(null),
  };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useAuth must be used within AuthProvider');
  return v;
}
