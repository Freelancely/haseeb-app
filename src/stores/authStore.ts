import { create } from 'zustand';

interface Tenant {
  id: string;
  name: string;
  role: string;
}

interface AuthState {
  isAuthenticated: boolean;
  phone: string;
  tenants: Tenant[];
  currentTenant: Tenant | null;

  setPhone: (phone: string) => void;
  verifyOTP: () => void;
  selectTenant: (tenant: Tenant) => void;
  logout: () => void;
}

const mockTenants: Tenant[] = [
  { id: '1', name: 'The Koffee Lab', role: 'Admin' },
  { id: '2', name: 'Tarek Trading Co.', role: 'Viewer' },
];

export const useAuthStore = create<AuthState>()((set) => ({
  isAuthenticated: false,
  phone: '',
  tenants: [],
  currentTenant: null,

  setPhone: (phone) => set({ phone }),
  verifyOTP: () => set({ tenants: mockTenants }),
  selectTenant: (tenant) =>
    set({ currentTenant: tenant, isAuthenticated: true }),
  logout: () =>
    set({
      isAuthenticated: false,
      phone: '',
      tenants: [],
      currentTenant: null,
    }),
}));
