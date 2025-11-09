import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { VintageCar } from './VintageCar';

export function HeroInterrupted() {
  return (
    <section className="relative h-[700px] overflow-hidden bg-[#F5F1E8]">
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Purple gradient top-left */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 opacity-10"
        style={{
          background: 'radial-gradient(circle at top left, #8b4789 0%, transparent 70%)',
        }}
      />

      {/* Top Right Info Block */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-20 right-20 text-right"
      >
        <p className="text-[#6B7280] mb-1" style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.1em' }}>
          THE TRAIL
        </p>
        <p className="text-[#6B7280]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
          66 Championship Courses
        </p>
        <p className="text-[#6B7280]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
          2,500 Miles • 8 States
        </p>
        <p className="text-[#6B7280]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
          Chicago to Santa Monica
        </p>
      </motion.div>

      {/* Main Content Container */}
      <div className="relative max-w-[1440px] mx-auto px-20 h-full flex items-center">
        
        {/* Typography with Car Interruption */}
        <div className="relative w-full">
          
          {/* First Line: "America's" */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <h1 
              className="text-[#1a1a1a] tracking-tight leading-none"
              style={{ 
                fontSize: 'clamp(80px, 9vw, 120px)', 
                fontWeight: '800',
                marginBottom: '-10px'
              }}
            >
              America's
            </h1>
          </motion.div>

          {/* Second Line: "open" with space for car */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center"
            style={{ marginBottom: '-10px' }}
          >
            <h1 
              className="text-[#1a1a1a] tracking-tight leading-none"
              style={{ 
                fontSize: 'clamp(80px, 9vw, 120px)', 
                fontWeight: '800'
              }}
            >
              open
            </h1>
            
            {/* VINTAGE CAR INTERRUPTION - Positioned to break through text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.5,
                type: "spring",
                stiffness: 60
              }}
              className="absolute left-[280px] top-[-180px] z-10"
              style={{ width: '500px', height: '350px' }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <VintageCar />
            </motion.div>

            <h1 
              className="text-[#1a1a1a] tracking-tight leading-none ml-[420px]"
              style={{ 
                fontSize: 'clamp(80px, 9vw, 120px)', 
                fontWeight: '800'
              }}
            >
              road
            </h1>
          </motion.div>

          {/* Third Line: "meets" */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
            style={{ marginLeft: '200px', marginBottom: '-10px' }}
          >
            <h1 
              className="text-[#1a1a1a] tracking-tight leading-none"
              style={{ 
                fontSize: 'clamp(80px, 9vw, 120px)', 
                fontWeight: '800'
              }}
            >
              meets
            </h1>
          </motion.div>

          {/* Fourth Line: "championship" */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
            style={{ marginLeft: '380px', marginBottom: '-10px' }}
          >
            <h1 
              className="text-[#1a1a1a] tracking-tight leading-none"
              style={{ 
                fontSize: 'clamp(80px, 9vw, 120px)', 
                fontWeight: '800'
              }}
            >
              championship
            </h1>
          </motion.div>

          {/* Fifth Line: "golf." with gradient */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
            style={{ marginLeft: '500px' }}
          >
            <h1 
              className="tracking-tight leading-none bg-gradient-to-r from-[#FF6B35] to-[#DC143C] bg-clip-text text-transparent"
              style={{ 
                fontSize: 'clamp(80px, 9vw, 120px)', 
                fontWeight: '800'
              }}
            >
              golf.
            </h1>
          </motion.div>
        </div>
      </div>

      {/* CTA Button - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-20 left-20"
      >
        <motion.button
          className="bg-[#2a2a2a] hover:bg-[#1a1a1a] text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '0.05em' }}>
            Explore the Trail
          </span>
          <motion.div
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Decorative bottom gradient */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 opacity-5"
        style={{
          background: 'linear-gradient(to top, #FF6B35, transparent)',
        }}
      />
    </section>
  );
}
