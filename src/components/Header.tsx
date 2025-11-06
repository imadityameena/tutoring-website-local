import { Link, useLocation } from 'react-router-dom';
import { BookOpen, LogIn, UserPlus, LayoutDashboard } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  isAuthenticated?: boolean;
  isAdmin?: boolean;
  onLogout?: () => void;
}

export function Header({ isAuthenticated = false, isAdmin = false, onLogout }: HeaderProps) {
  const location = useLocation();

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16 xl:px-24 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 ml-2 md:ml-4">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <span className="text-xl">EduHelp Pro</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`hover:text-blue-600 transition-colors ${
              location.pathname === '/' ? 'text-blue-600' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`hover:text-blue-600 transition-colors ${
              location.pathname === '/about' ? 'text-blue-600' : ''
            }`}
          >
            About
          </Link>
          <Link
            to="/services"
            className={`hover:text-blue-600 transition-colors ${
              location.pathname === '/services' ? 'text-blue-600' : ''
            }`}
          >
            Get Help
          </Link>
          <Link
            to="/portfolio"
            className={`hover:text-blue-600 transition-colors ${
              location.pathname === '/portfolio' ? 'text-blue-600' : ''
            }`}
          >
            Portfolio
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <>
              {isAdmin ? (
                <Link to="/admin">
                  <Button variant="outline" size="sm">
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Admin
                  </Button>
                </Link>
              ) : (
                <Link to="/dashboard">
                  <Button variant="outline" size="sm">
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
              )}
              <Button variant="outline" size="sm" onClick={onLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" size="sm">
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="sm">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
