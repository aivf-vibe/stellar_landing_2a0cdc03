




























import React from 'react';
import { Container, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RegisterPage: React.FC = () => {
  return (
    <>
      <Header />
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom>
          Register
        </Typography>
        <Typography>
          Registration page - to be implemented with user registration form.
        </Typography>
      </Container>
      <Footer />
    </>
  );
};

export default RegisterPage;



























