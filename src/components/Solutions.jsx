import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import agricimg from '../assets/agriculture.jpeg';
import defenseimg from '../assets/defense.jpeg';
import surveyimg from '../assets/survey_and_mapping .jpeg';

const Solutions = () => {
  const theme = useTheme();

  const solutionData = [
    {
      title: 'Agriculture',
      description: 'Optimize crop management with precision agriculture solutions. Monitor plant health, detect stress, and improve yields with aerial insights.',
      image: agricimg,
      link: '/solutions/agriculture'
    },
    {
      title: 'Defense & Security',
      description: 'Tactical aerial intelligence for defense and security operations. Secure, reliable, and compliant solutions for mission-critical applications.',
      image: defenseimg,
      link: '/solutions/defense'
    },
    {
      title: 'Surveying & Mapping',
      description: 'High-precision aerial surveying for construction, mining, and infrastructure projects. Generate accurate maps, 3D models, and terrain analysis.',
      image: surveyimg,
      link: '/solutions/surveying'
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
        backgroundColor: 'white'
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{
            fontWeight: 500,
            mb: 2,
            color: '#000000'
          }}
        >
          Industry Solutions
        </Typography>
        
        <Typography
          variant="h5"
          align="center"
          sx={{
            maxWidth: '800px',
            mx: 'auto',
            mb: 6,
            color: theme.palette.text.secondary
          }}
        >
          Tailored drone solutions for your specific industry needs
        </Typography>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={4}>
            {solutionData.map((solution, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: '500px',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 30px rgba(0,0,0,0.12)'
                      },
                      width: '100%'
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={solution.image}
                      alt={solution.title}
                      sx={{
                        objectFit: 'cover',
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
                            mb: 2,
                            display: 'flex',
                            alignItems: 'center'
                          }}
                        >
                          {solution.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{ 
                            mb: 3,
                            height: '80px',
                            overflow: 'auto'
                          }}
                        >
                          {solution.description}
                        </Typography>
                      </div>
                      <Button
                        component={Link}
                        to={solution.link}
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

export default Solutions;
