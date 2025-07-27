# 🌸 Flower & Gift E-commerce Platform

A comprehensive full-stack e-commerce platform for flower and gift businesses with modular CMS capabilities, multi-level user access, and white-label architecture.

## 🚀 Features

### 🛍️ E-commerce Features
- **Product Management**: Add/edit/delete products with rich media
- **Category System**: Hierarchical categories with SEO optimization
- **Shopping Cart**: Persistent cart with delivery slot selection
- **Order Management**: Complete order lifecycle tracking
- **Payment Integration**: Multiple payment gateways (Stripe, PayPal, COD)
- **Delivery Management**: Real-time slot booking and tracking

### 🏢 Multi-Level Access System
- **Super Admin**: Global platform management
- **Branch Admin**: Multi-branch management
- **Store Admin**: Individual store management
- **Location Manager**: Delivery zone management
- **Customer**: End-user shopping experience

### 🎨 CMS & Design
- **Drag & Drop Builder**: Visual page builder
- **Template System**: 10+ layout templates per section
- **WYSIWYG Editor**: Rich content editing
- **SEO Tools**: Complete SEO optimization suite
- **Multi-language**: RTL support and translations

### 📱 Frontend Features
- **Responsive Design**: Mobile-first approach
- **Modern UI**: Material-UI components
- **TypeScript**: Full type safety
- **Real-time Updates**: Live inventory and delivery slots
- **Search & Filter**: Advanced product search

## 🛠️ Tech Stack

### Frontend
- **React 19** with TypeScript
- **Material-UI v7** for components
- **React Router v6** for navigation
- **Axios** for API calls
- **React Query** for state management

### Backend
- **Node.js** with Express
- **MongoDB** with Mongoose ODM
- **JWT** authentication
- **Multer** for file uploads
- **Helmet** for security

### Development Tools
- **VS Code** workspace configuration
- **ESLint** for code quality
- **Prettier** for code formatting
- **Git** for version control

## 🚀 Quick Start

### Prerequisites
- Node.js v22.17.1+
- MongoDB v8+
- NPM v10.9.2+

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/aivf-vibe/stellar_landing_2a0cdc03.git
cd stellar_landing_2a0cdc03
```

2. **Install backend dependencies**
```bash
cd server
npm install
```

3. **Install frontend dependencies**
```bash
cd ../client
npm install
```

4. **Set up environment variables**
```bash
# In server/.env
MONGODB_URI=mongodb://localhost:27017/flower-ecommerce
JWT_SECRET=your-secret-key
PORT=5000
NODE_ENV=development
```

5. **Start the development servers**

**Backend:**
```bash
cd server
npm run dev
```

**Frontend:**
```bash
cd client
npm start
```

## 📁 Project Structure

```
flower-ecommerce-platform/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API services
│   │   ├── hooks/        # Custom hooks
│   │   ├── types/        # TypeScript types
│   │   ├── utils/        # Utility functions
│   │   └── layouts/      # Layout components
├── server/               # Node.js backend
│   ├── config/          # Configuration files
│   ├── middleware/      # Custom middleware
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   └── uploads/         # File uploads
├── .vscode/             # VS Code configuration
└── README.md
```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - User logout

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get single category
- `POST /api/categories` - Create category (Admin)
- `PUT /api/categories/:id` - Update category (Admin)
- `DELETE /api/categories/:id` - Delete category (Admin)

### Orders
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get single order
- `POST /api/orders` - Create order
- `PUT /api/orders/:id` - Update order status

## 🎯 User Roles & Permissions

| Role | Capabilities |
|------|--------------|
| **Super Admin** | Full platform access, manage everything |
| **Branch Admin** | Manage multiple stores, branch-level data |
| **Store Admin** | Manage single store, inventory, orders |
| **Location Manager** | Manage delivery zones, local inventory |
| **Customer** | Browse, purchase, track orders |

## 🎨 Customization

### Themes
- Light/Dark mode support
- Custom color schemes
- Typography customization
- Layout variations

### Templates
- Homepage templates
- Product page layouts
- Category page styles
- Checkout flows

## 📊 Analytics & SEO

### Built-in Analytics
- Sales reports
- Customer insights
- Product performance
- Delivery tracking

### SEO Features
- Meta tags management
- Sitemap generation
- Schema markup
- URL optimization
- Image optimization

## 🔐 Security Features

- JWT authentication
- Role-based access control
- Input validation
- Rate limiting
- HTTPS enforcement
- Secure file uploads

## 📞 Support

For support and questions:
- Email: hello@flower-ecommerce.com
- Documentation: [Coming Soon]
- Issues: [GitHub Issues]

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

Built with ❤️ by the Flower E-commerce Team