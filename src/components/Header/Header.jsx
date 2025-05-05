import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Avatar, 
  Menu, 
  MenuItem, 
  Box, 
  useMediaQuery, 
  useTheme,
  Switch,
  FormControlLabel
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useNavigate } from 'react-router-dom';
import { usePageTitle } from '../../context/PageTitleContext';
import { useThemeContext } from '../../theme/ThemeContext';
import styles from './Header.module.css';
import profileImg from '../../assets/images/main.jpeg';

const Header = ({ handleDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { pageTitle } = usePageTitle();
  const { mode, toggleTheme } = useThemeContext();
  const navigate = useNavigate();
  
  // Avatar menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleLogout = () => {
    // Placeholder for logout functionality
    handleClose();
    alert('Logout functionality would go here');
  };
  
  const handleProfileClick = () => {
    navigate('/');
    handleClose();
  };

  return (
    <AppBar position="static" className={styles.appBar}>
      <Toolbar>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={styles.menuButton}
          >
            <MenuIcon />
          </IconButton>
        )}
        
        <Typography 
          variant="h6" 
          component="div" 
          className={styles.logo}
          onClick={() => navigate('/')}
        >
          Faizan <span className={styles.highlight}>Amir</span>
        </Typography>
        
        <Box sx={{ flexGrow: 1 }} />
        
        {/* Theme toggle */}
        <FormControlLabel
          control={
            <Switch
              checked={mode === 'light'}
              onChange={toggleTheme}
              color="default"
            />
          }
          label={mode === 'light' ? 
            <Brightness7Icon sx={{ color: theme.palette.text.primary }} /> : 
            <Brightness4Icon sx={{ color: theme.palette.text.primary }} />
          }
          className={styles.themeToggle}
        />
        
        {/* Avatar and dropdown */}
        <IconButton
          onClick={handleAvatarClick}
          size="large"
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar 
            alt="Faizan Amir" 
            src={profileImg}
            className={styles.avatar} 
          />
        </IconButton>
        
        <Menu
          id="account-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;