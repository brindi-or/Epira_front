import { Alert, Container } from '@mui/material';
import React from 'react';
import { config } from 'src/utils/config';

export function StrategyGuard({ children, expected }) {
  if (config.auth.strategy !== expected) {
    return (
      <Container maxWidth="sm">
        <Alert
          severity="error"
          variant="outlined"
        >
          To render this page, you need to configure the auth strategy to &quot;{expected}&quot;
        </Alert>
      </Container>
    );
  }
  return <React.Fragment>{children}</React.Fragment>;
}
