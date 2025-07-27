




const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  description: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    maxlength: 200
  },
  sku: {
    type: String,
    required: true,
    unique: true,
    uppercase: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  tags: [{
    type: String,
    trim: true
  }],
  price: {
    base: {
      type: Number,
      required: true,
      min: 0
    },
    sale: {
      type: Number,
      min: 0
    },
    currency: {
      type: String,
      default: 'USD'
    }
  },
  inventory: [{
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Store',
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
      default: 0
    },
    reserved: {
      type: Number,
      default: 0,
      min: 0
    },
    lowStockThreshold: {
      type: Number,
      default: 5
    }
  }],
  images: [{
    url: {
      type: String,
      required: true
    },
    alt: String,
    caption: String,
    isPrimary: {
      type: Boolean,
      default: false
    },
    order: {
      type: Number,
      default: 0
    }
  }],
  variants: [{
    name: String,
    options: [{
      name: String,
      value: String,
      priceAdjustment: {
        type: Number,
        default: 0
      },
      stock: [{
        store: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Store'
        },
        quantity: {
          type: Number,
          default: 0
        }
      }]
    }]
  }],
  specifications: [{
    name: String,
    value: String
  }],
  dimensions: {
    length: Number,
    width: Number,
    height: Number,
    weight: Number,
    unit: {
      type: String,
      default: 'cm'
    }
  },
  seo: {
    title: String,
    description: String,
    keywords: [String]
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  visibility: {
    type: String,
    enum: ['visible', 'catalog', 'search', 'hidden'],
    default: 'visible'
  },
  featured: {
    type: Boolean,
    default: false
  },
  giftable: {
    type: Boolean,
    default: false
  },
  seasonal: {
    type: Boolean,
    default: false
  },
  bundle: {
    type: Boolean,
    default: false
  },
  deliveryInfo: {
    isDeliverable: {
      type: Boolean,
      default: true
    },
    preparationTime: {
      type: Number,
      default: 24
    },
    deliverySlots: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'DeliverySlot'
    }]
  },
  ratings: {
    average: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    count: {
      type: Number,
      default: 0
    }
  },
  metadata: {
    type: Map,
    of: mongoose.Schema.Types.Mixed
  }
}, {
  timestamps: true
});

// Indexes
productSchema.index({ name: 'text', description: 'text', tags: 'text' });
productSchema.index({ category: 1 });
productSchema.index({ 'price.base': 1 });
productSchema.index({ featured: 1 });
productSchema.index({ status: 1 });
productSchema.index({ slug: 1 });

// Virtual for available quantity across all stores
productSchema.virtual('totalQuantity').get(function() {
  return this.inventory.reduce((total, item) => total + item.quantity, 0);
});

// Virtual for sale price or base price
productSchema.virtual('currentPrice').get(function() {
  return this.price.sale || this.price.base;
});

module.exports = mongoose.model('Product', productSchema);




