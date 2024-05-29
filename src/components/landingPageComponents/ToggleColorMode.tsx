import * as React from 'react';
import { PaletteMode } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LightMode from '@mui/icons-material/LightModeRounded';
import DarkMode from '@mui/icons-material/DarkModeRounded';

interface ToggleColorModeProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

function ToggleColorMode({ mode, toggleColorMode }: ToggleColorModeProps) {
  return (
    <Box sx={{ maxWidth: '32px' }}>
      <Button
        variant="text"
        onClick={toggleColorMode}
        size="small"
        aria-label="button to toggle theme"
        sx={{ minWidth: '32px', height: '32px', p: '4px' }}
      >
        {mode === 'dark' ? (

          <LightMode fontSize="small" />
        ) : (
          <DarkMode fontSize="small" />
        )}
      </Button>
    </Box>
  );
}

export default ToggleColorMode;
