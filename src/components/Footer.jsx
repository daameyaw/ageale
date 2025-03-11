import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink, IconButton, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { logoWhitePlaceholder } from '../../placeholderImages';
const Footer = () => {
  const theme = useTheme();
  
  const footerLinks = [
    {
      title: 'Products',
      links: [
        { name: 'eBee X', url: '/drones/ebee-x' },
        { name: 'eBee TAC', url: '/drones/ebee-tac' },
        { name: 'eBee VISION', url: '/drones/ebee-vision' },
        { name: 'Sensors', url: '/sensors' },
        { name: 'Software', url: '/software' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Agriculture', url: '/solutions/agriculture' },
        { name: 'Defense & Security', url: '/solutions/defense' },
        { name: 'Surveying & Mapping', url: '/solutions/surveying' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', url: '/about' },
        { name: 'News', url: '/news' },
        { name: 'Careers', url: '/careers' },
        { name: 'Contact', url: '/contact' },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.primary.main,
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 4 }}>
              <Box 
                component="img" 
                src={logoWhitePlaceholder}
                alt="AgEagle Logo"
                sx={{ 
                  height: '40px', 
                  mb: 2,
                  display: 'block'
                }}
              />
              <Typography variant="body2" sx={{ mb: 2, maxWidth: '300px' }}>
                AgEagle is a leading provider of drone hardware, sensors and software for precision agriculture, construction, energy and government applications.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton 
                  component={MuiLink} 
                  href="https://www.facebook.com/ageagle" 
                  target="_blank"
                  sx={{ 
                    color: 'white',
                    '&:hover': { 
                      color: theme.palette.secondary.main 
                    }
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton 
                  component={MuiLink} 
                  href="https://twitter.com/ageagle" 
                  target="_blank"
                  sx={{ 
                    color: 'white',
                    '&:hover': { 
                      color: theme.palette.secondary.main 
                    }
                  }}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton 
                  component={MuiLink} 
                  href="https://www.linkedin.com/company/ageagle" 
                  target="_blank"
                  sx={{ 
                    color: 'white',
                    '&:hover': { 
                      color: theme.palette.secondary.main 
                    }
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton 
                  component={MuiLink} 
                  href="https://www.youtube.com/channel/UCeaUU79yI_5kB_ljZVsxcJQ" 
                  target="_blank"
                  sx={{ 
                    color: 'white',
                    '&:hover': { 
                      color: theme.palette.secondary.main 
                    }
                  }}
                >
                  <YouTubeIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          
          {footerLinks.map((column) => (
            <Grid item xs={12} sm={6} md={2} key={column.title}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                {column.title}
              </Typography>
              <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                {column.links.map((link) => (
                  <Box component="li" key={link.name} sx={{ mb: 1 }}>
                    <MuiLink
                      component={Link}
                      to={link.url}
                      sx={{
                        color: 'white',
                        textDecoration: 'none',
                        '&:hover': {
                          color: theme.palette.secondary.main,
                          textDecoration: 'none',
                        },
                      }}
                    >
                      {link.name}
                    </MuiLink>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
          
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              AgEagle Aerial Systems Inc.
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              8863 E. 34th St. N.
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Wichita, KS 67226
            </Typography>
            <MuiLink
              href="mailto:info@ageagle.com"
              sx={{
                color: 'white',
                textDecoration: 'none',
                '&:hover': {
                  color: theme.palette.secondary.main,
                  textDecoration: 'none',
                },
              }}
            >
              info@ageagle.com
            </MuiLink>
          </Grid>
        </Grid>
        
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 4 }} />
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            &copy; {new Date().getFullYear()} AgEagle Aerial Systems Inc. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, mt: { xs: 2, sm: 0 } }}>
            <MuiLink
              component={Link}
              to="/privacy"
              sx={{
                color: 'white',
                opacity: 0.8,
                textDecoration: 'none',
                '&:hover': {
                  color: theme.palette.secondary.main,
                  textDecoration: 'none',
                },
              }}
            >
              Privacy Policy
            </MuiLink>
            <MuiLink
              component={Link}
              to="/terms"
              sx={{
                color: 'white',
                opacity: 0.8,
                textDecoration: 'none',
                '&:hover': {
                  color: theme.palette.secondary.main,
                  textDecoration: 'none',
                },
              }}
            >
              Terms of Use
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
