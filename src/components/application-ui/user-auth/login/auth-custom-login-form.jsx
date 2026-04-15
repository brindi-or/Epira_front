import { zodResolver } from '@hookform/resolvers/zod';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  Divider,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Unstable_Grid2 as Grid,
  InputAdornment,
  Link,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { RouterLink } from 'src/components/base/router-link';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { useAuth } from 'src/hooks/use-auth';
import { useRouter } from 'src/hooks/use-router';
import { routes } from 'src/router/routes';
import { authClient } from 'src/utils/auth/custom/client';
import { z as zod } from 'zod';

const schema = zod.object({
  email: zod
    .string()
    .min(1, {
      message: 'Email is required',
    })
    .email(),
  password: zod.string().min(1, {
    message: 'Password is required',
  }),
});
const defaultValues = {
  email: '',
  password: '',
};
export function AuthCustomLoginForm() {
  const router = useRouter();
  const { checkSession } = useAuth();
  const [loading,setLoading]=useState(false);
  const [isPending, setIsPending] = React.useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit = React.useCallback(
    async (values) => {
      setIsPending(true);
      setLoading(true)
      const { error } = await authClient.loginP(values);
      if (error) {
        setError('root', {
          type: 'server',
          message: error,
        });
        setIsPending(false);
        setLoading(false);
        return;
      }
      await checkSession();
      window.location.href ="/dashboard/analytics";
    },
    [router, setError, checkSession]
  );
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const { t } = useTranslation();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  // const updatedOAuthProviders = oAuthProviders.map((provider) => ({
  //   ...provider,
  //   logo:
  //     provider.id === 'github'
  //       ? isDarkMode
  //         ? '/placeholders/logo/github-icon-light.svg'
  //         : '/placeholders/logo/github-icon.svg'
  //       : provider.logo,
  // }));
  return (
    <>
    {loading ? (
            <div style={{display:'flex',justifyContent:'center'}}>
              <CircularProgress
                color="primary"
                size={80}
                align="center"
                className='nana'
                sx={{
                  // display:'flex',
                  // justifyContent:'left',
                  xs: 2,
                  animationDuration: '550ms',
                  
                }}
              />
            </div>
             
            
          ) :(<form onSubmit={handleSubmit(onSubmit)}>
      <Container maxWidth="sm">
        <Typography
          align="center"
          variant="h3"
          gutterBottom
        >
          Sign in
        </Typography>
        <Typography
          align="center"
          variant="h6"
          fontWeight={400}
        >
          Access your account and continue your journey
        </Typography>
      </Container>
      <Stack
        mt={{
          xs: 2,
          sm: 3,
        }}
        justifyContent="center"
        alignItems="center"
        spacing={{
          xs: 2,
          sm: 3,
        }}
      >
        
        <Divider flexItem>
          <Typography variant="subtitle1">With email</Typography>
        </Divider>
        <Container maxWidth="sm">
          <Grid
            container
            spacing={2}
          >
            <Grid xs={12}>
              <FormControl
                fullWidth
                error={Boolean(errors.email)}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  component="label"
                  htmlFor="email-input"
                  fontWeight={500}
                >
                  Email
                </Typography>
                <FilledInput
                  hiddenLabel
                  {...register('email')}
                  type="email"
                  id="email-input"
                  placeholder="Write your email"
                  startAdornment={
                    <InputAdornment position="start">
                      <MailOutlineRoundedIcon fontSize="small" />
                    </InputAdornment>
                  }
                />
                {errors.email && <FormHelperText>{errors.email.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <FormControl
                fullWidth
                error={Boolean(errors.password)}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  component="label"
                  htmlFor="password-input"
                  fontWeight={500}
                >
                  Password
                </Typography>
                <FilledInput
                  hiddenLabel
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  id="password-input"
                  placeholder="Write your password"
                  endAdornment={
                    <InputAdornment position="end">
                      <ButtonIcon
                        variant="outlined"
                        color="secondary"
                        sx={{
                          mr: -0.8,
                        }}
                        onClick={handlePasswordVisibility}
                      >
                        {showPassword ? (
                          <VisibilityOff fontSize="small" />
                        ) : (
                          <Visibility fontSize="small" />
                        )}
                      </ButtonIcon>
                    </InputAdornment>
                  }
                />
                {errors.password && <FormHelperText>{errors.password.message}</FormHelperText>}
              </FormControl>
            </Grid>
            {/* <Grid xs={12}>
              <Box
                alignItems="center"
                display="flex"
                justifyContent="space-between"
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      name="keepSignedIn"
                      color="primary"
                    />
                  }
                  label={
                    <>
                      <Typography variant="body1">{t('Keep me signed in')}</Typography>
                    </>
                  }
                />
                <Link
                  component={RouterLink}
                  href={routes.auth['custom.reset-password']}
                  underline="hover"
                >
                  {t('Recover password')}
                </Link>
              </Box>
            </Grid> */}
            <Grid xs={12}>
              <Button
                disabled={isPending}
                variant="contained"
                type="submit"
                size="large"
                fullWidth
              >
                Sign in
              </Button>
            </Grid>
            <Grid
              xs={12}
              textAlign="center"
            >
              <Typography
                component="span"
                color="text.secondary"
              >
                Not a Member yet?
              </Typography>{' '}
              <Link
                component={RouterLink}
                href={routes.auth['custom.register']}
                underline="hover"
                fontWeight={500}
              >
                Sign up
              </Link>
            </Grid>
            {errors.root && (
              <Grid xs={12}>
                <Alert
                  variant="outlined"
                  severity="error"
                >
                  {errors.root.message}
                </Alert>
              </Grid>
            )}
             <Grid xs={12}>
                <Alert
                  severity="warning"
                  variant="outlined"
                >
                  <AlertTitle
                    sx={{
                      pb: 0.3,
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    Sign in credentials
                  </AlertTitle>
                  <Typography
                    variant="h5"
                    fontWeight={400}
                  >
                    Email <b>admin@besc.com</b> and password <b>12345678</b>
                  </Typography>
                </Alert>
              </Grid>
          </Grid>
        </Container>
      </Stack>
    </form>)}
    </>
  );
}
