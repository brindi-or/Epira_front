import React from 'react';
import { ResetPasswordForm } from 'src/components/application-ui/user-auth/recover-password/auth-custom-reset-password-form';
import { AuthLayout } from 'src/components/auth/auth-layout';
import { Helmet } from 'src/components/base/helmet';

function PageContent() {
  return (
    <>
      <Helmet heading="Recover password" />
      <AuthLayout>
        <ResetPasswordForm />
      </AuthLayout>
    </>
  );
}
export default function Page() {
  return <PageContent />;
}
