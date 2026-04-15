import { AuthGuard } from 'src/components/auth/auth-guard';

export const withAuthGuard = (Component) => {
  return function WithAuthGuard(props) {
    return (
      <AuthGuard>
        <Component {...props} />
      </AuthGuard>
    );
  };
};
