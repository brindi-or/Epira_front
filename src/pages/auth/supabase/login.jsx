import React from 'react';
import { AuthSupabaseLoginForm } from 'src/components/application-ui/user-auth/login/auth-supabase-login-form';
import { AuthLayout } from 'src/components/auth/auth-layout';
import { Helmet } from 'src/components/base/helmet';
import { AuthStrategy } from 'src/utils/auth/strategy';

function PageContent() {
  return (
    <>
      <Helmet heading="Sign in" />
      <AuthLayout strategy={AuthStrategy.SUPABASE}>
        <AuthSupabaseLoginForm />
      </AuthLayout>
    </>
  );
}
export default function Page() {
  return <PageContent />;
}
