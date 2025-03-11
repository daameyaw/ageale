import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { dronePlaceholder, sensorPlaceholder, softwarePlaceholder } from '../../placeholderImages';
// import { logoWhitePlaceholder } from '../../placeholderImages';


const Features = () => {
  const theme = useTheme();

  const featureData = [
    {
      title: 'Professional Drones',
      description: 'Fixed-wing drones designed for professional mapping and surveying with extended flight times and coverage capabilities.',
      image: dronePlaceholder,
      link: '/drones'
    },
    {
      title: 'Advanced Sensors',
      description: 'High-precision sensors for RGB, thermal, and multispectral imaging to capture the data you need for analysis.',
      image: sensorPlaceholder,
      link: '/sensors'
    },
    {
      title: 'Powerful Software',
      description: 'End-to-end software solutions for flight planning, data processing, and analytics to transform raw data into actionable insights.',
      image: softwarePlaceholder,
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
            fontWeight: 700,
            mb: 6,
            color: theme.palette.primary.main
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
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 30px rgba(0,0,0,0.12)'
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={feature.image}
                      alt={feature.title}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography
                        gutterBottom
                        variant="h4"
                        component="h3"
                        sx={{ fontWeight: 600, color: theme.palette.primary.main }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 3 }}
                      >
                        {feature.description}
                      </Typography>
                      <Button
                        component={Link}
                        to={feature.link}
                        variant="outlined"
                        color="primary"
                        sx={{
                          mt: 'auto',
                          textTransform: 'none',
                          fontWeight: 600
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
