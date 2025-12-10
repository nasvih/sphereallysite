import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import logo from '@/assets/logo.png';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
      <img src={logo} alt="SphereAlly" className="w-20 h-20 mb-8 opacity-50" />
      <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-8">Page not found</p>
      <a 
        href="/" 
        className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-sphere-navy-dark transition-all duration-300"
      >
        Return Home
      </a>
    </div>
  );
};

export default NotFound;
