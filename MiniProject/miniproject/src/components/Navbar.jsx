import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Stack } from '@mui/material';
import AuthContext from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1565c0' }}>
      <Toolbar sx={{ flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h6" component="div" sx={{ mb: 1 }}>
          MediaHub
        </Typography>

        <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
          <Button component={Link} to="/dashboard/posts" variant="text" sx={{ color: '#fff' }}>
            Posts
          </Button>
          <Button component={Link} to="/dashboard/users" variant="text" sx={{ color: '#fff' }}>
            Users
          </Button>
          <Button component={Link} to="/dashboard/media" variant="text" sx={{ color: '#fff' }}>
            Media
          </Button>
          <Button component={Link} to="/dashboard/profile" variant="text" sx={{ color: '#fff' }}>
            Profile
          </Button>
        </Stack>

        <Box sx={{ mt: 1 }}>
          <Button
            variant="contained"
            onClick={toggleTheme}
            sx={{
              backgroundColor: '#fff',
              color: '#333',
              '&:hover': { backgroundColor: '#eee' },
            }}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </Button>
        </Box>

        <Typography variant="body2" sx={{ mt: 1, color: '#fff' }}>
          Welcome, {currentUser?.name}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
