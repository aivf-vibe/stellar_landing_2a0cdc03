












import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Rating,
  IconButton,
} from '@mui/material';
import { Favorite, ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  slug: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="240"
          image={product.image}
          alt={product.name}
          sx={{ objectFit: 'cover' }}
        />
        
        {discount > 0 && (
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              left: 8,
              bgcolor: 'error.main',
              color: 'white',
              px: 1,
              py: 0.5,
              borderRadius: 1,
              fontSize: '0.75rem',
              fontWeight: 'bold',
            }}
          >
            {discount}% OFF
          </Box>
        )}
        
        <IconButton
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            '&:hover': { bgcolor: 'white' },
          }}
          size="small"
        >
          <Favorite fontSize="small" />
        </IconButton>
      </Box>

      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="h3"
          sx={{
            fontSize: '1.1rem',
            fontWeight: 600,
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {product.name}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating
            value={product.rating}
            precision={0.1}
            size="small"
            readOnly
          />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ ml: 0.5 }}
          >
            ({product.reviews})
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography
            variant="h6"
            color="primary"
            sx={{ fontWeight: 600 }}
          >
            ${product.price}
          </Typography>
          
          {product.originalPrice && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textDecoration: 'line-through' }}
            >
              ${product.originalPrice}
            </Typography>
          )}
        </Box>
      </CardContent>

      <CardActions sx={{ pt: 0, px: 2, pb: 2 }}>
        <Button
          component={Link}
          to={`/product/${product.slug}`}
          variant="contained"
          size="small"
          fullWidth
          sx={{
            bgcolor: 'primary.main',
            '&:hover': { bgcolor: 'primary.dark' },
          }}
        >
          View Details
        </Button>
        
        <IconButton
          color="primary"
          size="small"
          sx={{ ml: 1 }}
        >
          <ShoppingCart fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;












