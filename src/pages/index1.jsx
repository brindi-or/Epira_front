import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import Tilt from 'react-parallax-tilt';
import { Helmet } from 'src/components/base/helmet';
import HomepageRegularUpdates from 'src/components/website/regular-updates';

export function Page() {
  const theme = useTheme();
  return (
    <>
      <Helmet heading="Make draft" />

      <Box
        sx={{
          display: 'flex',
          backgroundColor: 'background.paper',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <HomepageRegularUpdates />
      </Box>
     
    </>
  );
}
