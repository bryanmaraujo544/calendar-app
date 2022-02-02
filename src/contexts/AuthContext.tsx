import { createContext, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { parseCookies, setCookie } from 'nookies';

interface Props {
  children: ReactNode
}

export const AuthContext = createContext({} as any);

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const { '@token': token } = parseCookies();
    if (token) {
      api.defaults.headers['Authorization'] = `Bearer ${token}`;
    }
  }, []);

  async function register({
    photoUrl,
    email,
    password
  }: { photoUrl: string, email: string, password: string }) {
    try {
      const { data } = await api.post('/auth/register', { photoUrl, email, password });
      navigate('/login');
    } catch (err) {
      window.alert('Something is wrong. Try again.');
    }
  }

  async function login({
    email,
    password
  }: { email: string, password: string }) {
    try {
      const { data } = await api.post('/auth/login', { email, password });
      const token = data.token;
      setCookie(null, '@token', token);
      api.defaults.headers['Authorization'] = `Bearer ${token}`;
      navigate('/');
    } catch (err: any) {
      window.alert('Something is wrong. Try again');
    }
  }

  return (
    <AuthContext.Provider value={{ register, login, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
