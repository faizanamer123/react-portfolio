import React, { createContext, useState, useContext, useEffect } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

// Create the context
const ThemeContext = createContext();

// Create a custom hook for using the theme context
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }
  return context;
};

// Provider component
export const ThemeContextProvider = ({ children }) => {
  // Check for user's preferred theme or saved preference
  const getInitialMode = () => {
    const savedMode = localStorage.getItem('themeMode');
    return savedMode ? savedMode : 'dark'; // Default to dark theme
  };

  const [mode, setMode] = useState(getInitialMode);

  // Update body class and localStorage when theme changes
  useEffect(() => {
    const body = document.body;
    if (mode === 'light') {
      body.classList.add('light-theme');
    } else {
      body.classList.remove('light-theme');
    }
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  // Define theme based on mode
  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#00aaff',
      },
      secondary: {
        main: '#2980b9',
      },
      background: {
        default: mode === 'light' ? '#ffffff' : '#0a192f',
        paper: mode === 'light' ? '#f5f5f5' : '#1c2833',
      },
      text: {
        primary: mode === 'light' ? '#333333' : '#ecf0f1',
        secondary: mode === 'light' ? '#757575' : '#b3b3b3',
      },
    },
    typography: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 600,
      },
      h2: {
        fontWeight: 500,
      },
      h3: {
        fontWeight: 500,
      },
      h4: {
        fontWeight: 500,
      },
      button: {
        textTransform: 'none',
        fontWeight: 500,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            transition: 'background-color 0.3s, color 0.3s',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: mode === 'light' 
              ? '0 2px 4px rgba(0,0,0,0.1)'
              : '0 2px 5px rgba(0,0,0,0.5)',
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: mode === 'light' ? '#f8f8f8' : '#17202a',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: mode === 'light'
              ? '0 2px 5px rgba(0,0,0,0.1)'
              : '0 2px 5px rgba(0,0,0,0.5)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: mode === 'light'
                ? '0 5px 15px rgba(0,0,0,0.15)'
                : '0 5px 15px rgba(0,0,0,0.8)',
            },
          },
        },
      },
    },
  });

  // Toggle theme function
  const toggleTheme = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Value to be provided
  const value = {
    mode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <MUIThemeProvider theme={theme}>
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;