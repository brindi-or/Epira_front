import React from 'react';
import { UserContext } from 'src/contexts/auth/auth-context';

export function useAuth() {
  const ctx = React.useContext(UserContext);
  if (!ctx) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return ctx;
}
