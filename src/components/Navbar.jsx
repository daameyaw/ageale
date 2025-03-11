import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { logoPlaceholder } from '../../placeholderImages';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { name: 'Drones', submenu: ['eBee X', 'eBee TAC', 'eBee VISION'] },
    { name: 'Sensors', submenu: ['RGB', 'Thermal', 'Multispectral'] },
    { name: 'Software', submenu: ['Flight Planning', 'Data Processing', 'Analytics'] },
    { name: 'Solutions', submenu: ['Agriculture', 'Defense', 'Surveying'] },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'white', color: theme.palette.text.primary, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <Toolbar sx={{ justifyContent: 'space-between', height: '80px' }}>
          <Typography 
            variant="h6" 
            component={Link} 
            to="/" 
            sx={{ 
              textDecoration: 'none', 
              color: theme.palette.primary.main,
              fontWeight: 'bold',
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Box 
              component="img" 
              src={logoPlaceholder}
              alt="AgEagle Logo"
              sx={{ 
                height: '40px', 
                mr: 1,
                display: 'block'
              }}
            />
          </Typography>
          
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {menuItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  to={`/${item.name.toLowerCase()}`}
                  color="inherit"
                  sx={{ 
                    mx: 1,
                    fontWeight: 500,
                    '&:hover': {
                      color: theme.palette.primary.main
                    }
                  }}
                >
                  {item.name}
                </Button>
              ))}
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                color="primary"
                sx={{ 
                  ml: 3,
                  px: 3,
                  borderRadius: '24px',
                  textTransform: 'none',
                  fontWeight: 600
                }}
              >
                Contact Us
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ height: '80px' }} /> {/* Spacer to prevent content from hiding behind AppBar */}

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { width: '250px' }
        }}
      >
        <List sx={{ pt: 2 }}>
          {menuItems.map((item) => (
            <React.Fragment key={item.name}>
              <ListItem
                button
                component={Link}
                to={`/${item.name.toLowerCase()}`}
                onClick={handleDrawerToggle}
              >
                <ListItemText 
                  primary={item.name}
                  primaryTypographyProps={{
                    fontWeight: 600
                  }}
                />
              </ListItem>
              {item.submenu.map((subItem) => (
                <ListItem
                  key={subItem}
                  button
                  component={Link}
                  to={`/${item.name.toLowerCase()}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={handleDrawerToggle}
                  sx={{ pl: 4 }}
                >
                  <ListItemText primary={subItem} />
                </ListItem>
              ))}
            </React.Fragment>
          ))}
          <ListItem
            button
            component={Link}
            to="/contact"
            onClick={handleDrawerToggle}
            sx={{ mt: 2 }}
          >
            <ListItemText 
              primary="Contact Us"
              primaryTypographyProps={{
                fontWeight: 600,
                color: theme.palette.primary.main
              }}
            />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
