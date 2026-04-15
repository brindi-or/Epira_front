import {
  Box,
  Button,
  Card,
  CardContent,
  Unstable_Grid2 as Grid,
  Popover,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

const Component = () => {
  const positions = [
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentPosition, setCurrentPosition] = useState('');
  const handleClick = (event, position) => {
    setAnchorEl(event.currentTarget);
    setCurrentPosition(position);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setCurrentPosition('');
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <Box
      display="flex"
      alignItems="center"
      height="100%"
    >
      <Grid
        container
        spacing={{
          xs: 2,
          sm: 3,
        }}
      >
        {positions.map((position) => (
          <Grid
            key={position}
            xs={12}
            sm={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CardContent>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={(e) => handleClick(e, position)}
                >
                  {position
                    .split('-')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: currentPosition.split('-')[0],
          horizontal: currentPosition.split('-')[1],
        }}
        transformOrigin={{
          vertical: currentPosition.split('-')[0] === 'top' ? 'bottom' : 'top',
          horizontal: currentPosition.split('-')[1],
        }}
      >
        <Typography
          sx={{
            p: 2,
          }}
        >
          Popover Content
        </Typography>
      </Popover>
    </Box>
  );
};
export default Component;
