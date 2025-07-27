


















import React from 'react';
import { Box, Typography, GridLegacy as Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const FeaturedCategories: React.FC = () => {
  const categories = [
    {
      name: "Roses",
      description: "Classic & romantic",
      image: "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?w=400",
      slug: "roses"
    },
    {
      name: "Lilies",
      description: "Elegant & sophisticated",
      image: "https://images.unsplash.com/photo-1589123053646-4e8b5493f3f1?w=400",
      slug: "lilies"
    },
    {
      name: "Sunflowers",
      description: "Bright & cheerful",
      image: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=400",
      slug: "sunflowers"
    },
    {
      name: "Mixed Bouquets",
      description: "Perfect combinations",
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400",
      slug: "mixed-bouquets"
    }
  ];

  return (
    <Box sx={{ mb: 8 }}>
      <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
        Shop by Category
      </Typography>
      
      <Grid container spacing={3}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={3} key={category.slug}>
            <Card
              sx={{
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={category.image}
                alt={category.name}
                sx={{
                  objectFit: 'cover',
                  filter: 'brightness(0.7)',
                  transition: 'filter 0.3s',
                  '&:hover': {
                    filter: 'brightness(0.5)',
                  },
                }}
              />
              <CardContent
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  color: 'white',
                  textAlign: 'center',
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  pb: 3,
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {category.name}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {category.description}
                </Typography>
                <Button
                  component={Link}
                  to={`/category/${category.slug}`}
                  variant="contained"
                  size="small"
                  sx={{
                    bgcolor: 'primary.main',
                    '&:hover': { bgcolor: 'primary.dark' },
                  }}
                >
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedCategories;
















