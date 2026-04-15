import {
  Box,
  Card,
  CardContent,
  FormControlLabel,
  Link,
  Radio,
  RadioGroup,
  Typography,
  useMediaQuery,
} from '@mui/material';

const Component = () => {
  const smUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  return (
    <Card>
      <CardContent>
        <Box pb={1}>
          <Typography variant="h5">Select your country</Typography>
          {/* <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            Choose Low if you want others to hear music.{' '}
            <Link
              href=""
              onClick={(e) => e.preventDefault()}
              underline="hover"
            >
              Learn more
            </Link>
          </Typography> */}
        </Box>
        <RadioGroup
          row={smUp}
          aria-labelledby="noise-suppression-radio-buttons-group-label"
          name="noise-suppression-buttons-group"
        
        >
          <FormControlLabel
            value="high"
            required
            checked={true}
            control={<Radio size="small" />}
            label="Cameroun"
          />
         
        </RadioGroup>
      </CardContent>
    </Card>
  );
};
export default Component;
