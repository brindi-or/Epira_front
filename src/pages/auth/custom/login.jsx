import React from 'react';
import { AuthCustomLoginForm } from 'src/components/application-ui/user-auth/login/auth-custom-login-form';
import { AuthLayout } from 'src/components/auth/auth-layout';
import { Helmet } from 'src/components/base/helmet';

function PageContent() {
  return (
    <>
      <Helmet heading="Sign in" />
      <AuthLayout>
        <AuthCustomLoginForm />
      </AuthLayout>
    </>
  );
}
export default function Page() {
  return <PageContent />;
}
