import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
  (async () => {
    const userData = await authService.getCurrentUser();

    if (userData && userData.email) { 
      dispatch(login({ userData }));
    } else {
      dispatch(logout());
    }

    setLoading(false);
  })();
}, [dispatch]);


  if (loading) return null;

  return (
    <div className="min-h-screen flex items-center justify-between flex-col">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
