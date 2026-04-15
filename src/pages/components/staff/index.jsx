import LifebuoyIcon from '@heroicons/react/24/outline/LifebuoyIcon';
import { Box, Button, Container, Unstable_Grid2 as Grid, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Ectns from 'src/components/application-ui/tables/ectns/ectns';
import PageHeading from 'src/components/base/page-heading';
import { AvatarState } from 'src/components/base/styles/avatar';
import { useCustomization } from 'src/hooks/use-customization';

export function Page() {
  const customization = useCustomization();
  const theme = useTheme();
  const { t } = useTranslation();

  const pageMeta = {
    title: 'List  of all documents',
    description: 'Search and manage your staff records',
    icon: <LifebuoyIcon />,
  };
  return (
    <>
      {pageMeta.title && (
        <Container
          sx={{
            py: {
              xs: 1,
              sm: 1,
            },
          }}
          maxWidth={customization.stretch ? false : 'xl'}
        >
          <PageHeading
            sx={{
              px: 0,
            }}
            title={t(pageMeta.title)}
            description={pageMeta.description && pageMeta.description}
            
            iconBox={
              pageMeta.icon && (
                <AvatarState
                  isSoft
                  variant="rounded"
                  state="primary"
                  sx={{
                    height: theme.spacing(7),
                    width: theme.spacing(7),
                    svg: {
                      height: theme.spacing(4),
                      width: theme.spacing(4),
                      minWidth: theme.spacing(4),
                    },
                  }}
                >
                  {pageMeta.icon}
                </AvatarState>
              )
            }
          />
        </Container>
      )}
      <Container
        disableGutters
        maxWidth={customization.stretch ? false : 'xl'}
      >
        <Box
          px={{
            xs: 2,
            sm: 3,
          }}
          
        >
          <Grid
            container
            spacing={{
              xs: 2,
              sm: 3,
            }}
          >
            <Grid xs={12}>
              <Ectns />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
