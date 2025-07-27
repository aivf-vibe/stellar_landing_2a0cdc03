


import { useState, useEffect } from 'react';
import api from '../services/api';

interface AuthUser {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUser = async () => {
    try {
      const response = await api.get('/auth/me');
      setUser(response.data.data);
    } catch (error) {
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      const { token, user } = response.data.data;
      localStorage.setItem('token', token);
      setUser(user);
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.response?.data?.message || 'Login failed' };
    }
  };

  const register = async (userData: { name: string; email: string; password: string }) => {
    try {
      const response = await api.post('/auth/register', userData);
      const { token, user } = response.data.data;
      localStorage.setItem('token', token);
      setUser(user);
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.response?.data?.message || 'Registration failed' };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return { user, loading, login, register, logout };
};



