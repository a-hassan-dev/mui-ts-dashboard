import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Close from '@mui/icons-material/CloseRounded';

interface DrawerCloseButtonProps {
  handleDrawer: () => void;
}

function DrawerCloseButton({  handleDrawer }: DrawerCloseButtonProps) {
  return (
    <Box sx={{ maxWidth: '32px' }}>
      <Button
        variant="text"
        color="primary"
        aria-label="menu"
        onClick={handleDrawer}
        size="small"
        sx={{ minWidth: '32px', height: '32px', p: '4px' }}
      >
        <Close fontSize="small"  />
      </Button>
    </Box>
  );
}

export default DrawerCloseButton;
