import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Paper, CssBaseline, IconButton, Card, CardContent } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import './aboutus.css';

import founders from '../../data/FOUNDERDATA.js';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
});
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    secondary: { main: '#f48fb1' },
  },
});

// Get team members data from FOUNDERDATA
const teamMembers = founders.map(founder => ({
  name: founder.name,
  role: founder.role,
  img: founder.image,
  description: founder.description
}));

const AboutUsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [hovered, setHovered] = useState(null);
  const handleThemeChange = () => setDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {/* Navigation Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            HireMe
          </Typography>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/dashboard">Dashboard</Button>
          <Button color="inherit" href="/login">Login</Button>
          <Button color="inherit" href="/about">About Us</Button>
          <IconButton sx={{ ml: 1 }} onClick={handleThemeChange} color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ minHeight: 'calc(100vh - 200px)', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 6 }}>
        {/* Top Center About Us Text */}
        <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ fontWeight: 700 }}>
          About Us
        </Typography>
        {/* Team Cards */}
        <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
          {teamMembers.map((member, idx) => (
            <Grid item xs={12} sm={6} md={3} key={member.name}>
              <Card
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                sx={{
                  width: hovered === idx ? 200 : 180,
                  textAlign: 'center',
                  borderRadius: 3,
                  border: '2px solid transparent',
                  transition: 'width 0.35s cubic-bezier(.4,2,.6,1), height 0.35s cubic-bezier(.4,2,.6,1), border-color 0.3s, box-shadow 0.3s',
                  boxShadow: 2,
                  height: hovered === idx ? 380 : 240,
                  '&:hover': {
                    borderColor: 'orange',
                    boxShadow: '0 0 16px 2px orange, 0 2px 8px rgba(0,0,0,0.10)',
                    cursor: 'pointer',
                  },
                }}
              >
                <CardContent>
                  <img
                    src={member.img}
                    alt={member.name}
                    style={{
                      width: 100,
                      height: 100,
                      objectFit: 'cover',
                      borderRadius: '50%',
                      marginBottom: 16,
                    }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: 600 }} gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" sx={{ mb: hovered === idx ? 1 : 0 }}>
                    {member.role}
                  </Typography>
                  {/* Show description only on hover */}
                  {hovered === idx && (
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 6.25, transition: 'opacity 0.3s', opacity: 1 }}>
                      {member.description}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default AboutUsPage;
