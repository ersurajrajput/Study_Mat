import React, { useState } from 'react';
import { 
  Container, 
  Paper, 
  TextField, 
  Button, 
  Typography, 
  Box, 
  Alert,
  AppBar,
  Toolbar,
  IconButton,
  InputAdornment,
  CircularProgress
} from '@mui/material';
import { 
  Visibility, 
  VisibilityOff, 
  Brightness4, 
  Brightness7,
  Login as LoginIcon
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './login.css';

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

const LoginPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isForgotPasswordMode, setIsForgotPasswordMode] = useState(false);
  const [isOTPMode, setIsOTPMode] = useState(false);
  const [otp, setOtp] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleThemeChange = () => setDarkMode((prev) => !prev);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // For forgot password, only validate email
    if (isForgotPasswordMode && !isOTPMode) {
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    }

    // For OTP verification
    if (isOTPMode) {
      if (!otp) {
        newErrors.otp = 'OTP is required';
      } else if (otp.length !== 6) {
        newErrors.otp = 'OTP must be 6 digits';
      } else if (!/^\d{6}$/.test(otp)) {
        newErrors.otp = 'OTP must contain only numbers';
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    }

    // Name validation for signup
    if (!isLoginMode && !formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Confirm password validation for signup
    if (!isLoginMode) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (isForgotPasswordMode && !isOTPMode) {
        console.log('OTP sent to:', formData.email);
        alert('OTP has been sent to your email! (This is a demo)');
        setIsOTPMode(true);
        setOtp('');
      } else if (isOTPMode) {
        console.log('OTP verified:', otp);
        alert('OTP verified successfully! You can now reset your password. (This is a demo)');
        setIsOTPMode(false);
        setIsForgotPasswordMode(false);
        setOtp('');
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      } else if (isLoginMode) {
        console.log('Login successful:', formData);
        alert('Login successful! (This is a demo)');
      } else {
        console.log('Signup successful:', formData);
        alert('Signup successful! (This is a demo)');
      }
      
    } catch (error) {
      console.error('Auth error:', error);
      let action = 'Login';
      if (isForgotPasswordMode && !isOTPMode) action = 'OTP sending';
      else if (isOTPMode) action = 'OTP verification';
      else if (!isLoginMode) action = 'Signup';
      setErrors({ general: `${action} failed. Please try again.` });
    } finally {
      setIsLoading(false);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleForgotPassword = () => {
    setIsForgotPasswordMode(true);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setErrors({});
  };

  const handleBackToLogin = () => {
    setIsForgotPasswordMode(false);
    setIsOTPMode(false);
    setIsLoginMode(true);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setOtp('');
    setErrors({});
  };

  const handleOTPChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Only allow digits
    if (value.length <= 6) {
      setOtp(value);
      if (errors.otp) {
        setErrors(prev => ({ ...prev, otp: '' }));
      }
    }
  };

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
          <Button color="inherit" href="/about">About Us</Button>
          <Button color="inherit" href="/login">Login</Button>
          <IconButton sx={{ ml: 1 }} onClick={handleThemeChange} color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container component="main" maxWidth="sm" className="login-container">
        <Paper 
          elevation={3} 
          className="login-paper"
        >
          {/* Login Icon */}
          <Box className="login-icon">
            <LoginIcon />
          </Box>

          {/* Mode Toggle Buttons - Hide in forgot password mode */}
          {!isForgotPasswordMode && (
            <Box className="login-mode-toggle">
              <Button
                fullWidth
                variant={isLoginMode ? 'contained' : 'outlined'}
                onClick={() => {
                  setIsLoginMode(true);
                  setFormData({ name: '', email: '', password: '', confirmPassword: '' });
                  setErrors({});
                }}
                className="login-mode-button"
              >
                Login
              </Button>
              <Button
                fullWidth
                variant={!isLoginMode ? 'contained' : 'outlined'}
                onClick={() => {
                  setIsLoginMode(false);
                  setFormData({ name: '', email: '', password: '', confirmPassword: '' });
                  setErrors({});
                }}
                className="login-mode-button"
              >
                Sign Up
              </Button>
            </Box>
          )}

          {/* Title */}
          <Typography component="h1" variant="h4" className="login-title">
            {isOTPMode 
              ? 'Verify OTP' 
              : (isForgotPasswordMode 
                ? 'Reset Password' 
                : (isLoginMode ? 'Welcome Back' : 'Create Account'))
            }
          </Typography>

          {/* General Error Alert */}
          {errors.general && (
            <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
              {errors.general}
            </Alert>
          )}

          {/* Auth Form */}
          <Box component="form" onSubmit={handleSubmit} className="login-form">
            {/* OTP Mode */}
            {isOTPMode ? (
              <>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, textAlign: 'center' }}>
                  Enter the 6-digit OTP sent to {formData.email}
                </Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="otp"
                  label="Enter OTP"
                  name="otp"
                  autoComplete="one-time-code"
                  autoFocus
                  value={otp}
                  onChange={handleOTPChange}
                  error={!!errors.otp}
                  helperText={errors.otp}
                  className="login-textfield"
                  inputProps={{
                    maxLength: 6,
                    style: { textAlign: 'center', fontSize: '1.5rem', letterSpacing: '0.5rem' }
                  }}
                />
              </>
            ) : isForgotPasswordMode ? (
              <>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, textAlign: 'center' }}>
                  Enter your email address and we'll send you an OTP to reset your password.
                </Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={formData.email}
                  onChange={handleInputChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  className="login-textfield"
                />
              </>
            ) : (
              <>
                {/* Name field for signup only */}
                {!isLoginMode && (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Full Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    value={formData.name}
                    onChange={handleInputChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    className="login-textfield"
                  />
                )}

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus={isLoginMode}
                  value={formData.email}
                  onChange={handleInputChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  className="login-textfield"
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleInputChange}
                  error={!!errors.password}
                  helperText={errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleTogglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  className="login-textfield"
                />

                {/* Confirm Password field for signup only */}
                {!isLoginMode && (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    autoComplete="new-password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle confirm password visibility"
                            onClick={handleToggleConfirmPasswordVisibility}
                            edge="end"
                          >
                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    className="login-textfield"
                  />
                )}
              </>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoading}
              className="login-submit-button"
              startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : null}
            >
              {isLoading 
                ? (isOTPMode ? 'Verifying...' : (isForgotPasswordMode ? 'Sending...' : (isLoginMode ? 'Signing In...' : 'Creating Account...')))
                : (isOTPMode ? 'Verify OTP' : (isForgotPasswordMode ? 'Get OTP' : (isLoginMode ? 'Sign In' : 'Sign Up')))
              }
            </Button>

            {/* Additional Links */}
            {(isForgotPasswordMode || isOTPMode) ? (
              <Box className="login-links">
                <Button
                  color="primary"
                  variant="text"
                  onClick={handleBackToLogin}
                >
                  Back to Login
                </Button>
              </Box>
            ) : isLoginMode && (
              <Box className="login-links">
                <Button
                  color="primary"
                  variant="text"
                  onClick={handleForgotPassword}
                >
                  Forgot your password?
                </Button>
              </Box>
            )}
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
