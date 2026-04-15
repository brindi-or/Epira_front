import { Button, Card, CardContent, Stack } from '@mui/material';
import React from 'react';
import {
  TooltipError,
  TooltipInfo,
  TooltipPrimary,
  TooltipSecondary,
  TooltipSuccess,
  TooltipWarning,
} from 'src/components/base/styles/tooltips';

const Component = () => {
  const tooltips = [
    {
      component: TooltipPrimary,
      buttonLabel: 'Primary',
    },
    {
      component: TooltipSecondary,
      buttonLabel: 'Secondary',
    },
    {
      component: TooltipError,
      buttonLabel: 'Error',
    },
    {
      component: TooltipSuccess,
      buttonLabel: 'Success',
    },
    {
      component: TooltipWarning,
      buttonLabel: 'Warning',
    },
    {
      component: TooltipInfo,
      buttonLabel: 'Info',
    },
  ];
  return (
    <Card>
      <CardContent>
        <Stack
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          direction="row"
          gap={2}
        >
          {tooltips.map(({ component: TooltipComponent, buttonLabel }) => (
            <TooltipComponent
              key={buttonLabel}
              placement="top"
              arrow
              title={buttonLabel + ' tooltip'}
            >
              <Button
                sx={{
                  minWidth: 100,
                }}
                variant="outlined"
                color="primary"
              >
                {buttonLabel}
              </Button>
            </TooltipComponent>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};
export default Component;
