



# 🌸 Local Setup Guide for Windows 11

## ✅ Your Setup Status
✅ **npm install completed successfully** - All dependencies installed  
✅ **MongoDB schema created** - Complete database structure ready  
✅ **Sample data prepared** - Ready to populate your database  

## 🚀 Quick Start (5 minutes)

### 1. Start MongoDB Service
```bash
# Open Command Prompt as Administrator
net start MongoDB
```

### 2. Setup Database
```bash
# Open Mongo Shell
mongo

# Run these commands in Mongo Shell:
use flower_ecommerce
load("C:/External/BTF Ecommerce/VibeStudio project/stellar_landing_2a0cdc03-dev/stellar_landing_2a0cdc03-dev/database-setup/mongodb-schema.js")
load("C:/External/BTF Ecommerce/VibeStudio project/stellar_landing_2a0cdc03-dev/stellar_landing_2a0cdc03-dev/database-setup/sample-data.js")
```

### 3. Configure Environment
```bash
# Navigate to server folder
cd C:/External/BTF Ecommerce/VibeStudio project/stellar_landing_2a0cdc03-dev/stellar_landing_2a0cdc03-dev/server

# Copy environment file
copy .env.example .env

# Edit .env file with your settings
# Just change MONGODB_URI if MongoDB is on different port
```

### 4. Start Applications

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm start
```

## 🌐 Access Points
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000
- **Health Check:** http://localhost:5000/api/health
- **MongoDB:** mongodb://localhost:27017/flower_ecommerce

## 📊 What's Included

### Database Collections:
- **users** - Customer & admin accounts
- **categories** - Product categories (Roses, Lilies, etc.)
- **products** - 4 sample products ready to sell
- **stores** - 2 physical store locations
- **orders** - Order management system
- **deliveryslots** - Time slot booking
- **coupons** - Discount codes
- **pages** - CMS pages (About, Contact)

### Sample Data Ready:
- ✅ 4 Product Categories
- ✅ 4 Sample Products with images
- ✅ 2 Store Locations
- ✅ Delivery slots for next 2 days
- ✅ 2 Active discount coupons
- ✅ CMS pages (About, Contact)

### Default Login:
- **Customer Account:** customer@example.com / password123
- **Admin Account:** admin@bloomgift.com / admin123

## 🔧 Troubleshooting

### MongoDB Issues:
```bash
# Check if MongoDB is running
sc query MongoDB

# Start MongoDB if stopped
net start MongoDB

# Check MongoDB logs
# Location: C:\Program Files\MongoDB\Server\6.0\log\mongod.log
```

### Port Issues:
```bash
# Check what's using port 5000
netstat -ano | findstr :5000

# Check what's using port 3000
netstat -ano | findstr :3000
```

### Connection Test:
```bash
# Test MongoDB connection
mongo --eval "db.runCommand('ping')"
```

## 📁 File Structure Summary
```
stellar_landing_2a0cdc03-dev/
├── client/                 # React frontend (Port 3000)
├── server/                 # Node.js backend (Port 5000)
├── database-setup/         # MongoDB setup files
│   ├── mongodb-schema.js   # Database schema
│   ├── sample-data.js      # Sample data
│   └── SETUP-INSTRUCTIONS.md
└── README.md              # Complete documentation
```

## 🎯 Next Steps After Setup
1. **Browse Products:** http://localhost:3000/products
2. **Test Checkout:** Add items to cart and complete order
3. **Admin Panel:** http://localhost:3000/admin
4. **Customize:** Add your own products and categories

## 📞 Need Help?
- **MongoDB Issues:** Check if service is running
- **Port Conflicts:** Use different ports in .env file
- **Dependencies:** Run `npm install` again if needed

**You're all set!** 🎉 Start your servers and begin exploring the platform.



