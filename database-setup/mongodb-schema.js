

// MongoDB Schema for Flower & Gift E-commerce Platform
// Run this script in MongoDB Compass or Mongo Shell to set up the database

// 1. Create the database
use flower_ecommerce;

// 2. Create collections with validation schemas

// Users Collection
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "password", "role"],
      properties: {
        name: { bsonType: "string", description: "User's full name" },
        email: { bsonType: "string", pattern: "^.+@.+$", description: "Email address" },
        password: { bsonType: "string", description: "Hashed password" },
        role: { 
          enum: ["super_admin", "branch_admin", "store_admin", "location_manager", "customer"],
          description: "User role"
        },
        phone: { bsonType: "string" },
        avatar: { bsonType: "string" },
        addresses: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["name", "phone", "address", "city", "state", "zipCode", "country"],
            properties: {
              name: { bsonType: "string" },
              phone: { bsonType: "string" },
              address: { bsonType: "string" },
              city: { bsonType: "string" },
              state: { bsonType: "string" },
              zipCode: { bsonType: "string" },
              country: { bsonType: "string" },
              isDefault: { bsonType: "bool" }
            }
          }
        },
        preferences: {
          bsonType: "object",
          properties: {
            newsletter: { bsonType: "bool" },
            smsNotifications: { bsonType: "bool" },
            emailNotifications: { bsonType: "bool" }
          }
        },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});

// Categories Collection
db.createCollection("categories", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "slug", "isActive"],
      properties: {
        name: { bsonType: "string" },
        slug: { bsonType: "string" },
        description: { bsonType: "string" },
        image: { bsonType: "string" },
        parent: { bsonType: "string" },
        isActive: { bsonType: "bool" },
        sortOrder: { bsonType: "int" },
        seoTitle: { bsonType: "string" },
        seoDescription: { bsonType: "string" },
        seoKeywords: {
          bsonType: "array",
          items: { bsonType: "string" }
        },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});

// Products Collection
db.createCollection("products", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "slug", "description", "price", "sku", "stock", "category"],
      properties: {
        name: { bsonType: "string" },
        slug: { bsonType: "string" },
        description: { bsonType: "string" },
        shortDescription: { bsonType: "string" },
        price: { bsonType: "double" },
        comparePrice: { bsonType: "double" },
        cost: { bsonType: "double" },
        sku: { bsonType: "string" },
        stock: { bsonType: "int" },
        lowStockThreshold: { bsonType: "int" },
        images: {
          bsonType: "array",
          items: { bsonType: "string" }
        },
        category: { bsonType: "string" },
        tags: {
          bsonType: "array",
          items: { bsonType: "string" }
        },
        variants: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["name", "price", "stock"],
            properties: {
              name: { bsonType: "string" },
              price: { bsonType: "double" },
              stock: { bsonType: "int" },
              sku: { bsonType: "string" },
              images: {
                bsonType: "array",
                items: { bsonType: "string" }
              }
            }
          }
        },
        isActive: { bsonType: "bool" },
        isFeatured: { bsonType: "bool" },
        isGiftable: { bsonType: "bool" },
        isSeasonal: { bsonType: "bool" },
        seoTitle: { bsonType: "string" },
        seoDescription: { bsonType: "string" },
        seoKeywords: {
          bsonType: "array",
          items: { bsonType: "string" }
        },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});

// Stores Collection
db.createCollection("stores", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "slug", "address", "phone", "email", "isActive"],
      properties: {
        name: { bsonType: "string" },
        slug: { bsonType: "string" },
        description: { bsonType: "string" },
        address: {
          bsonType: "object",
          required: ["address", "city", "state", "zipCode", "country"],
          properties: {
            address: { bsonType: "string" },
            city: { bsonType: "string" },
            state: { bsonType: "string" },
            zipCode: { bsonType: "string" },
            country: { bsonType: "string" }
          }
        },
        phone: { bsonType: "string" },
        email: { bsonType: "string" },
        workingHours: {
          bsonType: "object",
          patternProperties: {
            "^[A-Za-z]+$": {
              bsonType: "object",
              required: ["open", "close", "isOpen"],
              properties: {
                open: { bsonType: "string" },
                close: { bsonType: "string" },
                isOpen: { bsonType: "bool" }
              }
            }
          }
        },
        deliveryZones: {
          bsonType: "array",
          items: { bsonType: "string" }
        },
        isActive: { bsonType: "bool" },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});

// Orders Collection
db.createCollection("orders", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["orderNumber", "user", "items", "subtotal", "tax", "shipping", "total", "status", "paymentStatus", "paymentMethod", "shippingAddress", "deliveryDate", "deliveryTime"],
      properties: {
        orderNumber: { bsonType: "string" },
        user: { bsonType: "string" },
        items: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["product", "quantity", "price"],
            properties: {
              product: { bsonType: "string" },
              quantity: { bsonType: "int" },
              price: { bsonType: "double" },
              variant: { bsonType: "string" },
              deliveryDate: { bsonType: "string" },
              deliveryTime: { bsonType: "string" },
              message: { bsonType: "string" }
            }
          }
        },
        subtotal: { bsonType: "double" },
        tax: { bsonType: "double" },
        shipping: { bsonType: "double" },
        discount: { bsonType: "double" },
        total: { bsonType: "double" },
        status: { 
          enum: ["pending", "confirmed", "processing", "shipped", "delivered", "cancelled", "refunded"],
          description: "Order status"
        },
        paymentStatus: { 
          enum: ["pending", "paid", "failed", "refunded"],
          description: "Payment status"
        },
        paymentMethod: { bsonType: "string" },
        shippingAddress: {
          bsonType: "object",
          required: ["name", "phone", "address", "city", "state", "zipCode", "country"],
          properties: {
            name: { bsonType: "string" },
            phone: { bsonType: "string" },
            address: { bsonType: "string" },
            city: { bsonType: "string" },
            state: { bsonType: "string" },
            zipCode: { bsonType: "string" },
            country: { bsonType: "string" }
          }
        },
        billingAddress: {
          bsonType: "object",
          properties: {
            name: { bsonType: "string" },
            phone: { bsonType: "string" },
            address: { bsonType: "string" },
            city: { bsonType: "string" },
            state: { bsonType: "string" },
            zipCode: { bsonType: "string" },
            country: { bsonType: "string" }
          }
        },
        deliveryDate: { bsonType: "string" },
        deliveryTime: { bsonType: "string" },
        deliveryInstructions: { bsonType: "string" },
        notes: { bsonType: "string" },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});

// Delivery Slots Collection
db.createCollection("deliveryslots", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["date", "time", "available", "maxOrders"],
      properties: {
        date: { bsonType: "string" },
        time: { bsonType: "string" },
        available: { bsonType: "bool" },
        maxOrders: { bsonType: "int" },
        currentOrders: { bsonType: "int" },
        store: { bsonType: "string" },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});

// Coupons Collection
db.createCollection("coupons", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["code", "discountType", "discountValue", "isActive"],
      properties: {
        code: { bsonType: "string" },
        description: { bsonType: "string" },
        discountType: { enum: ["percentage", "fixed"] },
        discountValue: { bsonType: "double" },
        minOrderValue: { bsonType: "double" },
        maxDiscount: { bsonType: "double" },
        usageLimit: { bsonType: "int" },
        usageCount: { bsonType: "int" },
        validFrom: { bsonType: "date" },
        validTo: { bsonType: "date" },
        applicableProducts: {
          bsonType: "array",
          items: { bsonType: "string" }
        },
        applicableCategories: {
          bsonType: "array",
          items: { bsonType: "string" }
        },
        isActive: { bsonType: "bool" },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});

// Pages Collection (CMS)
db.createCollection("pages", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "slug", "content", "isActive"],
      properties: {
        title: { bsonType: "string" },
        slug: { bsonType: "string" },
        content: { bsonType: "string" },
        metaTitle: { bsonType: "string" },
        metaDescription: { bsonType: "string" },
        metaKeywords: {
          bsonType: "array",
          items: { bsonType: "string" }
        },
        headerImage: { bsonType: "string" },
        backgroundImage: { bsonType: "string" },
        metaImage: { bsonType: "string" },
        isActive: { bsonType: "bool" },
        placement: {
          bsonType: "object",
          properties: {
            mainMenu: { bsonType: "bool" },
            footer: { bsonType: "bool" },
            sidebar: { bsonType: "bool" }
          }
        },
        sortOrder: { bsonType: "int" },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
});

// Create indexes for better performance
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ role: 1 });
db.categories.createIndex({ slug: 1 }, { unique: true });
db.categories.createIndex({ parent: 1 });
db.products.createIndex({ slug: 1 }, { unique: true });
db.products.createIndex({ category: 1 });
db.products.createIndex({ isActive: 1 });
db.products.createIndex({ isFeatured: 1 });
db.orders.createIndex({ orderNumber: 1 }, { unique: true });
db.orders.createIndex({ user: 1 });
db.orders.createIndex({ status: 1 });
db.orders.createIndex({ createdAt: -1 });
db.deliveryslots.createIndex({ date: 1, time: 1 });
db.deliveryslots.createIndex({ store: 1 });
db.coupons.createIndex({ code: 1 }, { unique: true });
db.pages.createIndex({ slug: 1 }, { unique: true });

print("Database schema created successfully!");
print("Next steps:");
print("1. Create .env file in server folder");
print("2. Run: npm run dev in server folder");
print("3. Run: npm start in client folder");

