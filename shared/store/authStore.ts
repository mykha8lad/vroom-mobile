import { create } from "zustand";

// Определяем интерфейс для состояния
interface AuthState {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

// Создаём Zustand-хранилище
export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),
}));
