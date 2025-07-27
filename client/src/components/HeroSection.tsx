















import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '60vh', md: '80vh' },
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Beautiful Flowers
              <br />
              For Every Occasion
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                opacity: 0.9,
                fontSize: { xs: '1.2rem', md: '1.5rem' },
              }}
            >
              Fresh, handpicked flowers delivered to your doorstep with love and care
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                component={Link}
                to="/products"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'primary.main',
                  '&:hover': { bgcolor: 'primary.dark' },
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderRadius: 3,
                }}
              >
                Shop Now
              </Button>
              
              <Button
                component={Link}
                to="/categories"
                variant="outlined"
                size="large"
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderRadius: 3,
                }}
              >
                Browse Categories
              </Button>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                textAlign: 'center',
              }}
            >
              <Box
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  p: 4,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <Typography variant="h4" gutterBottom>
                  Today's Special
                </Typography>
                <Typography variant="h3" color="primary.main" sx={{ fontWeight: 'bold' }}>
                  20% OFF
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  On all Valentine's Day bouquets
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;














