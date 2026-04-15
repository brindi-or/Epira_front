import { Alert, Button, Stack } from '@mui/material';
import React from 'react';
import toast from 'react-hot-toast';
import { routes } from 'src/router/routes';
import { createClient as createSupabaseClient } from 'src/utils/supabase/client';

export function SignUpResendButton({ children, email }) {
  const [supabaseClient] = React.useState(createSupabaseClient());
  const [isPending, setIsPending] = React.useState(false);
  const [submitError, setSubmitError] = React.useState();
  const handleAction = React.useCallback(async () => {
    if (!email) {
      return;
    }
    setIsPending(true);
    setSubmitError(undefined);
    const redirectToUrl = new URL(
      routes.auth['supabase.callback.implicit'],
      window.location.origin
    );
    redirectToUrl.searchParams.set('next', routes.blueprints['generic-admin-dashboard'].index);
    const { error } = await supabaseClient.auth.resend({
      email,
      type: 'signup',
      options: {
        emailRedirectTo: redirectToUrl.href,
      },
    });
    if (error) {
      setSubmitError(error.message);
      setIsPending(false);
      return;
    }
    setIsPending(false);
    toast.success('Verification email sent');
  }, [supabaseClient, email]);
  return (
    <Stack
      display="block"
      spacing={2}
    >
      {submitError ? <Alert severity="error">{submitError}</Alert> : null}
      <Button
        variant="outlined"
        color="secondary"
        disabled={!email || isPending}
        onClick={handleAction}
      >
        {children}
      </Button>
    </Stack>
  );
}
