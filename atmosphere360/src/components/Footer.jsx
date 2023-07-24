import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  return (
    <footer style={{ height: '3rem', backgroundColor: 'gainsboro', width: '100%', position: 'relative' }}>
      <p>
        Designed and developed with <FavoriteIcon fontSize="small" /> by dev khay
      </p>
    </footer>
  );
};

export default Footer;
