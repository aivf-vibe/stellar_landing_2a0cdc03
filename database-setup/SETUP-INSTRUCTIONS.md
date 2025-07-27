



# 🌸 MongoDB Setup Instructions for Flower & Gift E-commerce Platform

## 📋 Prerequisites
- MongoDB installed on your Windows 11 system
- MongoDB Compass (recommended) or Mongo Shell access
- Node.js and npm installed

## 🔧 Step 1: Start MongoDB Service on Windows

### Option A: Using Windows Services
1. Press `Windows + R`, type `services.msc`, press Enter
2. Find **MongoDB** service
3. Right-click and select **Start**
4. Ensure status shows **Running**

### Option B: Using Command Line
```bash
# Open Command Prompt as Administrator
net start MongoDB
```

## 🔗 Step 2: Connect to MongoDB

### Using MongoDB Compass (Recommended)
1. Open MongoDB Compass
2. Connection string: `mongodb://localhost:27017`
3. Click **Connect**

### Using Mongo Shell
```bash
# Open Command Prompt
mongo
```

## 🗄️ Step 3: Create Database and Schema

### Method 1: Using MongoDB Compass
1. Open MongoDB Compass
2. Click **Create Database**
3. Database name: `flower_ecommerce`
4. Collection name: `users`
5. Click **Create Database**

### Method 2: Using Mongo Shell
```bash
# Open Command Prompt
mongo
```

Then run the following commands:

```javascript
// Load and execute the schema file
load("C:/External/BTF Ecommerce/VibeStudio project/stellar_landing_2a0cdc03-dev/stellar_landing_2a0cdc03-dev/database-setup/mongodb-schema.js")

// Load and execute sample data
load("C:/External/BTF Ecommerce/VibeStudio project/stellar_landing_2a0cdc03-dev/stellar_landing_2a0cdc03-dev/database-setup/sample-data.js")
```

## ⚙️ Step 4: Configure Environment Variables

### Create `.env` file in server folder:
Create a file named `.env` in the `server` folder with the following content:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/flower_ecommerce

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d

# File Upload Configuration
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=5242880

# Email Configuration (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Frontend URL (for CORS)
CORS_ORIGIN=http://localhost:3000
```

## 🚀 Step 5: Start the Application

### Start Backend Server:
```bash
# Navigate to server folder
cd C:/External/BTF Ecommerce/VibeStudio project/stellar_landing_2a0cdc03-dev/stellar_landing_2a0cdc03-dev/server

# Install dependencies (if not done)
npm install

# Start the server
npm run dev
```

### Start Frontend Client:
```bash
# Open new Command Prompt
# Navigate to client folder
cd C:/External/BTF Ecommerce/VibeStudio project/stellar_landing_2a0cdc03-dev/stellar_landing_2a0cdc03-dev/client

# Install dependencies (if not done)
npm install

# Start the client
npm start
```

## 🔍 Step 6: Verify Database Connection

### Test Database Connection:
1. Open browser and go to: `http://localhost:5000/api/health`
2. You should see: `{"success":true,"message":"Server is running","timestamp":"..."}`

### Check Database:
1. Open MongoDB Compass
2. Navigate to `flower_ecommerce` database
3. You should see collections: users, categories, products, stores, orders, etc.

## 🛠️ Troubleshooting

### Common Issues and Solutions:

#### 1. MongoDB Connection Failed
**Error:** `MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017`
**Solution:**
```bash
# Check MongoDB service status
sc query MongoDB

# If stopped, start it
net start MongoDB

# Or restart it
net stop MongoDB
net start MongoDB
```

#### 2. Port Already in Use
**Error:** `Port 5000 is already in use`
**Solution:**
```bash
# Find process using port 5000
netstat -ano | findstr :5000

# Kill the process (replace PID with actual number)
taskkill /PID 1234 /F
```

#### 3. CORS Issues
**Error:** `CORS policy error`
**Solution:**
- Ensure `CORS_ORIGIN=http://localhost:3000` in .env file
- Restart the server after changes

#### 4. File Upload Issues
**Error:** `Upload folder not found`
**Solution:**
```bash
# Create uploads folder in server directory
mkdir server/uploads
```

## 📊 Database Structure Overview

### Collections Created:
- **users**: User accounts and profiles
- **categories**: Product categories
- **products**: Product listings
- **stores**: Physical store locations
- **orders**: Customer orders
- **deliveryslots**: Available delivery time slots
- **coupons**: Discount codes
- **pages**: CMS pages

### Sample Data Included:
- 4 product categories
- 4 sample products
- 2 store locations
- Delivery slots for next 2 days
- 2 discount coupons
- 2 CMS pages (About, Contact)

## 🔐 Default Admin Account

After running the sample data script, you can log in with:
- **Email:** admin@bloomgift.com
- **Password:** admin123

## 📞 Support

If you encounter any issues:
1. Check MongoDB service is running
2. Verify connection string in .env file
3. Ensure all dependencies are installed
4. Check server logs for specific error messages

## 🎯 Next Steps

1. **Access Admin Panel**: `http://localhost:3000/admin`
2. **Browse Products**: `http://localhost:3000/products`
3. **Test Order Flow**: Add products to cart and checkout
4. **Customize**: Modify products, categories, and store settings

## 📝 MongoDB Commands Reference

### Basic MongoDB Commands:
```bash
# Show all databases
show dbs

# Use specific database
use flower_ecommerce

# Show all collections
show collections

# Count documents in collection
db.products.countDocuments()

# Find all products
db.products.find().pretty()

# Find specific product
db.products.findOne({ slug: "classic-red-roses-bouquet" })

# Update product stock
db.products.updateOne(
  { sku: "ROSE-RED-12" },
  { $set: { stock: 75 } }
)
```

## 🎉 Success!

Once everything is running:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000`
- MongoDB: `mongodb://localhost:27017/flower_ecommerce`

Happy coding! 🌸



