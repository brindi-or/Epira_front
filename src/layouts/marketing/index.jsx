import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { Header } from './header';

export const MarketingLayout = ({ children }) => {
  return (
    <Box
      flex={1}
      display="block"
      width="100%"
      sx={{
        backgroundColor: 'background.paper',
      }}
    >
      <Header />
      <Box
        position="relative"
        zIndex={5}
      >
        {children}
      </Box>
    </Box>
  );
};
MarketingLayout.propTypes = {
  children: PropTypes.node,
};
