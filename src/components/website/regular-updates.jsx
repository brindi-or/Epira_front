import { MenuBookRounded } from '@mui/icons-material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Unstable_Grid2 as Grid,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { formatDistance } from 'date-fns';
import Tilt from 'react-parallax-tilt';
import { RouterLink } from '../base/router-link';
import { AvatarState } from 'src/components/base/styles/avatar';
import { routes } from 'src/router/routes';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
  const HomepageRegularUpdates = () => {
  const {t} = useTranslation();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box
      flex={1}
      sx={{
        position: 'relative',
        '&::after': {
          content: '" "',
          position: 'absolute',
          top: 0,
          opacity: 0.5,
          right: 0,
          width: '75%',
          height: '60%',
          backgroundImage: 'url(/placeholders/covers/glow.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          backgroundPosition: 'right top',
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          height: '100%',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <Box
          flex={1}
          pl={{
            xs: 0,
            md: 16,
          }}
          py={{
            xs: 6,
            md: 10,
          }}
          position="relative"
          display="flex"
          flexDirection="column"
        >
          {mdUp && (
            <Box
              sx={{
                width: 4,
                backgroundColor: 'success.main',
                position: 'absolute',
                left: theme.spacing(1.3),
                top: theme.spacing(0),
                '&::before': {
                  content: '" "',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 4,
                  height: 130,
                  backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 20%, ${theme.palette.success.main} 100%)`,
                },
              }}
            >
              <Box
                sx={{
                  width: theme.spacing(11),
                  height: theme.spacing(12.5),
                  background: 'none',
                  borderLeft: `4px solid ${theme.palette.success.main}`,
                  borderBottom: `4px solid ${theme.palette.success.main}`,
                  borderBottomLeftRadius: theme.shape.borderRadius * 3,
                  position: 'absolute',
                  zIndex: 3,
                  top: theme.spacing(9.5),
                  left: theme.spacing(0),
                  boxShadow: `-35px 35px 35px 0 ${alpha(
                    theme.palette.background.paper,
                    0.5
                  )}, -40px 45px 45px 0 ${alpha(theme.palette.success.main, 0.15)}`,
                  '&&::after': {
                    content: '" "',
                    position: 'absolute',
                    bottom: -4,
                    right: 0,
                    width: 60,
                    height: 4,
                    backgroundImage: `linear-gradient(45deg, ${theme.palette.success.main} 20%, ${theme.palette.background.default} 100%)`,
                  },
                }}
              />
              <Box
                sx={{
                  width: theme.spacing(11),
                  height: theme.spacing(31),
                  background: 'none',
                  borderLeft: `4px solid ${theme.palette.success.main}`,
                  borderBottom: `4px solid ${theme.palette.success.main}`,
                  borderBottomLeftRadius: theme.shape.borderRadius * 3,
                  position: 'absolute',
                  zIndex: 3,
                  top: theme.spacing(9.5),
                  left: theme.spacing(0),
                  boxShadow: `-35px 35px 35px 0 ${alpha(
                    theme.palette.background.paper,
                    0.5
                  )}, -40px 45px 45px 0 ${alpha(theme.palette.success.main, 0.15)}`,
                  '&&::after': {
                    content: '" "',
                    position: 'absolute',
                    bottom: -4,
                    right: 0,
                    width: 60,
                    height: 4,
                    backgroundImage: `linear-gradient(45deg, ${theme.palette.success.main} 20%, ${theme.palette.background.default} 100%)`,
                  },
                }}
              >
                <Box
                  sx={{
                    borderRadius: 100,
                    zIndex: 4,
                    backgroundColor: 'success.main',
                    border: '1px solid background.paper',
                    width: 22,
                    height: 22,
                    left: theme.spacing(-1.3),
                    top: theme.spacing(0),
                    position: 'absolute',
                    boxShadow: `0 0 0 3px ${theme.palette.background.paper}, 0 3px 12px 0 ${alpha(
                      theme.palette.success.main,
                      0.8
                    )}`,
                    '&::after': {
                      borderRadius: 'inherit',
                      content: '" "',
                      position: 'absolute',
                      top: 6,
                      left: 6,
                      width: 10,
                      height: 10,
                      backgroundColor: 'common.white',
                      boxShadow: `0 5px 35px 5px ${theme.palette.success.main}`,
                    },
                  }}
                />
              </Box>
            </Box>
          )}
          <Box flex={1}>
            <Chip
              variant="outlined"
              color="success"
              sx={{
                borderRadius: theme.shape.borderRadius,
              }}
              label={
                <>
                  <Typography variant="h5">always up to date and production-ready.</Typography>
                </>
              }
            />
            <Grid container>
              <Grid
                xs={12}
                md={10}
                lg={8}
                xl={6}
                py={{
                  xs: 2,
                  sm: 4,
                }}
              >
                <Typography
                  variant="h1"
                  gutterBottom
                  lineHeight={1.4}
                  color="text.primary"
                >
                  Receive your ETCN in least 24 hours
                </Typography>
              </Grid>
            </Grid>
            <Grid
              mt={{
                xs: 0,
                sm: 1,
              }}
              container
              spacing={{
                xs: 2,
                sm: 3,
              }}
            >
              <Grid xs={12}>
                <Tilt
                  scale={1}
                  tiltMaxAngleX={1.26}
                  perspective={1300}
                  glarePosition="all"
                  glareEnable={true}
                  glareColor={theme.palette.success.main}
                  glareMaxOpacity={0.05}
                  tiltMaxAngleY={1.26}
                >
                  <Card
                    elevation={0}
                    variant="outlined"
                    sx={{
                      boxShadow: theme.shadows[18],
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <CardContent
                      sx={{
                        p: {
                          xs: 2,
                          sm: 3,
                        },
                      }}
                    >
                      <Stack
                        spacing={2}
                        direction={{
                          xs: 'column',
                          xl: 'row',
                        }}
                      >
                        <Box flex={1}>
                          <Typography
                            variant="h3"
                            component="h5"
                            gutterBottom
                          >
                            Lorem
                          </Typography>
                          <Typography
                            variant="h4"
                            color="text.secondary"
                            fontWeight={400}
                            sx={{
                              pb: 2,
                            }}
                          >
                            Lorem ipsum solar.
                          </Typography>
                          <Box display="flex">
                            <Tooltip
                              arrow
                              placement="bottom"
                              title="Version 1.0.0 does not have a changelog!"
                            >
                              <Box>
                                <Button
                                  disabled
                                  variant="outlined"
                                >
                                  View changelog
                                </Button>
                              </Box>
                            </Tooltip>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: theme.shape.borderRadius + 'px',
                            backgroundColor: 'background.default',
                          }}
                          textAlign="center"
                        >
                          <Box>
                            <Typography
                              variant="h4"
                              component="p"
                              sx={{
                                pb: 0.5,
                              }}
                            >
                             lorem ipsum
                            </Typography>
                            <Typography
                              variant="h4"
                              color="text.secondary"
                              fontWeight={500}
                              component="p"
                              lineHeight={1}
                            >
                              Last updated{' '}
                              <Typography
                                color="text.primary"
                                fontWeight={600}
                                component="span"
                                variant="h4"
                                lineHeight={1}
                              >
                                {formatDistance(new Date('2023-12-21'), new Date(), {
                                  addSuffix: true,
                                })}
                              </Typography>
                            </Typography>
                          </Box>
                          <Box
                            flexWrap="wrap"
                            gap={1}
                            display="flex"
                            sx={{
                              mt: {
                                xs: 2,
                                sm: 3,
                              },
                            }}
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Chip
                              variant="outlined"
                              color="primary"
                              sx={{
                                borderRadius: theme.shape.borderRadius,
                              }}
                              label={
                               
                                <Box
                                  display="flex"
                                  gap={1}
                                  alignItems="center"
                                >
                                  
                                   <Link
                                   to={routes.dashboard['analytics']}
                                    component={RouterLink}
                                    underline="hover"
                                  >
                                    {t('Go to dashboard')}
                                  </Link>
                                </Box>
                              }
                            />
                           
                          </Box>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Tilt>
              </Grid>
           
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default HomepageRegularUpdates;
