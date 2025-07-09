import { create } from 'zustand';
import { Customer } from '../domain/entities/Customer';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  customer: Customer | null;
  login: (token: string) => void;
  logout: () => void;
  setCustomer: (customer: Customer) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  isAuthenticated: false,
  customer: null,
  login: (token) => set({ token, isAuthenticated: true }),
  logout: () => set({ token: null, isAuthenticated: false, customer: null }),
  setCustomer: (customer) => set({ customer }),
})); 