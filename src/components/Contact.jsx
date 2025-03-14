import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

// Import a default background image - you can change this to any image you want
import backgroundImage from '../assets/contact-us-customer-support.webp'; // Create this file or use an existing image

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
    });
    // Show success message to user
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <Box
      sx={{
        py: 10,
        backgroundImage: `url(${backgroundImage})`, // Use the background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.4)', // Significantly reduced from 0.7 to 0.4
          zIndex: 1
        }
      }}
    >
      <Container 
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2 // Position above the overlay
        }}
      >
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 500, // Reduced from 700
                  mb: 3,
                  color: '#000000', // Changed to black
                }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: '#000000', // Changed to black
                }}
              >
                Have questions about our products or solutions? Reach out to our team and we'll be happy to help you find the right drone solution for your needs.
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', mb: 3 }}>
                  <LocationOnIcon sx={{ color: '#000000', mr: 2 }} /> {/* Changed to black */}
                  <Box>
                    <Typography variant="h6" sx={{ mb: 0.5, color: '#000000' }}> {/* Changed to black */}
                      Our Headquarters
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#000000' }}> {/* Changed to black */}
                      AgEagle Aerial Systems Inc.<br />
                      8863 E. 34th St. N.<br />
                      Wichita, KS 67226<br />
                      United States
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', mb: 3 }}>
                  <EmailIcon sx={{ color: '#000000', mr: 2 }} /> {/* Changed to black */}
                  <Box>
                    <Typography variant="h6" sx={{ mb: 0.5, color: '#000000' }}> {/* Changed to black */}
                      Email Us
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#000000' }}> {/* Changed to black */}
                      info@ageagle.com
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex' }}>
                  <PhoneIcon sx={{ color: '#000000', mr: 2 }} /> {/* Changed to black */}
                  <Box>
                    <Typography variant="h6" sx={{ mb: 0.5, color: '#000000' }}> {/* Changed to black */}
                      Call Us
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#000000' }}> {/* Changed to black */}
                      +1 (844) 840-6697
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
                  backgroundColor: 'white',
                }}
              >
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    mb: 3,
                    fontWeight: 500, // Reduced from 600
                    color: '#000000', // Changed to black
                  }}
                >
                  Send Us a Message
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={4}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{
                          mt: 2,
                          px: 4,
                          py: 1.5,
                          textTransform: 'none',
                          fontWeight: 500, // Reduced from 600
                          backgroundColor: '#000000', // Black button
                          color: 'white',
                          '&:hover': {
                            backgroundColor: '#333333',
                          }
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
