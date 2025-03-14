import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
// import { dronePlaceholder, sensorPlaceholder, softwarePlaceholder } from '../../placeholderImages';

// Import actual images from assets folder
import droneImage from '../assets/drone.jpeg'; // Changed from relative path to src/assets
import sensorImage from '../assets/sensor.png'; // Changed from relative path to src/assets
import softwareImage from '../assets/powerfulDroneSoftware.jpeg'; // Changed from relative path to src/assets


const Features = () => {
  const theme = useTheme();

  const featureData = [
    {
      title: 'Professional Drones',
      description: 'Fixed-wing drones designed for professional mapping and surveying.',
      image: droneImage, // Updated to use real image
      link: '/drones'
    },
    {
      title: 'Advanced Sensors',
      description: 'High-precision sensors for RGB, thermal, and multispectral imaging to capture the data you need for analysis.',
      image: sensorImage, // Updated to use real image
      link: '/sensors'
    },
    {
      title: 'Powerful Software',
      description: 'End-to-end software solutions for flight planning, data processing, and analytics to transform raw data into actionable insights.',
      image: softwareImage, // Updated to use real image
      link: '/software'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: theme.palette.grey[100]
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{
            fontWeight: 500,
            mb: 6,
            color: '#000000'
          }}
        >
          Our Products
        </Typography>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={4}>
            {featureData.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 30px rgba(0,0,0,0.12)'
                      },
                      height: '500px',
                      width: '100%'
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={feature.image}
                      alt={feature.title}
                      sx={{
                        objectFit: 'cover',
                        height: '240px',
                        maxHeight: '240px',
                        minHeight: '240px'
                      }}
                    />
                    <CardContent sx={{ 
                      height: '260px',
                      p: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}>
                      <div>
                        <Typography
                          gutterBottom
                          variant="h4"
                          component="h3"
                          sx={{ 
                            fontWeight: 400,
                            color: '#000000',
                            fontSize: { xs: '1.5rem', md: '1.75rem' },
                            lineHeight: 1.2,
                            height: '60px',
                            mb: 2.5,
                            display: 'flex',
                            alignItems: 'center'
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{ 
                            mb: 3,
                            height: '60px',
                            overflow: 'auto'
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </div>
                      <Button
                        component={Link}
                        to={feature.link}
                        variant="contained"
                        sx={{
                          width: 'fit-content',
                          textTransform: 'none',
                          fontWeight: 600,
                          backgroundColor: '#000000',
                          color: '#ffffff',
                          '&:hover': {
                            backgroundColor: '#333333',
                          }
                        }}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Features;
