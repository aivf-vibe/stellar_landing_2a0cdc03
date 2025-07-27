









import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, Pinterest } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey.900',
        color: 'white',
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Bloom & Gift
            </Typography>
            <Typography variant="body2" color="grey.400">
              Delivering happiness through fresh flowers and thoughtful gifts since 2024.
              Your trusted partner for every special occasion.
            </Typography>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Shop
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/products" color="grey.400" underline="hover">
                All Products
              </Link>
              <Link href="/categories/flowers" color="grey.400" underline="hover">
                Flowers
              </Link>
              <Link href="/categories/gifts" color="grey.400" underline="hover">
                Gifts
              </Link>
              <Link href="/categories/bouquets" color="grey.400" underline="hover">
                Bouquets
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              About
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/about" color="grey.400" underline="hover">
                About Us
              </Link>
              <Link href="/contact" color="grey.400" underline="hover">
                Contact
              </Link>
              <Link href="/delivery" color="grey.400" underline="hover">
                Delivery Info
              </Link>
              <Link href="/faq" color="grey.400" underline="hover">
                FAQ
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/help" color="grey.400" underline="hover">
                Help Center
              </Link>
              <Link href="/returns" color="grey.400" underline="hover">
                Returns
              </Link>
              <Link href="/privacy" color="grey.400" underline="hover">
                Privacy Policy
              </Link>
              <Link href="/terms" color="grey.400" underline="hover">
                Terms of Service
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Connect
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton color="inherit" size="small">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" size="small">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" size="small">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" size="small">
                <Pinterest />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: '1px solid',
            borderColor: 'grey.800',
            mt: 4,
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="grey.400">
            © 2025 Bloom & Gift. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;










