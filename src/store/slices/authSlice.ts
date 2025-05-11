import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  location?: string;
  occupation?: string;
  isVerified: boolean;
  preferences: {
    contentTypes: string[];
    persona: string;
  };
  createdAt: string;
}

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
  verificationStep: 'initial' | 'verification' | 'preferences' | 'complete';
  verificationCode: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: localStorage.getItem('token'),
  user: null,
  verificationStep: 'initial',
  verificationCode: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ token: string; user: User }>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.verificationStep = 'complete';
    },
    setVerificationStep: (state, action: PayloadAction<AuthState['verificationStep']>) => {
      state.verificationStep = action.payload;
    },
    setVerificationCode: (state, action: PayloadAction<string>) => {
      state.verificationCode = action.payload;
    },
    updateUserPreferences: (state, action: PayloadAction<{ contentTypes: string[]; persona: string }>) => {
      if (state.user) {
        state.user.preferences = action.payload;
      }
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.verificationStep = 'initial';
      state.verificationCode = null;
      localStorage.removeItem('token');
    },
  },
});

export const {
  setCredentials,
  setVerificationStep,
  setVerificationCode,
  updateUserPreferences,
  logout,
} = authSlice.actions;

export default authSlice.reducer; 