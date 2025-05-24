import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HistoryIcon from '@mui/icons-material/History';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventNoteIcon from '@mui/icons-material/EventNote';
import BarChartIcon from '@mui/icons-material/BarChart';
import ChatIcon from '@mui/icons-material/Chat';
import SupportIcon from '@mui/icons-material/Support';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, section: 'General', path: '/' },
    { text: 'History', icon: <HistoryIcon />, section: 'General', path: '/history' },
    { text: 'Calendar', icon: <CalendarMonthIcon />, section: 'General', path: '/calendar' },
    { text: 'Appointments', icon: <EventNoteIcon />, section: 'General', path: '/appointments' },
    { text: 'Statistics', icon: <BarChartIcon />, section: 'General', path: '/statistics' },
    { text: 'Chat', icon: <ChatIcon />, section: 'Tools', path: '/chat' },
    { text: 'Support', icon: <SupportIcon />, section: 'Tools', path: '/support' },
    { text: 'Setting', icon: <SettingsIcon />, section: 'Tools', path: '/settings' },
  ];

  return (
    <Box
      sx={{
        width: 240,
        backgroundColor: '#fff',
        height: '100vh',
        borderRight: '1px solid rgba(0, 0, 0, 0.12)',
        padding: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: '#00bcd4',
          fontWeight: 'bold',
          marginBottom: 4,
          marginLeft: 2,
          cursor: 'pointer',
        }}
        onClick={() => navigate('/')}
      >
        Healthcare.
      </Typography>

      <List>
        {menuItems.map((item, index) => (
          <React.Fragment key={item.text}>
            {index === 0 || menuItems[index - 1].section !== item.section ? (
              <Typography
                variant="caption"
                sx={{
                  color: '#666',
                  marginLeft: 2,
                  marginTop: index === 0 ? 0 : 2,
                  display: 'block',
                }}
              >
                {item.section}
              </Typography>
            ) : null}
            <ListItem
              button
              onClick={() => navigate(item.path)}
              sx={{
                borderRadius: 2,
                marginY: 0.5,
                backgroundColor: location.pathname === item.path ? 'rgba(0, 188, 212, 0.08)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(0, 188, 212, 0.08)',
                },
              }}
            >
              <ListItemIcon 
                sx={{ 
                  color: location.pathname === item.path ? '#00bcd4' : '#666'
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  '& .MuiTypography-root': {
                    color: location.pathname === item.path ? '#00bcd4' : '#666',
                    fontWeight: location.pathname === item.path ? 600 : 500,
                  },
                }}
              />
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
