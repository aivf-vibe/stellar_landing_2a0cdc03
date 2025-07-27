


















import React from 'react';
import { Container, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CategoryPage: React.FC = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom>
          Category Products
        </Typography>
        <Typography>
          Category page - to be implemented with product filtering, sorting, and pagination.
        </Typography>
      </Container>
      <Footer />
    </>
  );
};

export default CategoryPage;
















