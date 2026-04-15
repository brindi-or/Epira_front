import PropTypes from 'prop-types';
import { Helmet as Head } from 'react-helmet-async';

export const Helmet = (props) => {
  const { heading } = props;
  const pageTitle = heading ? heading + ' - UIFort' : 'React UI Kit and Admin Dashboard Template';
  return (
    <Head>
      <title>{pageTitle}</title>
    </Head>
  );
};
Helmet.propTypes = {
  heading: PropTypes.string,
};
