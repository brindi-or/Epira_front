import { Card, CardContent, Divider, Stack, useMediaQuery } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  const smUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  return (
    <Card>
      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        divider={
          <Divider
            flexItem
            orientation={smUp ? 'vertical' : 'horizontal'}
          />
        }
      >
        <CardContent
          sx={{
            width: '100%',
          }}
        >
          <PlaceholderBox />
        </CardContent>
        <CardContent
          sx={{
            width: '100%',
          }}
        >
          <PlaceholderBox />
        </CardContent>
        <CardContent
          sx={{
            width: '100%',
          }}
        >
          <PlaceholderBox />
        </CardContent>
      </Stack>
    </Card>
  );
};
export default Component;
