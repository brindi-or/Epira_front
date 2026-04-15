import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { useMobileNav } from 'src/hooks/use-mobile-nav';
import { HEADER_HEIGHT } from 'src/theme/utils';
import { Header } from './header';

export const StackedShellsTopNav = (props) => {
  const { children, menuItems } = props;
  const mobileNav = useMobileNav();
  return (
    <>
      <Header
        onClose={mobileNav.handleClose}
        open={mobileNav.open}
        menuItems={menuItems}
        onOpen={mobileNav.handleOpen}
      />
      <Box
        flex={1}
        overflow="hidden"
        sx={{
          pt: `${HEADER_HEIGHT * 1.3}px`,
          minHeight: `calc(100vh - ${HEADER_HEIGHT * 1.3}px)`,
          backgroundColor: 'background.paper',
        }}
      >
        {children}
      </Box>
    </>
  );
};
StackedShellsTopNav.propTypes = {
  children: PropTypes.node,
  menuItems: PropTypes.array,
};
