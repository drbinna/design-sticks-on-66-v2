import { motion } from 'motion/react';
import { Route, Trophy, Map, Medal } from 'lucide-react';

export default function PackagesHero() {
  const trustIndicators = [
    { icon: Route, text: '2,500+ Miles' },
    { icon: Trophy, text: '66 Courses' },
    { icon: Map, text: '8 States' },
    { icon: Medal, text: 'Presidential Recognition' },
  ];

  return (
    <section className="relative h-[500px] overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L60 30 L50 50 L40 30 Z' fill='%23FF6B35'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
        }} />
      </div>

      {/* Animated dotted path */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <motion.path
          d="M 0 350 Q 360 250, 720 350 T 1440 350"
          stroke="#FF6B35"
          strokeWidth="2"
          strokeDasharray="10,10"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </svg>

      {/* Golf ball silhouettes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 rounded-full bg-white/5"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p 
            className="uppercase tracking-[4px] text-[#FF6B35] mb-4"
            style={{ fontSize: '12px' }}
          >
            America's First National Golf Trail
          </p>
        </motion.div>

        <motion.h1
          className="text-white mb-8"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
            textShadow: '0 4px 24px rgba(255,107,53,0.4)',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Choose Your Adventure
        </motion.h1>

        {/* Trust Indicators */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 max-md:gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {trustIndicators.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 max-md:flex-col max-md:gap-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <item.icon 
                style={{ 
                  width: '20px',
                  height: '20px',
                  color: '#FF6B35',
                }}
              />
              <span 
                className="text-white"
                style={{ fontSize: 'clamp(13px, 2vw, 14px)' }}
              >
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
