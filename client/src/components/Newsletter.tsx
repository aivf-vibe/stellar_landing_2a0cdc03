




















import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Paper } from '@mui/material';
import { Email } from '@mui/icons-material';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: 4,
            p: 4,
            textAlign: 'center',
          }}
        >
          <Email sx={{ fontSize: 48, mb: 2 }} />
          
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Stay in Bloom
          </Typography>
          
          <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
            Subscribe to our newsletter for exclusive offers and flower care tips
          </Typography>
          
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              gap: 2,
              maxWidth: 500,
              mx: 'auto',
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <TextField
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'white',
                  borderRadius: 2,
                },
              }}
            />
            
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'grey.100',
                },
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 'bold',
              }}
            >
              Subscribe
            </Button>
          </Box>
          
          <Typography variant="body2" sx={{ mt: 2, opacity: 0.7 }}>
            No spam, just beautiful blooms and great deals!
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Newsletter;
















