



















import React from 'react';
import { Container, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CartPage: React.FC = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom>
          Shopping Cart
        </Typography>
        <Typography>
          Cart page - to be implemented with cart items, quantity updates, and checkout button.
        </Typography>
      </Container>
      <Footer />
    </>
  );
};

export default CartPage;

















