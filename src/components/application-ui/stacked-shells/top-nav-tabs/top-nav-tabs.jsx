import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { useMobileNav } from 'src/hooks/use-mobile-nav';
import { HEADER_HEIGHT } from 'src/theme/utils';
import { Header } from './header';

export const StackedShellsTopNavTabs = (props) => {
  const { children, menuItems } = props;
  const mobileNav = useMobileNav();
  return (
    <>
      <Header
        onClose={mobileNav.handleClose}
        menuItems={menuItems}
        open={mobileNav.open}
        onOpen={mobileNav.handleOpen}
      />
      <Box
        flex={1}
        overflow="hidden"
        sx={{
          pt: `${HEADER_HEIGHT * 1.3}px`,
          backgroundColor: 'background.paper',
        }}
      >
        <Box
          flex={1}
          sx={{
            backgroundColor: 'background.default',
            position: 'relative',
            zIndex: 1,
            minHeight: '100%',
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};
StackedShellsTopNavTabs.propTypes = {
  children: PropTypes.node,
  menuItems: PropTypes.array,
};
