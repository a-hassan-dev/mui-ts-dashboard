import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/MenuRounded';

interface DrawerOpenButtonProps {
  handleDrawer: () => void;
}

function DrawerOpenButton({ handleDrawer }: DrawerOpenButtonProps) {
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
        <MenuIcon fontSize="small" />
      </Button>
    </Box>
  );
}

export default DrawerOpenButton;
