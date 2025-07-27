




import React from 'react';
import { Container, Box, Typography, Button, GridLegacy as Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import HeroSection from '../components/HeroSection';
import FeaturedCategories from '../components/FeaturedCategories';
import Newsletter from '../components/Newsletter';

const HomePage: React.FC = () => {
  // Mock data for featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Elegant Rose Bouquet",
      price: 49.99,
      originalPrice: 59.99,
      image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=400",
      rating: 4.5,
      reviews: 128,
      slug: "elegant-rose-bouquet"
    },
    {
      id: 2,
      name: "Sunflower Sunshine",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=400",
      rating: 4.8,
      reviews: 89,
      slug: "sunflower-sunshine"
    },
    {
      id: 3,
      name: "Lily Elegance",
      price: 54.99,
      image: "https://images.unsplash.com/photo-1589123053646-4e8b5493f3f1?w=400",
      rating: 4.7,
      reviews: 156,
      slug: "lily-elegance"
    },
    {
      id: 4,
      name: "Mixed Spring Bouquet",
      price: 44.99,
      originalPrice: 54.99,
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400",
      rating: 4.6,
      reviews: 203,
      slug: "mixed-spring-bouquet"
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Header />
      
      <HeroSection />
      
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Featured Categories */}
        <FeaturedCategories />
        
        {/* Featured Products */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
            Featured Flowers & Gifts
          </Typography>
          
          <Grid container spacing={4}>
            {featuredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 4 }}>
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
                borderRadius: 2,
                fontSize: '1.1rem'
              }}
            >
              View All Products
            </Button>
          </Box>
        </Box>

        {/* Why Choose Us Section */}
        <Box sx={{ mt: 8, py: 6, bgcolor: 'grey.50', borderRadius: 4 }}>
          <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
            Why Choose Our Flowers
          </Typography>
          
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Fresh & Premium
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Handpicked flowers delivered fresh from local farms
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Same Day Delivery
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Order before 2 PM for same-day delivery across the city
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  100% Satisfaction
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Love it or we'll make it right with our guarantee
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      
      <Newsletter />
      <Footer />
    </Box>
  );
};

export default HomePage;




