import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DarkMode from '@mui/icons-material/DarkModeRounded';

interface DarkModeButtonProps {
  handleClick: () => void;
}

function DarkModeButton({  handleClick }: DarkModeButtonProps) {
  return (
    <Box sx={{ maxWidth: '32px' }}>
      <Button
        variant="text"
        color="primary"
        aria-label="button to toggle theme"
        onClick={handleClick}
        size="small"
        sx={{ minWidth: '32px', height: '32px', p: '4px' }}
      >
        <DarkMode fontSize="small"  />
      </Button>
    </Box>
  );
}

export default DarkModeButton;
