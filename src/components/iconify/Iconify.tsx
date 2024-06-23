import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// mui icons
import { Icon } from '@iconify/react';

// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const Iconify = forwardRef(({ icon, width = 20, sx, ...other } : IconifyProps , ref) => (
  <Box ref={ref} component={Icon} icon={icon} sx={{ width, height: width, ...sx }} {...other} />
));

type IconifyProps = {
  sx: object;
  width: number | string;
  icon: string; 
};


export default Iconify;
