






const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
};

const checkEntityAccess = (entityType, permission) => {
  return async (req, res, next) => {
    try {
      const user = await User.findById(req.user.userId);
      
      if (user.role === 'super_admin') {
        return next();
      }

      const hasAccess = user.entityAccess.some(access => 
        access.entityType === entityType && 
        access.permissions.includes(permission)
      );

      if (!hasAccess) {
        return res.status(403).json({ message: 'Insufficient permissions for this entity' });
      }

      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
};

module.exports = { auth, authorize, checkEntityAccess };






