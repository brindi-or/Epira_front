import EventTwoToneIcon from '@mui/icons-material/EventTwoTone';
import PowerSettingsNewTwoToneIcon from '@mui/icons-material/PowerSettingsNewTwoTone';
import SmsTwoToneIcon from '@mui/icons-material/SmsTwoTone';
import { alpha, IconButton, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import React from 'react';
import toast from 'react-hot-toast';

import { TooltipLight } from 'src/components/base/styles/tooltips';
import { neutral } from 'src/theme/colors';
import { routes } from 'src/router/routes';
import { createClient as createSupabaseClient } from 'src/utils/supabase/client';

import { authClient } from 'src/utils/auth/custom/client';
import { AuthStrategy } from 'src/utils/auth/strategy';
import { config } from 'src/utils/config';
const FooterButton = ({ icon, tooltipText, handleSignOut }) => {
  const { t } = useTranslation();
  return (
    <TooltipLight
      placement="top"
      arrow
      title={t(tooltipText)}
    >
      <IconButton
       onClick={() => handleSignOut().catch(() => {})}
        sx={{
          background: alpha(neutral[800], 0.1),
          color: neutral[400],
          textAlign: 'left',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: alpha(neutral[600], 0.2),
          '&:hover': {
            color: neutral[100],
            background: alpha(neutral[700], 0.12),
            borderColor: alpha(neutral[600], 0.3),
          },
        }}
      >
        {icon}
      </IconButton>
    </TooltipLight>
  );
};
const SidebarFooter = () => {
    const handleSignOut = React.useCallback(async () => {
      console.log('Signing out user');
      let redirectTo;
      switch (config.auth.strategy) {
        case AuthStrategy.CUSTOM: {
          try {
            const { error } = await authClient.signOut();
            if (error) {
              console.error('Sign out error', error);
              toast.error('Something went wrong, unable to sign out');
            }
          } catch (err) {
            console.error('Sign out error', err);
            toast.error('Something went wrong, unable to sign out');
          }
          redirectTo = routes.auth['custom.login'];
          break;
        }
        case AuthStrategy.SUPABASE: {
          try {
            // Here the client cannot be memoized because it may not be configured.
            const supabaseClient = createSupabaseClient();
            const { error } = await supabaseClient.auth.signOut();
            if (error) {
              console.error('Sign out error', error);
              toast.error('Something went wrong, unable to sign out');
            }
          } catch (err) {
            console.error('Sign out error', err);
            toast.error('Something went wrong, unable to sign out');
          }
          redirectTo = routes.auth['supabase.login'];
          break;
        }
      }
      window.location.href = redirectTo;
    }, []);
  return (
    <Stack
      direction="row"
      py={1}
      spacing={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex={6}
      position="relative"
    >
      {/* <FooterButton
        icon={<EventTwoToneIcon fontSize="small" />}
        tooltipText="Events Calendar"
      />
      <FooterButton
        icon={<SmsTwoToneIcon fontSize="small" />}
        tooltipText="Messenger"
      /> */}
      <FooterButton
        handleSignOut={handleSignOut}
        icon={<PowerSettingsNewTwoToneIcon fontSize="small" />}
        tooltipText="Logout"
      />
    </Stack>
  );
};
export default SidebarFooter;
