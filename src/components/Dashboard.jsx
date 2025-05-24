import React from 'react';
import { Box, Grid, Typography, Card, CardContent, IconButton } from '@mui/material';
import LungsIcon from '@mui/icons-material/Air';
import ToothIcon from '@mui/icons-material/CleaningServices';
import BoneIcon from '@mui/icons-material/FitnessCenter';
import SearchIcon from '@mui/icons-material/Search';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const activityData = [
  { name: 'Mon', value1: 40, value2: 24 },
  { name: 'Tue', value1: 30, value2: 45 },
  { name: 'Wed', value1: 20, value2: 35 },
  { name: 'Thu', value1: 50, value2: 25 },
  { name: 'Fri', value1: 35, value2: 40 },
  { name: 'Sat', value1: 45, value2: 30 },
  { name: 'Sun', value1: 25, value2: 20 },
];

const Dashboard = () => {
  return (
    <Box sx={{ p: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ mb: 4 }}>Dashboard</Typography>
      
      <Grid container spacing={3}>
        {/* Left section - 3D Model */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '500px', position: 'relative' }}>
            <CardContent>
              
              
              <Box
                component="img"
                src="/human-body-frontal-1x1.jpg"
                alt="3D Anatomy Model"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />

              {/* Health indicators */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '17%',
                  right: '20%',
                  backgroundColor: '#4051B5',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px'
                }}
              >
                Healthy Heart
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  bottom: '40%',
                  left: '20%',
                  backgroundColor: '#00BCD4',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px'
                }}
              >
                Healthy Leg
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Right section - Health Status */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {/* Health Status Cards */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>Lungs</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LungsIcon sx={{ color: '#f44336', mr: 1 }} />
                    <Typography variant="caption">Date: 26 Oct 2021</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>Teeth</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ToothIcon sx={{ color: '#00bcd4', mr: 1 }} />
                    <Typography variant="caption">Date: 26 Oct 2021</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>Bone</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <BoneIcon sx={{ color: '#ff9800', mr: 1 }} />
                    <Typography variant="caption">Date: 26 Oct 2021</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Activity Chart */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>Activity</Typography>
                  <Box sx={{ height: 200 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={activityData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="value1" fill="#00bcd4" />
                        <Bar dataKey="value2" fill="#4051B5" />
                      </BarChart>
                    </ResponsiveContainer>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard; 