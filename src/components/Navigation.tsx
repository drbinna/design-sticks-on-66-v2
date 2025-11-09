import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from 'figma:asset/055feb9cd99ef3928332541acff5383665db7aa2.png';

export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (item: string) => {
    if (item === 'The Trail') {
      navigate('/trail');
    } else if (item === 'Tee Times') {
      navigate('/tee-times');
    } else if (item === 'Trail Membership') {
      navigate('/membership');
    } else if (item === 'Tournaments') {
      navigate('/tournaments');
    } else if (item === 'Food & Beverage') {
      navigate('/food');
    } else if (item === 'Shop') {
      navigate('/shop');
    } else if (item === 'Contact') {
      navigate('/contact');
    } else {
      // For other menu items, navigate to home page
      if (location.pathname !== '/') {
        navigate('/');
      }
      // Scroll functionality can be added later for home page sections
    }
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    'The Trail',
    'Tee Times',
    'Trail Membership',
    'Tournaments',
    'Food & Beverage',
    'Shop',
    'Contact',
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-black/30 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => navigate('/')}
            className="cursor-pointer group transition-all duration-300 hover:opacity-90"
          >
            <img 
              src={logo} 
              alt="Route 66 Centennial" 
              className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
              style={{ objectFit: 'contain' }}
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className="text-white/90 hover:text-white transition-colors uppercase tracking-[0.1em] cursor-pointer"
                style={{ fontSize: '13px', fontWeight: '500' }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-white/10">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className="block w-full text-left py-3 text-white/90 hover:text-white transition-colors uppercase tracking-[0.1em] cursor-pointer"
                style={{ fontSize: '14px', fontWeight: '500' }}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
