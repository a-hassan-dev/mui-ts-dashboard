import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// @mui
// import { useTheme } from '@mui/material/styles';
import { Box, Link } from '@mui/material';

// ----------------------------------------------------------------------

const Logo = forwardRef(({width = 150, disabledLink = false, sx, src="/logo/logo.svg", ...other }: LogoProps, ref) => {


  // OR using local (public folder)
  // -------------------------------------------------------
  const logo = (
    <Box
      component="img"
      src={src}
      sx={{ width, height: 'auto', cursor: 'pointer', ...sx }}
    />
  );


  if (disabledLink) {
    return logo;
  }

  return (
    <a href="/" style={{ display: 'contents' }}>
      {logo}
    </a>
  );
});

type LogoProps = {
  sx: object,
  disabledLink: boolean,
  src: string,
  width: number
};

export default Logo;
