import { Alert } from '@mui/material';
import React from 'react';
import { useAuth } from 'src/hooks/use-auth';
import { useRouter } from 'src/hooks/use-router';
import { routes } from 'src/router/routes';
import { AuthStrategy } from 'src/utils/auth/strategy';
import { config } from 'src/utils/config';

export function AuthGuard({ children }) {
  const router = useRouter();
  const { user, error, isLoading } = useAuth();
  const [isChecking, setIsChecking] = React.useState(true);
  const checkPermissions = async () => {
    if (isLoading) {
      return;
    }
    if (error) {
      setIsChecking(false);
      return;
    }
    if (!user) {
      console.debug('User is not logged in, redirecting to sign in');
      switch (config.auth.strategy) {
        case AuthStrategy.CUSTOM: {
          router.push(routes.auth['custom.login']);
          return;
        }
        case AuthStrategy.SUPABASE: {
          router.push(routes.auth['supabase.login']);
          return;
        }
      }
    }
    setIsChecking(false);
  };
  React.useEffect(() => {
    checkPermissions().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Expected
  }, [user, error, isLoading]);
  if (isChecking) {
    return null;
  }
  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }
  return <React.Fragment>{children}</React.Fragment>;
}
