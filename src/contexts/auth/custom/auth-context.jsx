import React from 'react';
import { authClient } from 'src/utils/auth/custom/client';

export const UserContext = React.createContext(undefined);
export function AuthProvider({ children }) {
  const [state, setState] = React.useState({
    user: null,
    error: null,
    isLoading: true,
  });
  const checkSession = React.useCallback(async () => {
    try {
      const { data, error } = await authClient.getUser();
      if (error) {
        console.error(error);
        setState((prev) => ({
          ...prev,
          user: null,
          error: 'Something went wrong',
        }));
        return;
      }
      if (data) {
        setState((prev) => ({
          ...prev,
          user: data,
          error: null,
        }));
      }
    } catch (err) {
      console.error(err);
      setState((prev) => ({
        ...prev,
        user: null,
        error: 'Something went wrong',
      }));
    }
  }, []);
  React.useEffect(() => {
    (async () => {
      await checkSession().catch(() => {});
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    })().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Expected
  }, []);
  return (
    <UserContext.Provider
      value={{
        ...state,
        checkSession,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export const UserConsumer = UserContext.Consumer;
