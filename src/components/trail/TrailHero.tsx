import { motion } from 'motion/react';
import heroBackground from 'figma:asset/fa4e190ebb8dac39ad3e9fb2764a0f31bbcba946.png';

export function TrailHero() {
  return (
    <section className="relative overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px]">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBackground})`,
          }}
        />
        
        {/* Dark overlay for text readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6))',
          }}
        />
        
        {/* Animated dotted line path */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-10"
          style={{ strokeDasharray: '10 10' }}
        >
          <motion.path
            d="M 0 300 Q 360 200, 720 300 T 1440 300"
            stroke="#FF6B35"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 h-full flex flex-col items-center justify-center text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 
            className="text-white"
            style={{ 
              fontSize: 'clamp(3rem, 8vw, 4.5rem)',
              fontWeight: '700',
              textShadow: '0 4px 20px rgba(255, 107, 53, 0.3)',
            }}
          >
            The Trail
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
