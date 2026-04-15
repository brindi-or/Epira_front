import { AuthStrategy } from 'src/utils/auth/strategy';
import { config } from 'src/utils/config';
import {
  AuthProvider as CustomAuthProvider,
  UserContext as CustomUserContext,
} from './custom/auth-context';
import {
  AuthProvider as SupabaseAuthProvider,
  UserContext as SupabaseUserContext,
} from './supabase/auth-context';

// eslint-disable-next-line import/no-mutable-exports -- Export based on config
let AuthProvider;

// eslint-disable-next-line import/no-mutable-exports -- Export based on config
let UserContext;
switch (config.auth.strategy) {
  case AuthStrategy.CUSTOM:
    UserContext = CustomUserContext;
    AuthProvider = CustomAuthProvider;
    break;
  case AuthStrategy.SUPABASE:
    UserContext = SupabaseUserContext;
    AuthProvider = SupabaseAuthProvider;
    break;
  default:
    throw new Error('Invalid auth strategy');
}
export { AuthProvider, UserContext };
