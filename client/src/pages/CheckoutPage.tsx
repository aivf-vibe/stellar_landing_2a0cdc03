






















import React from 'react';
import { Container, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CheckoutPage: React.FC = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom>
          Checkout
        </Typography>
        <Typography>
          Checkout page - to be implemented with delivery address, payment, and order summary.
        </Typography>
      </Container>
      <Footer />
    </>
  );
};

export default CheckoutPage;



















