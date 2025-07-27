

























import React from 'react';
import { Container, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LoginPage: React.FC = () => {
  return (
    <>
      <Header />
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom>
          Login
        </Typography>
        <Typography>
          Login page - to be implemented with email/password and social login options.
        </Typography>
      </Container>
      <Footer />
    </>
  );
};

export default LoginPage;
























