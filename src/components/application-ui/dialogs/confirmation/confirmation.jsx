import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';
import { Button, Card, CardContent, Dialog, DialogActions, DialogContent } from '@mui/material';
import React from 'react';
import ConfirmationDialogContent from './confirmation-dialog-content';

const Component = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CardContent>
          <Button
            endIcon={<ArrowRightAltTwoToneIcon />}
            variant="outlined"
            color="primary"
            onClick={handleClickOpen}
          >
            Open confirmation
          </Button>
        </CardContent>
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="basic-dialog-title"
        maxWidth="xs"
        fullWidth
        sx={{
          '.MuiDialog-container': {
            alignItems: {
              xs: 'flex-end',
              sm: 'center',
            },
          },
        }}
      >
        <DialogContent
          sx={{
            pb: 0,
          }}
        >
          <ConfirmationDialogContent />
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            autoFocus
            variant="contained"
            fullWidth
            onClick={handleClose}
          >
            Continue profile setup
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Component;
