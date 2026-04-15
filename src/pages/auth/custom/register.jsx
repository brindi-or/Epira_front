import React from 'react';
import { AuthCustomRegisterForm } from 'src/components/application-ui/user-auth/register/auth-custom-register-form';
import { AuthLayout } from 'src/components/auth/auth-layout';
import { Helmet } from 'src/components/base/helmet';

function PageContent() {
  return (
    <>
      <Helmet heading="Create new account" />
      <AuthLayout>
        <AuthCustomRegisterForm />
      </AuthLayout>
    </>
  );
}
export default function Page() {
  return <PageContent />;
}
