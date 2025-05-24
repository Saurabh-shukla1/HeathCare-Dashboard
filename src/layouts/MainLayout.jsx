import React from 'react';
import { Box, AppBar, Toolbar, IconButton, InputBase, Badge, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
import Sidebar from '../components/Sidebar';

// Styled components
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#f5f5f5',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  maxWidth: '400px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#666',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#666',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
  },
}));

const MainLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      
      <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
        <AppBar 
          position="static" 
          sx={{ 
            backgroundColor: 'white',
            boxShadow: 'none',
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
          }}
        >
          <Toolbar>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            
            <Box sx={{ flexGrow: 1 }} />
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton
                size="large"
                aria-label="show notifications"
                sx={{ color: '#666' }}
              >
                <Badge badgeContent={1} color="primary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              
              <Avatar
                sx={{
                  width: 35,
                  height: 35,
                  backgroundColor: '#00bcd4',
                }}
              />
              
              <IconButton
                size="large"
                sx={{
                  backgroundColor: '#4051B5',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#303f9f',
                  },
                }}
              >
                <AddIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: 'calc(100vh - 64px)', // Subtract AppBar height
            overflow: 'auto',
            backgroundColor: '#f5f5f5',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout; 