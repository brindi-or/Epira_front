import { Slider, Stack } from '@mui/material';
import React from 'react';

const Component = () => {
  const [value, setValue] = React.useState(30);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack
      justifyContent="center"
      spacing={{
        xs: 2,
        sm: 3,
      }}
    >
      <Slider
        aria-label="Volume"
        value={value}
        onChange={handleChange}
      />
      <Slider
        disabled
        defaultValue={30}
        aria-label="Disabled slider"
      />
    </Stack>
  );
};
export default Component;
