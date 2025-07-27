


// Sample Data for Flower & Gift E-commerce Platform
// Run this script after creating the database schema

use flower_ecommerce;

// Insert sample categories
db.categories.insertMany([
  {
    name: "Roses",
    slug: "roses",
    description: "Beautiful and romantic roses for every occasion",
    image: "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?w=400",
    isActive: true,
    sortOrder: 1,
    seoTitle: "Fresh Roses - Red, Pink, White & More",
    seoDescription: "Shop premium quality roses for delivery. Same-day delivery available.",
    seoKeywords: ["roses", "red roses", "pink roses", "white roses", "romantic flowers"],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Lilies",
    slug: "lilies",
    description: "Elegant and sophisticated lilies",
    image: "https://images.unsplash.com/photo-1589123053646-4e8b5493f3f1?w=400",
    isActive: true,
    sortOrder: 2,
    seoTitle: "Fresh Lilies - Stargazer, Calla & More",
    seoDescription: "Beautiful lilies for delivery. Order online for same-day delivery.",
    seoKeywords: ["lilies", "stargazer lilies", "calla lilies", "elegant flowers"],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Sunflowers",
    slug: "sunflowers",
    description: "Bright and cheerful sunflowers",
    image: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=400",
    isActive: true,
    sortOrder: 3,
    seoTitle: "Fresh Sunflowers - Bright & Cheerful",
    seoDescription: "Order beautiful sunflowers for delivery. Same-day delivery available.",
    seoKeywords: ["sunflowers", "yellow flowers", "cheerful flowers", "summer flowers"],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Mixed Bouquets",
    slug: "mixed-bouquets",
    description: "Perfect combinations of different flowers",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400",
    isActive: true,
    sortOrder: 4,
    seoTitle: "Mixed Flower Bouquets - Beautiful Arrangements",
    seoDescription: "Shop stunning mixed flower bouquets. Perfect for any occasion.",
    seoKeywords: ["mixed bouquets", "flower arrangements", "bouquets", "mixed flowers"],
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

// Insert sample products
const rosesCategory = db.categories.findOne({ slug: "roses" })._id;
const liliesCategory = db.categories.findOne({ slug: "lilies" })._id;
const sunflowersCategory = db.categories.findOne({ slug: "sunflowers" })._id;
const mixedCategory = db.categories.findOne({ slug: "mixed-bouquets" })._id;

db.products.insertMany([
  {
    name: "Classic Red Roses Bouquet",
    slug: "classic-red-roses-bouquet",
    description: "A stunning bouquet of 12 premium red roses, perfectly arranged with fresh greenery. The ultimate romantic gesture for anniversaries, Valentine's Day, or just because.",
    shortDescription: "12 premium red roses with greenery",
    price: 49.99,
    comparePrice: 59.99,
    cost: 25.00,
    sku: "ROSE-RED-12",
    stock: 50,
    lowStockThreshold: 5,
    images: [
      "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?w=600",
      "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=600"
    ],
    category: rosesCategory,
    tags: ["roses", "red", "romantic", "anniversary", "valentines"],
    isActive: true,
    isFeatured: true,
    isGiftable: true,
    isSeasonal: false,
    seoTitle: "Classic Red Roses Bouquet - 12 Premium Roses",
    seoDescription: "Order 12 premium red roses with same-day delivery. Perfect for anniversaries and romantic occasions.",
    seoKeywords: ["red roses", "rose bouquet", "romantic flowers", "anniversary gift"],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Stargazer Lilies Bouquet",
    slug: "stargazer-lilies-bouquet",
    description: "Elegant stargazer lilies with their intoxicating fragrance and stunning pink petals. A sophisticated choice for any special occasion.",
    shortDescription: "Fragrant stargazer lilies",
    price: 39.99,
    comparePrice: 49.99,
    cost: 20.00,
    sku: "LILY-STARGAZER-6",
    stock: 30,
    lowStockThreshold: 3,
    images: [
      "https://images.unsplash.com/photo-1589123053646-4e8b5493f3f1?w=600"
    ],
    category: liliesCategory,
    tags: ["lilies", "stargazer", "fragrant", "elegant", "pink"],
    isActive: true,
    isFeatured: true,
    isGiftable: true,
    isSeasonal: false,
    seoTitle: "Stargazer Lilies Bouquet - Fragrant & Elegant",
    seoDescription: "Beautiful stargazer lilies with intoxicating fragrance. Order online for delivery.",
    seoKeywords: ["stargazer lilies", "lily bouquet", "fragrant flowers", "elegant flowers"],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Sunflower Sunshine Bouquet",
    slug: "sunflower-sunshine-bouquet",
    description: "Bright and cheerful sunflowers that bring instant happiness. Perfect for birthdays, congratulations, or just to brighten someone's day.",
    shortDescription: "Bright yellow sunflowers",
    price: 34.99,
    comparePrice: 44.99,
    cost: 18.00,
    sku: "SUNFLOWER-5",
    stock: 40,
    lowStockThreshold: 5,
    images: [
      "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=600"
    ],
    category: sunflowersCategory,
    tags: ["sunflowers", "yellow", "cheerful", "birthday", "congratulations"],
    isActive: true,
    isFeatured: true,
    isGiftable: true,
    isSeasonal: false,
    seoTitle: "Sunflower Sunshine Bouquet - Bright & Cheerful",
    seoDescription: "Order beautiful sunflowers for delivery. Perfect for birthdays and happy occasions.",
    seoKeywords: ["sunflowers", "yellow flowers", "happy flowers", "birthday flowers"],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Mixed Spring Bouquet",
    slug: "mixed-spring-bouquet",
    description: "A beautiful mix of seasonal spring flowers including tulips, daffodils, and hyacinths. Perfect for celebrating spring and new beginnings.",
    shortDescription: "Seasonal spring flower mix",
    price: 44.99,
    comparePrice: 54.99,
    cost: 22.00,
    sku: "MIXED-SPRING-15",
    stock: 25,
    lowStockThreshold: 3,
    images: [
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=600"
    ],
    category: mixedCategory,
    tags: ["mixed flowers", "spring", "seasonal", "colorful", "fresh"],
    isActive: true,
    isFeatured: true,
    isGiftable: true,
    isSeasonal: true,
    seoTitle: "Mixed Spring Bouquet - Seasonal Flowers",
    seoDescription: "Beautiful mixed spring flowers including tulips and daffodils. Same-day delivery available.",
    seoKeywords: ["spring flowers", "mixed bouquet", "seasonal flowers", "tulips"],
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

// Insert sample stores
db.stores.insertMany([
  {
    name: "Bloom & Gift Downtown",
    slug: "bloom-gift-downtown",
    description: "Our flagship store in the heart of downtown",
    address: {
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "USA"
    },
    phone: "+1 (555) 123-4567",
    email: "downtown@bloomgift.com",
    workingHours: {
      monday: { open: "09:00", close: "18:00", isOpen: true },
      tuesday: { open: "09:00", close: "18:00", isOpen: true },
      wednesday: { open: "09:00", close: "18:00", isOpen: true },
      thursday: { open: "09:00", close: "18:00", isOpen: true },
      friday: { open: "09:00", close: "18:00", isOpen: true },
      saturday: { open: "10:00", close: "16:00", isOpen: true },
      sunday: { open: "10:00", close: "16:00", isOpen: true }
    },
    deliveryZones: ["10001", "10002", "10003", "10004", "10005"],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Bloom & Gift Uptown",
    slug: "bloom-gift-uptown",
    description: "Our uptown location serving the northern areas",
    address: {
      address: "456 Park Avenue",
      city: "New York",
      state: "NY",
      zipCode: "10021",
      country: "USA"
    },
    phone: "+1 (555) 987-6543",
    email: "uptown@bloomgift.com",
    workingHours: {
      monday: { open: "09:00", close: "19:00", isOpen: true },
      tuesday: { open: "09:00", close: "19:00", isOpen: true },
      wednesday: { open: "09:00", close: "19:00", isOpen: true },
      thursday: { open: "09:00", close: "19:00", isOpen: true },
      friday: { open: "09:00", close: "19:00", isOpen: true },
      saturday: { open: "09:00", close: "17:00", isOpen: true },
      sunday: { open: "11:00", close: "17:00", isOpen: true }
    },
    deliveryZones: ["10021", "10022", "10023", "10024", "10025"],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

// Insert sample delivery slots
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const deliverySlots = [];
const timeSlots = ["09:00-11:00", "11:00-13:00", "13:00-15:00", "15:00-17:00", "17:00-19:00"];
const stores = db.stores.find().toArray();

stores.forEach(store => {
  [today, tomorrow].forEach(date => {
    timeSlots.forEach(time => {
      deliverySlots.push({
        date: date.toISOString().split('T')[0],
        time: time,
        available: true,
        maxOrders: 10,
        currentOrders: 0,
        store: store._id.toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    });
  });
});

db.deliveryslots.insertMany(deliverySlots);

// Insert sample coupons
db.coupons.insertMany([
  {
    code: "WELCOME10",
    description: "10% off your first order",
    discountType: "percentage",
    discountValue: 10,
    minOrderValue: 25,
    maxDiscount: 20,
    usageLimit: 100,
    usageCount: 0,
    validFrom: new Date(),
    validTo: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    code: "VALENTINE20",
    description: "20% off Valentine's Day flowers",
    discountType: "percentage",
    discountValue: 20,
    minOrderValue: 50,
    maxDiscount: 30,
    usageLimit: 200,
    usageCount: 0,
    validFrom: new Date(),
    validTo: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

// Insert sample pages
db.pages.insertMany([
  {
    title: "About Us",
    slug: "about",
    content: "<h2>About Bloom & Gift</h2><p>Welcome to Bloom & Gift, your trusted partner for beautiful flowers and thoughtful gifts. Since 2020, we've been delivering happiness across the city with our premium selection of fresh flowers.</p><p>Our mission is to make every occasion special with the perfect floral arrangement.</p>",
    metaTitle: "About Bloom & Gift - Premium Flower Delivery",
    metaDescription: "Learn about Bloom & Gift's commitment to quality flowers and exceptional service. Same-day delivery available.",
    metaKeywords: ["about us", "flower delivery", "premium flowers", "local florist"],
    isActive: true,
    placement: { mainMenu: true, footer: true, sidebar: false },
    sortOrder: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Contact Us",
    slug: "contact",
    content: "<h2>Contact Bloom & Gift</h2><p>Phone: +1 (555) 123-4567</p><p>Email: hello@bloomgift.com</p><p>Address: 123 Main Street, New York, NY 10001</p><p>Business Hours: Monday-Friday 9AM-6PM, Saturday-Sunday 10AM-4PM</p>",
    metaTitle: "Contact Bloom & Gift - Get in Touch",
    metaDescription: "Contact Bloom & Gift for all your flower delivery needs. Phone, email, and store location information.",
    metaKeywords: ["contact", "phone", "email", "address", "customer service"],
    isActive: true,
    placement: { mainMenu: true, footer: true, sidebar: false },
    sortOrder: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

print("Sample data inserted successfully!");
print("Database is ready for use!");


