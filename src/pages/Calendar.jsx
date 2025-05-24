import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper,
  IconButton,
  Card,
  CardContent,
} from '@mui/material';
import { 
  ChevronLeft as ChevronLeftIcon, 
  ChevronRight as ChevronRightIcon,
  LocalHospital as LocalHospitalIcon,
  Visibility as VisibilityIcon,
  Favorite as FavoriteIcon,
  Psychology as PsychologyIcon
} from '@mui/icons-material';
import { format, addMonths, subMonths } from 'date-fns';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const timeSlots = [
    { time: '09:00', event: 'Dentist', doctor: 'Dr. Cameron Williamson', type: 'dentist' },
    { time: '11:00', event: 'Physiotherapy', doctor: 'Dr. Kevin Djones', type: 'physio' },
    { time: '14:00', event: '', doctor: '', type: '' },
    { time: '15:00', event: '', doctor: '', type: '' },
    { time: '16:00', event: '', doctor: '', type: '' },
  ];

  const upcomingAppointments = [
    {
      day: 'Thursday',
      appointments: [
        {
          time: '11:00 AM',
          title: 'Health checkup complete',
          icon: <LocalHospitalIcon />,
          color: '#E8EAF6'
        },
        {
          time: '14:00 PM',
          title: 'Ophthalmologist',
          icon: <VisibilityIcon />,
          color: '#E8EAF6'
        }
      ]
    },
    {
      day: 'Saturday',
      appointments: [
        {
          time: '12:00 AM',
          title: 'Cardiologist',
          icon: <FavoriteIcon />,
          color: '#E8EAF6'
        },
        {
          time: '16:00 PM',
          title: 'Neurologist',
          icon: <PsychologyIcon />,
          color: '#E8EAF6'
        }
      ]
    }
  ];

  const handlePreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        {/* Calendar Section */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            {/* Calendar Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="h6" color="primary">
                  This Week
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {format(currentDate, 'MMMM yyyy')}
                </Typography>
              </Box>
              <Box>
                <IconButton onClick={handlePreviousMonth}>
                  <ChevronLeftIcon />
                </IconButton>
                <IconButton onClick={handleNextMonth}>
                  <ChevronRightIcon />
                </IconButton>
              </Box>
            </Box>

            {/* Calendar Grid */}
            <Grid container spacing={1}>
              {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day) => (
                <Grid item xs key={day}>
                  <Typography align="center" color="text.secondary">
                    {day}
                  </Typography>
                </Grid>
              ))}
              {[25, 26, 27, 28, 29, 30, 31].map((date) => (
                <Grid item xs key={date}>
                  <Box
                    sx={{
                      p: 1,
                      textAlign: 'center',
                      borderRadius: 1,
                      ...(date === 26 && {
                        backgroundColor: '#4051B5',
                        color: 'white',
                      }),
                    }}
                  >
                    <Typography>{date}</Typography>
                    {timeSlots.map((slot, index) => (
                      <Typography
                        key={index}
                        variant="caption"
                        display="block"
                        sx={{
                          mt: 0.5,
                          color: slot.event ? 'text.primary' : 'text.disabled',
                        }}
                      >
                        {slot.time}
                      </Typography>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Upcoming Schedule Section */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              The Upcoming Schedule
            </Typography>
            
            {upcomingAppointments.map((daySchedule, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  On {daySchedule.day}
                </Typography>
                
                {daySchedule.appointments.map((appointment, appIndex) => (
                  <Card 
                    key={appIndex} 
                    sx={{ 
                      mb: 2, 
                      backgroundColor: appointment.color,
                      boxShadow: 'none',
                      borderRadius: 2
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {React.cloneElement(appointment.icon, { 
                          sx: { color: '#4051B5' } 
                        })}
                        <Typography variant="body1">
                          {appointment.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        {appointment.time}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Calendar; 