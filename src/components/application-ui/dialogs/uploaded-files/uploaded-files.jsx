import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';
import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import { URL } from 'src/pages/constantes/data';
const Component = (files) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    console.log(files,'files')
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      
        <CardContent>
          <Button
            endIcon={<ArrowRightAltTwoToneIcon />}
            variant="outlined"
            color="primary"
            onClick={handleClickOpen}
          >
            See Files
          </Button>
        </CardContent>
     

      <Dialog
        open={open}
        fullScreen={fullScreen}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="basic-dialog-title"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="caption"
                fontWeight={600}
                color="text.secondary"
              >
                The upload files are listed below. 
              </Typography>
              <Typography variant="h6">You can click on each file to view it.</Typography>
            </Box>
          </Box>
        </DialogTitle>
        <Divider />
       
        <DialogContent
          dividers
          sx={{
            p: 0,
          }}
        >
          <Box component="ul" sx={{ listStyle: 'none', p: 3, m: 0 }}>
            {files?.files && (Object.entries(files?.files).filter(([key, value]) => value).map(([key, value]) => (
              <Box
                component="li"
                key={key}
                sx={{
                  py: 1.5,
                  px: 2,
                  mb: 1,
                  borderRadius: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark'
                      ? alpha(theme.palette.neutral[25], 0.05)
                      : alpha(theme.palette.primary.main, 0.05),
                  '&:hover': {
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? alpha(theme.palette.neutral[25], 0.1)
                        : alpha(theme.palette.primary.main, 0.1),
                  },
                }}
              >
                <Typography
                  component="a"
                  href={`${URL}/storage/uploads/drafts/${value}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textDecoration: 'none',
                    color: 'primary.main',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  📄 {key}
                </Typography>
              </Box>
            ))) || (
              <Typography
                variant="body2"
                color="text.secondary"
              >
                No files available.
              </Typography>
            )}
          </Box>
          
        </DialogContent>
        <DialogActions
          sx={{
            p: 0,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
          }}
        >
          <Button
            color="primary"
            autoFocus
            size="large"
            fullWidth
            onClick={handleClose}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Component;
