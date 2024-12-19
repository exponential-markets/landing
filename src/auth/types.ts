export interface AuthState {
  isAuthenticated: boolean;
  token?: string;
  address?: string;
}

export interface AuthResponse {
  success: boolean;
  token: string;
  error?: string;
}

export interface User {
  type: 'eoa' | 'sca';
  address?: string;
  email?: string;
  orgId?: string;
  userId?: string;
}
  