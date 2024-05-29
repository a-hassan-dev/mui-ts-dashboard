import * as React from 'react';
import { Grid, PaletteMode, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import DrawerOpenButton from '../Buttons/DrawerOpenButton';
import DrawerCloseButton from '../Buttons/DrawerCloseButton';
import { useThemeMode } from '../../locales/ThemeLocalization';
import { motion } from 'framer-motion';

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};


function AppAppBar() {
  const { themeMode, toggleTheme } = useThemeMode();
  const [open, setOpen] = React.useState(false);
  const [isSelected, setIsSelected] = React.useState(0);
  const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };
  
  const header = [
    {
      name: "About me",
      scrollTo: "About_me"
    },
    {
      name: "Skills",
      scrollTo: "skills"
    },
    {
      name: "Experience",
      scrollTo: "experience"
    },
    {
      name: "My Works",
      scrollTo: "my_works"
    },
    {
      name: "Blog",
      scrollTo: "blog"
    },
    {
      name: "Contact",
      scrollTo: "contact"
    }
  ]

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              // maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
              >
              <img
                src={
                  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
                }
                style={logoStyle}
                alt="Ali_Hassan_logo"
              />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {/* {Array.isArray(header) && header?.map(( el, index ) => (
                  <motion.button
                    initial={false}
                    onClick={() => { scrollToSection(`${el?.scrollTo || ''}`); setIsSelected(index)}}
                    animate={{
                      color: index === isSelected ? 'grey' : 'red',
                    }}
                    style={{
                      position: "relative",
                      transition: "color 0.15s",
                      border: "none",
                      borderRadius: "32px",
                      background: "transparent",
                      userSelect: "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {index === isSelected && (
                      <motion.div
                        layoutId='indicator'
                        style={{ 
                          borderRadius: "32px",
                          position: "absolute",
                          background: "primary",
                          width: "100%",
                          height: "100%",
                          top: 0,
                          left: 0,
                          zIndex: -1,
                        }}
                      />
                    )}
                    <Typography variant="body2" color="text.primary">{el?.name || '' }</Typography>
                  </motion.button>
              ))} */}
                {Array.isArray(header) && header?.map(( el, index )=>(
                <Button 
                  onClick={() => { scrollToSection(`${el?.scrollTo || ''}`); setIsSelected(index)}}
                  variant={index === isSelected ? 'outlined' : 'text'}  
                  size="small"
                  sx={{ borderRadius: "999px"}}
                >
                  <Typography variant="body2" color={ index === isSelected ? 'inherit' : 'text.primary'} >
                    {el?.name || '' }
                  </Typography>
                </Button>))}
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <ToggleColorMode mode={themeMode} toggleColorMode={toggleTheme} />
              <Button
                color="primary"
                variant="outlined"
                size="small"
                component="a"
              >
                Sign in
              </Button>
              <Button
                color="primary"
                variant="contained"
                size="small"
              >
                Sign up
              </Button>
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' }, bgcolor: "transparent" }} >
              <Grid sx={{display: "flex", alignItems:"center"}} >
                <ToggleColorMode mode={themeMode} toggleColorMode={toggleTheme} />
                <DrawerOpenButton handleDrawer={toggleDrawer(true)} />
              </Grid>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}  >
                <Box
                  sx={{
                    p: 2,
                    minWidth: { xs: '30dvw', sm: '20dvw'},
                    flexGrow: 1,
                    bgcolor: "transparent",
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1,
                      alignItems: 'end',
                    }}
                  >
                    <DrawerCloseButton handleDrawer={toggleDrawer(false)} />
                  </Box>
                  {/* {Array.isArray(header) && header?.map((el)=>(<MenuItem onClick={() => scrollToSection(`${el?.scrollTo || ''}`)} >
                    <Typography variant="body2" color="text.primary">{el?.name || '' }</Typography>
                  </MenuItem>))} */}
                  {Array.isArray(header) && header?.map((el, index)=>( <Button 
                    onClick={() => { scrollToSection(`${el?.scrollTo || ''}`); setIsSelected(index)}}
                    variant={index === isSelected ? 'contained' : 'outlined'}  
                    sx={{m:0.5, px: 1, width: '100%'}}
                  >
                    <Typography variant="body2" color={ index === isSelected ? 'inherit' : 'text.primary'} >
                      {el?.name || '' }
                    </Typography>
                  </Button>))}
                  <Divider sx={{my:2, }} />
                  <Stack spacing={1} >
                    <Button
                      color="primary"
                      variant="contained"
                      sx={{ width: '100%' }}
                      >
                      Sign up
                    </Button>
                    <Button
                      color="primary"
                      variant="outlined"
                      sx={{ width: '100%' }}
                      >
                      Sign in
                    </Button>
                      </Stack>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
