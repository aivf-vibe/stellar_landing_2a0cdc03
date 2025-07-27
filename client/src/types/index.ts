

export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  phone?: string;
  address?: Address[];
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  _id?: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault?: boolean;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  parent?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription?: string;
  price: number;
  comparePrice?: number;
  cost?: number;
  sku: string;
  stock: number;
  lowStockThreshold: number;
  images: string[];
  category: Category;
  tags: string[];
  isActive: boolean;
  isFeatured: boolean;
  isGiftable: boolean;
  isSeasonal: boolean;
  variants?: Variant[];
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Variant {
  _id?: string;
  name: string;
  price: number;
  stock: number;
  sku?: string;
  images?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  variant?: Variant;
  deliveryDate?: string;
  deliveryTime?: string;
  message?: string;
}

export interface Order {
  _id: string;
  orderNumber: string;
  user: User;
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  paymentMethod: string;
  shippingAddress: Address;
  billingAddress?: Address;
  deliveryDate: string;
  deliveryTime: string;
  deliveryInstructions?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';

export interface DeliverySlot {
  _id: string;
  date: string;
  time: string;
  available: boolean;
  maxOrders: number;
  currentOrders: number;
}

export interface Store {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  address: Address;
  phone: string;
  email: string;
  workingHours: {
    [key: string]: {
      open: string;
      close: string;
      isOpen: boolean;
    };
  };
  deliveryZones: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}


