







import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
  InputBase,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  ShoppingCart,
  Search,
  Menu,
  Favorite,
  Person,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        <ListItem component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem component={Link} to="/products">
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem component={Link} to="/categories">
          <ListItemText primary="Categories" />
        </ListItem>
        <ListItem component={Link} to="/about">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem component={Link} to="/contact">
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: 'white', color: 'text.primary', boxShadow: 1 }}>
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: isMobile ? 1 : 0,
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 'bold',
              fontSize: '1.5rem',
            }}
          >
            Bloom & Gift
          </Typography>

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 3, ml: 4 }}>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/products">
                Products
              </Button>
              <Button color="inherit" component={Link} to="/categories">
                Categories
              </Button>
              <Button color="inherit" component={Link} to="/about">
                About
              </Button>
            </Box>
          )}

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {!isMobile && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  bgcolor: 'grey.100',
                  borderRadius: 2,
                  px: 2,
                  py: 0.5,
                  mr: 2,
                }}
              >
                <Search sx={{ color: 'grey.500', mr: 1 }} />
                <InputBase
                  placeholder="Search flowers..."
                  sx={{ fontSize: '0.9rem' }}
                />
              </Box>
            )}

            <IconButton color="inherit" component={Link} to="/wishlist">
              <Badge badgeContent={0} color="error">
                <Favorite />
              </Badge>
            </IconButton>

            <IconButton color="inherit" component={Link} to="/cart">
              <Badge badgeContent={0} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>

            <IconButton color="inherit" component={Link} to="/login">
              <Person />
            </IconButton>

            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <Menu />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;








