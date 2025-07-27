







const express = require('express');
const Product = require('../models/Product');
const { auth, authorize } = require('../middleware/auth');
const router = express.Router();

// Get all products with pagination and filtering
router.get('/', async (req, res) => {
  try {
    const {
      page = 1,
      limit = 12,
      category,
      search,
      minPrice,
      maxPrice,
      sortBy = 'createdAt',
      sortOrder = 'desc',
      featured,
      status = 'published'
    } = req.query;

    const query = { status };

    if (category) {
      query.category = category;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ];
    }

    if (minPrice || maxPrice) {
      query['price.base'] = {};
      if (minPrice) query['price.base'].$gte = Number(minPrice);
      if (maxPrice) query['price.base'].$lte = Number(maxPrice);
    }

    if (featured !== undefined) {
      query.featured = featured === 'true';
    }

    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;

    const products = await Product.find(query)
      .populate('category', 'name slug')
      .sort(sortOptions)
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Product.countDocuments(query);

    res.json({
      products,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single product by slug
router.get('/:slug', async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug })
      .populate('category', 'name slug')
      .populate('inventory.store', 'name');

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new product (Admin only)
router.post('/', auth, authorize('super_admin', 'branch_admin', 'store_admin'), async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    
    res.status(201).json({
      message: 'Product created successfully',
      product
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update product (Admin only)
router.put('/:id', auth, authorize('super_admin', 'branch_admin', 'store_admin'), async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({
      message: 'Product updated successfully',
      product
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete product (Admin only)
router.delete('/:id', auth, authorize('super_admin', 'branch_admin', 'store_admin'), async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;






