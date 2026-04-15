import { zodResolver } from '@hookform/resolvers/zod';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Alert,
  Box,
  Button,
  Checkbox,
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

const oAuthProviders = [
  {
    id: 'google',
    name: 'Google',
    logo: '/placeholders/logo/google-icon.svg',
  },
  {
    id: 'github',
    name: 'Github',
    logo: '/placeholders/logo/github-icon.svg',
  },
];
const schema = zod.object({
  name: zod.string().min(1, {
    message: 'First name is required',
  }),
  lastName: zod.string().min(1, {
    message: 'Last name is required',
  }),
  email: zod
    .string()
    .min(1, {
      message: 'Email is required',
    })
    .email(),
  password: zod.string().min(6, {
    message: 'Password should be at least 6 characters',
  }),
});
const defaultValues = {
  name: '',
  lastName: '',
  email: '',
  password: '',
};
export function AuthCustomRegisterForm() {
  const router = useRouter();
  const { t } = useTranslation();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const updatedOAuthProviders = oAuthProviders.map((provider) => ({
    ...provider,
    logo:
      provider.id === 'github'
        ? isDarkMode
          ? '/placeholders/logo/github-icon-light.svg'
          : '/placeholders/logo/github-icon.svg'
        : provider.logo,
  }));
  const { checkSession } = useAuth();
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
  const onAuth = React.useCallback(async (provider) => {
    setIsPending(true);
    const { error } = await authClient.signInWithOAuth({
      provider,
    });
    if (error) {
      setIsPending(false);
      // toast.error(error);
      return;
    }
    setIsPending(false);
  }, []);
  const onSubmit = React.useCallback(
    async (values) => {
      setIsPending(true);
      const { error } = await authClient.signUp(values);
      if (error) {
        setError('root', {
          type: 'server',
          message: error,
        });
        setIsPending(false);
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
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        py={{
          xs: 2,
          sm: 3,
        }}
        mx={{
          xl: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            align="center"
            variant="h3"
            gutterBottom
          >
            Create new account
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
            <Typography variant="subtitle1">Register with email</Typography>
          </Divider>
          <Container maxWidth="sm">
            <Grid
              container
              spacing={2}
            >
              <Grid xs={12}>
                <FormControl fullWidth>
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="label"
                    htmlFor="name-input"
                    fontWeight={500}
                  >
                    Full name
                  </Typography>
                  <Grid
                    container
                    spacing={{
                      xs: 2,
                      md: 3,
                    }}
                  >
                    <Grid
                      xs={12}
                      sm={6}
                    >
                      <FilledInput
                        error={Boolean(errors.name)}
                        hiddenLabel
                        {...register('name')}
                        id="firstname-input"
                        fullWidth
                        placeholder="First name"
                      />

                      {errors.name && (
                        <FormHelperText>{errors.name.message}</FormHelperText>
                      )}
                    </Grid>
                    <Grid
                      xs={12}
                      sm={6}
                    >
                      <FilledInput
                        error={Boolean(errors.lastName)}
                        hiddenLabel
                        {...register('lastName')}
                        fullWidth
                        id="lastname-input"
                        placeholder="Last name"
                      />
                      {errors.lastName && (
                        <FormHelperText>{errors.lastName.message}</FormHelperText>
                      )}
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
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
                    {...register('email')}
                    type="email"
                    hiddenLabel
                    id="email-input"
                    placeholder="Write your email"
                    startAdornment={<InputAdornment position="start"></InputAdornment>}
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
                    {...register('password')}
                    type={showPassword ? 'text' : 'password'}
                    hiddenLabel
                    id="password-input"
                    placeholder="Write your password"
                    startAdornment={
                      <InputAdornment position="start">
                        <MailOutlineRoundedIcon fontSize="small" />
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <ButtonIcon
                          variant="outlined"
                          color="secondary"
                          sx={{
                            mr: -0.3,
                          }}
                          onClick={handlePasswordVisibility}
                        >
                          {showPassword ? (
                            <VisibilityOff fontSize="inherit" />
                          ) : (
                            <Visibility fontSize="inherit" />
                          )}
                        </ButtonIcon>
                      </InputAdornment>
                    }
                  />
                  {errors.password && <FormHelperText>{errors.password.message}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid xs={12}>
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
                </Box>
              </Grid>
              <Grid xs={12}>
                <Button
                  disabled={isPending}
                  variant="contained"
                  type="submit"
                  size="large"
                  fullWidth
                >
                  Create account
                </Button>
              </Grid>
              {errors.root && (
                <Grid xs={12}>
                  <Alert severity="error">{errors.root.message}</Alert>
                </Grid>
              )}
              <Grid
                xs={12}
                textAlign="center"
              >
                <Typography
                  component="span"
                  color="text.secondary"
                >
                  Already a Member?
                </Typography>{' '}
                <Link
                  component={RouterLink}
                  href={routes.auth['custom.login']}
                  underline="hover"
                  fontWeight={500}
                >
                  Sign in here
                </Link>
              </Grid>
            </Grid>
          </Container>
        </Stack>
      </Box>
    </form>
  );
}
