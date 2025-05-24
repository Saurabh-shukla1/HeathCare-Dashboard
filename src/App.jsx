import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './components/Dashboard';
import History from './pages/History';
import Calendar from './pages/Calendar';

// Create a placeholder component for routes not yet implemented
const PlaceholderPage = ({ title }) => (
  <div style={{ padding: '20px' }}>
    <h2>{title}</h2>
    <p>This page is under construction.</p>
  </div>
);

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#4051B5',
    },
    secondary: {
      main: '#00bcd4',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/history" element={<History />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/appointments" element={<PlaceholderPage title="Appointments" />} />
            <Route path="/statistics" element={<PlaceholderPage title="Statistics" />} />
            <Route path="/chat" element={<PlaceholderPage title="Chat" />} />
            <Route path="/support" element={<PlaceholderPage title="Support" />} />
            <Route path="/settings" element={<PlaceholderPage title="Settings " />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
