import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Paper, CssBaseline, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Brightness4, Brightness7 } from '@mui/icons-material';

// Light and dark theme definitions for easy customization
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Change primary color here
    },
    secondary: {
      main: '#dc004e', // Change secondary color here
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
});

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle between light and dark themes
  const handleThemeChange = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {/* Navigation Bar */}
      <AppBar position="static">
        <Toolbar>
          {/* Logo or App Name */}
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            HireMe
          </Typography>
          {/* Navigation Links */}
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/dashboard">Dashboard</Button>
          <Button color="inherit" href="/login">Login</Button>
          <Button color="inherit" href="/about">About Us</Button>
          {/* Theme Toggle */}
          <IconButton sx={{ ml: 1 }} onClick={handleThemeChange} color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        {/* Coming Soon Message */}
        <Paper elevation={3} sx={{ padding: 6, textAlign: 'center', marginTop: 8 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Coming Soon
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Our amazing platform is launching soon. Stay tuned!
          </Typography>
        </Paper>
      </Container>
      {/* Footer */}
      <Paper component="footer" sx={{ padding: 2, marginTop: 4, textAlign: 'center' }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} HireMe. All rights reserved.
        </Typography>
        {/* Social Media Links - update URLs as needed */}
        <Button color="inherit" href="https://facebook.com" target="_blank">Facebook</Button>
        <Button color="inherit" href="https://twitter.com" target="_blank">Twitter</Button>
        <Button color="inherit" href="https://instagram.com" target="_blank">Instagram</Button>
      </Paper>
    </ThemeProvider>
  );
};

export default LandingPage;
