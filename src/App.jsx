import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Provider as ReduxProvider } from 'react-redux';
import { useLocation, useRoutes } from 'react-router-dom';
import { RtlDirection } from 'src/components/base/rtl-direction';
import { Toastr } from 'src/components/base/toastr';
import { AuthProvider } from 'src/contexts/auth/auth-context';
import { CustomizationConsumer, CustomizationProvider } from 'src/contexts/customization';
import { useNprogress } from 'src/hooks/use-nprogress';
import { store } from 'src/store';
import { createTheme } from 'src/theme';
import 'src/i18n/i18n';
import 'src/global.css';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Helmet } from 'react-helmet-async';
import { SidebarProvider } from 'src/contexts/sidebar-context';
import { routesOutlets } from 'src/router';
import { routes } from 'src/router/routes';

export const App = () => {
  useNprogress();
  const router = useRoutes(routesOutlets);
  const location = useLocation();
  return (
    <ReduxProvider store={store}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <AuthProvider>
          <SidebarProvider>
            <CustomizationProvider>
              <CustomizationConsumer>
                {(settings) => {
                  if (!settings.isInitialized) {
                    // return null
                  }
                  const paletteMode =
                    location.pathname === routes.dashboard.index ||
                    location.pathname === routes.dashboard.analytics 
                      ? 'dark'
                      : settings.paletteMode;
                  const theme = createTheme({
                    colorPreset: settings.colorPreset,
                    direction: settings.direction,
                    // paletteMode: paletteMode,
                    layout: settings.layout,
                  });
                  return (
                    <ThemeProvider theme={theme}>
                      <Helmet>
                        <meta
                          name="color-scheme"
                          // content={paletteMode}
                        />
                        <meta
                          name="theme-color"
                          content={theme.palette.primary.main}
                        />
                      </Helmet>
                      <RtlDirection direction={settings.direction}>
                        <CssBaseline />
                        {router}
                        <Toastr />
                      </RtlDirection>
                    </ThemeProvider>
                  );
                }}
              </CustomizationConsumer>
            </CustomizationProvider>
          </SidebarProvider>
        </AuthProvider>
      </LocalizationProvider>
    </ReduxProvider>
  );
};
export default App;
