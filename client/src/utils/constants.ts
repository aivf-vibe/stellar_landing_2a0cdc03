



export const ROLES = {
  SUPER_ADMIN: 'super_admin',
  BRANCH_ADMIN: 'branch_admin',
  STORE_ADMIN: 'store_admin',
  LOCATION_MANAGER: 'location_manager',
  CUSTOMER: 'customer',
} as const;

export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
  REFUNDED: 'refunded',
} as const;

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  PAID: 'paid',
  FAILED: 'failed',
  REFUNDED: 'refunded',
} as const;

export const PRODUCT_TYPES = {
  PHYSICAL: 'physical',
  DIGITAL: 'digital',
} as const;

export const DELIVERY_SLOTS = [
  '09:00 - 11:00',
  '11:00 - 13:00',
  '13:00 - 15:00',
  '15:00 - 17:00',
  '17:00 - 19:00',
  '19:00 - 21:00',
];

export const CURRENCIES = {
  USD: { symbol: '$', name: 'US Dollar' },
  EUR: { symbol: '€', name: 'Euro' },
  GBP: { symbol: '£', name: 'British Pound' },
  INR: { symbol: '₹', name: 'Indian Rupee' },
};

export const PAYMENT_METHODS = [
  { id: 'stripe', name: 'Credit/Debit Card', icon: '💳' },
  { id: 'paypal', name: 'PayPal', icon: '🅿️' },
  { id: 'cod', name: 'Cash on Delivery', icon: '💵' },
  { id: 'razorpay', name: 'Razorpay', icon: '🇮🇳' },
];

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/flower-ecommerce',
  instagram: 'https://instagram.com/flower-ecommerce',
  twitter: 'https://twitter.com/flower-ecommerce',
  pinterest: 'https://pinterest.com/flower-ecommerce',
};

export const CONTACT_INFO = {
  phone: '+1 (555) 123-4567',
  email: 'hello@flower-ecommerce.com',
  address: '123 Flower Street, Garden City, FL 12345',
};

export const SEO_DEFAULTS = {
  title: 'Flower & Gift E-commerce Platform',
  description: 'Beautiful flowers and gifts for every occasion. Same-day delivery available.',
  keywords: 'flowers, gifts, bouquets, delivery, roses, lilies, sunflowers',
};



