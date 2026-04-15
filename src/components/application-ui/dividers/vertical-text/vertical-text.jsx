import { Card, CardContent, Divider, Stack, Typography, useMediaQuery } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  const smUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  return (
    <Stack
      spacing={2}
      direction={{
        xs: 'column',
        sm: 'row',
      }}
      divider={
        <Divider
          orientation={smUp ? 'vertical' : 'horizontal'}
          flexItem
        >
          <Typography variant="h6">or</Typography>
        </Divider>
      }
    >
      <Card
        sx={{
          width: '100%',
        }}
      >
        <CardContent>
          <PlaceholderBox />
        </CardContent>
      </Card>
      <Card
        sx={{
          width: '100%',
        }}
      >
        <CardContent>
          <PlaceholderBox />
        </CardContent>
      </Card>
    </Stack>
  );
};
export default Component;
