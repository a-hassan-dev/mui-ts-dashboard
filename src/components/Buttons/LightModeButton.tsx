import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LightMode from '@mui/icons-material/LightModeRounded';

interface LightModeButtonProps {
  handleClick: () => void;
}

function LightModeButton({  handleClick }: LightModeButtonProps) {
  return (
    <Box sx={{ maxWidth: '32px' }}>
      <Button
        variant="text"
        color="primary"
        aria-label="menu"
        onClick={handleClick}
        size="small"
        sx={{ minWidth: '32px', height: '32px', p: '4px' }}
      >
        <LightMode  fontSize="small"  />
      </Button>
    </Box>
  );
}

export default LightModeButton;
