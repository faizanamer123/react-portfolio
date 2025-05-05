import React from 'react';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Box,
  useTheme,
  useMediaQuery,
  Avatar,
  Typography,
  Divider
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import styles from './SideNav.module.css';
import profileImg from '../../assets/images/main.jpeg';

const SideNav = ({ open, handleDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  
  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'About', icon: <PersonIcon />, path: '/about' },
    { text: 'Education', icon: <SchoolIcon />, path: '/education' },
    { text: 'Skills', icon: <CodeIcon />, path: '/skills' },
    { text: 'Services', icon: <DesignServicesIcon />, path: '/services' },
    { text: 'Projects', icon: <BuildIcon />, path: '/projects' },
    { text: 'Contact', icon: <ContactMailIcon />, path: '/contact' },
  ];

  const drawerContent = (
    <Box className={styles.drawerContent}>
      <Box className={styles.profileSection}>
        <Avatar
          src={profileImg}
          alt="Faizan Amir"
          className={styles.profileAvatar}
        />
        <Typography variant="h6" className={styles.profileName}>
          Faizan Amir
        </Typography>
        <Typography variant="body2" className={styles.profileTitle}>
          Web Developer
        </Typography>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem 
            button 
            component={Link} 
            to={item.path} 
            key={item.text}
            className={`${styles.navItem} ${location.pathname === item.path ? styles.activeNavItem : ''}`}
            onClick={isMobile ? handleDrawerToggle : undefined}
          >
            <ListItemIcon className={styles.navIcon}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Box className={styles.socialLinks}>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <i className="fab fa-twitter"></i>
        </a>
      </Box>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        // Mobile drawer (temporary)
        <Drawer
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
          className={styles.drawer}
          classes={{
            paper: styles.drawerPaper,
          }}
        >
          {drawerContent}
        </Drawer>
      ) : (
        // Desktop drawer (permanent)
        <Drawer
          variant="permanent"
          className={styles.drawer}
          classes={{
            paper: styles.drawerPaper,
          }}
          open
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
};

export default SideNav;