import { motion, useInView } from 'motion/react';
import { Flag, Route, Map as MapIcon, Sparkles } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { LightningMcQueenCar, ChevroletBelAir, SallyPorsche, DocHudsonCar } from './CarIllustrations';

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

export function StatsPixar() {
  const stats = [
    {
      illustration: LightningMcQueenCar,
      number: '66',
      label: 'COURSES',
      description: 'One for every mile marker',
      icon: Flag,
      gradient: 'from-[#dc143c] via-[#ff6b35] to-[#ffd700]',
      bgGradient: 'from-[#fff4e6] to-[#ffe8cc]',
      numberStyle: 'chrome',
    },
    {
      illustration: ChevroletBelAir,
      number: '2500',
      label: 'MILES OF ADVENTURE',
      description: 'Chicago to Santa Monica',
      icon: Route,
      gradient: 'from-[#40E0D0] via-[#48D1CC] to-[#20B2AA]',
      bgGradient: 'from-[#e0f7fa] to-[#b2ebf2]',
      numberStyle: 'odometer',
    },
    {
      illustration: SallyPorsche,
      number: '8',
      label: 'STATES TO EXPLORE',
      description: 'Illinois → California',
      icon: MapIcon,
      gradient: 'from-[#4dabf7] via-[#228be6] to-[#1971c2]',
      bgGradient: 'from-[#e7f5ff] to-[#d0ebff]',
      numberStyle: 'vintage',
    },
    {
      illustration: DocHudsonCar,
      number: 'JULY 4, 2026',
      label: 'GRAND OPENING',
      description: "America's 250th Birthday",
      icon: Sparkles,
      gradient: 'from-[#dc143c] via-[#1e3a8a] to-[#FFFFFF]',
      bgGradient: 'from-[#1e293b] to-[#334155]',
      numberStyle: 'patriotic',
      isDark: true,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-[#1a1a1a] to-black relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear'
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at center, #ff6b35 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="tracking-tight text-white mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: '700' }}
          >
            The Journey Awaits
          </h2>
          <p className="text-white/60 tracking-[0.15em] uppercase" style={{ fontSize: '16px' }}>
            Where Americana meets the fairway
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -12,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className={`group relative overflow-hidden rounded-2xl ${
                stat.isDark ? 'bg-gradient-to-br ' + stat.bgGradient : 'bg-gradient-to-br ' + stat.bgGradient
              } p-8 transition-all duration-300 hover:shadow-2xl`}
              style={{
                boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
              }}
            >
              {/* Illustration Container */}
              <motion.div 
                className="mb-6 h-32 relative"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.3 }}
                viewport={{ once: true }}
              >
                <stat.illustration />
              </motion.div>

              {/* Icon Badge */}
              <motion.div
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className={`w-5 h-5 ${stat.isDark ? 'text-white' : 'text-black/60'}`} />
              </motion.div>

              {/* Number Display */}
              <motion.div
                className={`mb-3 tracking-tight ${
                  stat.numberStyle === 'chrome'
                    ? 'bg-gradient-to-br from-[#E8E8E8] via-[#FFFFFF] to-[#C0C0C0] bg-clip-text text-transparent'
                    : stat.numberStyle === 'odometer'
                    ? 'text-[#ff6b35]'
                    : stat.numberStyle === 'patriotic'
                    ? 'text-white'
                    : 'text-[#1971c2]'
                }`}
                style={{ 
                  fontSize: stat.number.length > 5 ? 'clamp(1.5rem, 4vw, 2rem)' : 'clamp(3rem, 6vw, 4.5rem)', 
                  fontWeight: '700',
                  textShadow: stat.numberStyle === 'chrome' 
                    ? '0 2px 10px rgba(255,215,0,0.3)' 
                    : stat.numberStyle === 'patriotic'
                    ? '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(220,20,60,0.3)'
                    : 'none',
                  letterSpacing: stat.numberStyle === 'odometer' ? '0.05em' : '-0.02em',
                }}
                whileHover={{ scale: 1.05 }}
              >
                <AnimatedCounter value={stat.number} duration={2.5} />
              </motion.div>

              {/* Label */}
              <motion.div 
                className={`mb-3 tracking-[0.2em] uppercase ${stat.isDark ? 'text-white' : 'text-black/80'}`}
                style={{ fontSize: '13px', fontWeight: '700' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.5 }}
                viewport={{ once: true }}
              >
                {stat.label}
              </motion.div>

              {/* Description */}
              <p 
                className={`${stat.isDark ? 'text-white/70' : 'text-black/60'} italic`}
                style={{ fontSize: '14px' }}
              >
                {stat.description}
              </p>

              {/* Animated gradient border on hover */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}
              />

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-2xl"
                initial={{ x: '-100%', rotate: 25 }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Route 66 Shield Decorative Element */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="relative"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffd700" />
                  <stop offset="50%" stopColor="#fff4a3" />
                  <stop offset="100%" stopColor="#ffb700" />
                </linearGradient>
              </defs>
              <path
                d="M60 10 L100 35 L100 75 L60 110 L20 75 L20 35 Z"
                fill="url(#shieldGradient)"
                stroke="#dc143c"
                strokeWidth="4"
              />
              <text
                x="60"
                y="75"
                textAnchor="middle"
                fill="#dc143c"
                style={{ fontSize: '48px', fontWeight: '700' }}
              >
                66
              </text>
              <text
                x="60"
                y="95"
                textAnchor="middle"
                fill="#1a1a1a"
                style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '2px' }}
              >
                ROUTE
              </text>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
