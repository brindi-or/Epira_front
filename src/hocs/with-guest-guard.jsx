import { GuestGuard } from 'src/components/auth/guest-guard';

export const withGuestGuard = (Component) => {
  return function WithGuestGuard(props) {
    return (
      <GuestGuard>
        <Component {...props} />
      </GuestGuard>
    );
  };
};
