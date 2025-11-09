import { motion, useInView } from 'motion/react';
import { MapPin, Route, Flag, Calendar } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ value, duration = 2 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  const numericValue = parseInt(value.replace(/,/g, ''));
  const isNumeric = !isNaN(numericValue);

  useEffect(() => {
    if (!isInView || !isNumeric) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * numericValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(numericValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, numericValue, duration, isNumeric]);

  return (
    <div ref={ref}>
      {isNumeric ? count.toLocaleString() : value}
    </div>
  );
}

// Route 66 Shield SVG Component
function Route66Shield() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="opacity-20">
      <path 
        d="M15 2L27 8V15C27 21 22 26 15 28C8 26 3 21 3 15V8L15 2Z" 
        fill="#8A8A8A" 
        stroke="#6B6B6B" 
        strokeWidth="1"
      />
      <text 
        x="15" 
        y="18" 
        fill="white" 
        fontSize="10" 
        fontWeight="700" 
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
      >
        66
      </text>
    </svg>
  );
}

// Golf Flag Decorative SVG
function GolfFlag() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="opacity-10">
      <line x1="3" y1="2" x2="3" y2="18" stroke="#8A8A8A" strokeWidth="0.5" />
      <path d="M3 2 L12 5 L3 8 Z" fill="#8A8A8A" />
    </svg>
  );
}

// Cactus Silhouette SVG
function Cactus() {
  return (
    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" className="opacity-15">
      <path 
        d="M10 10V30H14V10M6 14C6 14 6 10 10 10M18 14C18 14 18 10 14 10M6 14V20M18 14V20" 
        stroke="#8A8A8A" 
        strokeWidth="2" 
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function Stats() {
  const stats = [
    { 
      icon: Flag, 
      number: '66', 
      label: 'COURSES', 
      color: '#ff6b35',
      description: 'One for every mile marker'
    },
    { 
      icon: Route, 
      number: '2500', 
      label: 'MILES', 
      color: '#dc143c',
      description: 'Chicago to Santa Monica'
    },
    { 
      icon: MapPin, 
      number: '8', 
      label: 'STATES', 
      color: '#ffd700',
      description: 'Illinois → California'
    },
    { 
      icon: Calendar, 
      number: 'July 4, 2026', 
      label: 'LAUNCH', 
      color: '#8b4789',
      description: "America's 250th Birthday"
    },
  ];

  return (
    <section className="relative overflow-hidden" style={{ 
      backgroundColor: '#F5F1E8',
      paddingTop: '80px',
      paddingBottom: '80px'
    }}>
      {/* Subtle grain texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Route 66 Highway Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ top: '40%' }}>
        {/* Highway road base */}
        <motion.div 
          className="relative w-full"
          style={{
            height: '120px',
            background: 'linear-gradient(to bottom, transparent 0%, rgba(138, 138, 138, 0.12) 20%, rgba(138, 138, 138, 0.18) 50%, rgba(138, 138, 138, 0.12) 80%, transparent 100%)',
            transform: 'perspective(1000px) rotateX(2deg)',
          }}
        >
          {/* Animated yellow dashes */}
          <motion.div
            className="absolute top-1/2 left-0 right-0 flex gap-8 justify-start"
            style={{ 
              transform: 'translateY(-50%)',
              paddingLeft: '0px'
            }}
            animate={{
              x: [0, -80]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                style={{
                  width: '40px',
                  height: '4px',
                  backgroundColor: '#FFD700',
                  opacity: 0.3,
                  flexShrink: 0
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Dotted journey path connecting icons */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        style={{ top: '100px' }}
      >
        <motion.path
          d="M 200 140 Q 400 120, 550 140 T 900 140 Q 1050 130, 1200 140"
          stroke="#ff6b35"
          strokeWidth="2"
          strokeDasharray="8 12"
          fill="none"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </svg>

      {/* Decorative Route 66 shields */}
      <div className="absolute left-12 top-12">
        <Route66Shield />
      </div>
      <div className="absolute right-16 top-20">
        <Route66Shield />
      </div>
      <div className="absolute left-1/3 bottom-16">
        <Route66Shield />
      </div>

      {/* Decorative cacti */}
      <div className="absolute left-8 bottom-12">
        <Cactus />
      </div>
      <div className="absolute right-12 top-32">
        <Cactus />
      </div>

      {/* Decorative golf flags */}
      <div className="absolute left-1/4 top-24">
        <GolfFlag />
      </div>
      <div className="absolute right-1/4 bottom-20">
        <GolfFlag />
      </div>
      <div className="absolute left-2/3 top-16">
        <GolfFlag />
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 80
              }}
              viewport={{ once: true }}
              className="text-center group relative"
              style={{
                marginTop: index % 2 === 1 ? '20px' : '0px'
              }}
            >
              {/* Floating animated icon circle */}
              <motion.div 
                className="mb-8 inline-block relative"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
              >
                <motion.div
                  className="w-20 h-20 rounded-full flex items-center justify-center relative"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.4)',
                    border: `3px solid ${stat.color}`,
                    boxShadow: `0px 4px 12px rgba(0, 0, 0, 0.08)`
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    borderWidth: '4px',
                  }}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    scale: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.4
                    }
                  }}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 3, -3, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    <stat.icon 
                      className="w-12 h-12" 
                      style={{ 
                        color: stat.color,
                        strokeWidth: '2px'
                      }} 
                    />
                  </motion.div>

                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${stat.color}40 0%, transparent 70%)`,
                      opacity: 0
                    }}
                    whileHover={{
                      opacity: 0.6,
                      scale: 1.3
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Direction arrow indicator (subtle) */}
                {index < stats.length - 1 && (
                  <motion.div
                    className="absolute -right-16 top-1/2 transform -translate-y-1/2 hidden lg:block"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 0.2, x: 0 }}
                    transition={{ delay: index * 0.2 + 1 }}
                    viewport={{ once: true }}
                  >
                    <svg width="30" height="12" viewBox="0 0 30 12" fill="none">
                      <path 
                        d="M0 6 L26 6 M20 1 L26 6 L20 11" 
                        stroke="#ff6b35" 
                        strokeWidth="1.5" 
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                )}
              </motion.div>

              {/* Stat number with counter animation */}
              <motion.div
                className="mb-2 tracking-tight"
                style={{ 
                  fontSize: stat.label === 'LAUNCH' ? '48px' : '72px',
                  fontWeight: '900', 
                  color: stat.color,
                  fontFamily: 'Inter, Montserrat, sans-serif'
                }}
                whileHover={{ 
                  scale: 1.05,
                  textShadow: `0 0 20px ${stat.color}40`
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
              >
                <AnimatedCounter value={stat.number} duration={2.5} />
              </motion.div>

              {/* Label */}
              <motion.div 
                className="uppercase mb-3" 
                style={{ 
                  fontSize: '14px', 
                  fontWeight: '600',
                  letterSpacing: '2px',
                  color: '#6B6B6B',
                  fontFamily: 'Inter, sans-serif'
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
              >
                {stat.label}
              </motion.div>

              {/* Description (mini text) */}
              <motion.div
                className="italic"
                style={{
                  fontSize: '12px',
                  color: '#8A8A8A',
                  lineHeight: '1.5',
                  maxWidth: '200px',
                  margin: '0 auto'
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.7 }}
                viewport={{ once: true }}
              >
                {stat.description}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom decorative highway marker */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.15, y: 0 }}
        transition={{ delay: 1.5 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <div 
            style={{
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '2px',
              color: '#8A8A8A'
            }}
          >
            HISTORIC ROUTE 66
          </div>
          <div
            style={{
              fontSize: '24px',
              fontWeight: '900',
              color: '#8A8A8A',
              marginTop: '4px'
            }}
          >
            MILE MARKER
          </div>
        </div>
      </motion.div>
    </section>
  );
}
