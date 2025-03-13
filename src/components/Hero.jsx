import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { dronePlaceholder } from '../../placeholderImages';

const Hero = () => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        background: 'white',
        color: theme.palette.text.primary,
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, md: 0 }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2.0rem', md: '3.0rem' },
                  mb: 3,
                  lineHeight: 1.2,
                  color: theme.palette.primary.main
                }}
              >
                Drones, Sensors and Software for Automated Aerial Intelligence
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 6,
                  maxWidth: '600px',
                  color: theme.palette.text.secondary,
                  fontWeight: 400,
                  lineHeight: 1.6
                }}
              >
                Delivering high-performance flight hardware, sensors and software trusted by customers worldwide for precision mapping and data collection.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  component={Link}
                  to="/solutions"
                  variant="contained"
                  color="primary"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: '24px',
                    textTransform: 'none',
                    fontWeight: 600,
                  }}
                >
                  Explore Solutions
                </Button>
                <Button
                  component={Link}
                  to="/form"
                  variant="outlined"
                  color="primary"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: '24px',
                    textTransform: 'none',
                    fontWeight: 600,
                  }}
                >
                 ✨ Let's help you find a drone
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ position: 'relative' }}
            >
              <Box
                component="img"
                src={dronePlaceholder}
                alt="AgEagle eBee X Drone"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(45deg, rgba(${parseInt(theme.palette.primary.main.slice(1, 3), 16)},${parseInt(theme.palette.primary.main.slice(3, 5), 16)},${parseInt(theme.palette.primary.main.slice(5, 7), 16)},0.1) 0%, rgba(${parseInt(theme.palette.primary.main.slice(1, 3), 16)},${parseInt(theme.palette.primary.main.slice(3, 5), 16)},${parseInt(theme.palette.primary.main.slice(5, 7), 16)},0) 100%)`,
                  borderRadius: '12px',
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
