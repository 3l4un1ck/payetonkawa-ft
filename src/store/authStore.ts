import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Customer } from '../domain/entities/Customer';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  customer: Customer | null;
  login: (token: string) => void;
  logout: () => void;
  setCustomer: (customer: Customer) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      isAuthenticated: false,
      customer: null,
      login: (token) => set({ token, isAuthenticated: true }),
      logout: () => set({ token: null, isAuthenticated: false, customer: null }),
      setCustomer: (customer) => set({ customer }),
    }),
    {
      name: 'auth-storage', // clé dans le localStorage
    }
  )
);