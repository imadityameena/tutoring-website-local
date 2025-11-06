import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ServiceForm } from './components/ServiceForm';
import { PaymentPage } from './components/PaymentPage';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import { PortfolioPage } from './components/PortfolioPage';
import { AdminPanel } from './components/AdminPanel';
import { UserDashboard } from './components/UserDashboard';
import { Toaster } from './components/ui/sonner';
import React from 'react';

interface User {
  email: string;
  isAdmin: boolean;
}

function App() {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (email: string, isAdmin: boolean) => {
    setUser({ email, isAdmin });
  };

  const handleSignup = (email: string) => {
    setUser({ email, isAdmin: false });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col">
        <Header
          isAuthenticated={!!user}
          isAdmin={user?.isAdmin}
          onLogout={handleLogout}
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServiceForm />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route
              path="/dashboard"
              element={
                user && !user.isAdmin ? <UserDashboard /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/login"
              element={
                user ? (
                  user.isAdmin ? <Navigate to="/admin" /> : <Navigate to="/dashboard" />
                ) : (
                  <LoginPage onLogin={handleLogin} />
                )
              }
            />
            <Route
              path="/signup"
              element={
                user ? <Navigate to="/dashboard" /> : <SignupPage onSignup={handleSignup} />
              }
            />
            <Route
              path="/admin"
              element={
                user?.isAdmin ? <AdminPanel /> : <Navigate to="/login" />
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
