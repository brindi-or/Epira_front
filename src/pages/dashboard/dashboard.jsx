import ReceiptRefundIcon from '@heroicons/react/24/outline/ReceiptRefundIcon';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Box, Button, Container, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import InvoicesListing from 'src/components/application-ui/tables/invoices/invoices';
import PageHeading from 'src/components/base/page-heading';
import { AvatarState } from 'src/components/base/styles/avatar';
import { useCustomization } from 'src/hooks/use-customization';

export function Page() {
  const customization = useCustomization();
  const theme = useTheme();
  const { t } = useTranslation();
  const pageMeta = {
    title: 'Invoices',
    description: 'Manage billing and invoice records',
    icon: <ReceiptRefundIcon />,
  };
  return (
    <>
     
      <Box
        pb={{
          xs: 2,
          sm: 3,
        }}
      >
        <Container maxWidth={customization.stretch ? false : 'xl'}>
          <InvoicesListing />
        </Container>
      </Box>
    </>
  );
}
