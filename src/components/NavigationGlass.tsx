import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export function NavigationGlass() {
  const location = useLocation();
  
  const menuItems = [
    { label: 'THE TRAIL', path: '/trail' },
    { label: 'TEE TIMES', path: '/tee-times' },
    { label: 'PACKAGES', path: '/packages' },
    { label: 'TRAIL MEMBERSHIP', path: '/membership' },
    { label: 'TOURNAMENTS', path: '/tournaments' },
    { label: 'FOOD & BEVERAGE', path: '/food' },
    { label: 'SHOP', path: '/shop' },
    { label: 'CONTACT', path: '/contact' }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-5 left-5 right-5 z-50"
    >
      <div 
        className="h-[70px] rounded-[40px] flex items-center justify-between px-8"
        style={{
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        }}
      >
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-3">
          {/* Route 66 Shield */}
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path
              d="M 25 5 L 42 12 L 42 32 L 25 45 L 8 32 L 8 12 Z"
              fill="#1a1a1a"
              stroke="#1a1a1a"
              strokeWidth="1"
            />
            <text
              x="25"
              y="32"
              textAnchor="middle"
              fill="#FFFFFF"
              style={{ fontSize: '18px', fontWeight: '900' }}
            >
              66
            </text>
            <text
              x="25"
              y="18"
              textAnchor="middle"
              fill="#FFFFFF"
              style={{ fontSize: '7px', fontWeight: '700', letterSpacing: '1px' }}
            >
              ROUTE
            </text>
          </svg>
          <span 
            className="text-[#1a1a1a] tracking-wider"
            style={{ fontSize: '14px', fontWeight: '800', letterSpacing: '1.5px' }}
          >
            STICKS ON 66
          </span>
        </Link>

        {/* Center: Navigation Menu */}
        <div className="flex items-center gap-1">
          {menuItems.map((item, index) => (
            <div key={item.label} className="flex items-center">
              <Link to={item.path}>
                <motion.button
                  className="px-3 py-2 transition-colors"
                  style={{ 
                    fontSize: '11px', 
                    fontWeight: '600', 
                    letterSpacing: '1px',
                    color: location.pathname === item.path ? '#FF6B35' : '#4a4a4a',
                  }}
                  whileHover={{ scale: 1.05, color: '#1a1a1a' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              </Link>
              {index < menuItems.length - 1 && (
                <span className="text-[#d0d0d0] mx-1">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
