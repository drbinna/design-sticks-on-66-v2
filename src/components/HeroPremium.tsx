import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import carImage from 'figma:asset/685d4ec589bd2aa0754a2ac62cb5cf240afb3c11.png';

export function HeroPremium() {
  return (
    <section 
      className="relative overflow-hidden"
      style={{
        width: '100%',
        height: '700px',
        background: '#F5F1E8',
      }}
    >
      {/* Grain texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.05) 100%)',
        }}
      />

      {/* Background - Layer 1 */}
      {/* Route 66 Highway - Layer 2 */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <svg 
          className="absolute w-full" 
          viewBox="0 0 1440 700" 
          preserveAspectRatio="xMidYMid slice"
          style={{ opacity: 0.12 }}
        >
          {/* Asphalt road - horizontal through middle */}
          <path
            d="M 0 320 Q 360 310 720 320 Q 1080 330 1440 320 L 1440 420 Q 1080 430 720 420 Q 360 410 0 420 Z"
            fill="#4a4a4a"
          />
          {/* Yellow center dashes */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <rect x="100" y="365" width="80" height="4" fill="#FFD700" rx="2" />
            <rect x="240" y="362" width="80" height="4" fill="#FFD700" rx="2" />
            <rect x="380" y="365" width="80" height="4" fill="#FFD700" rx="2" />
            <rect x="520" y="368" width="80" height="4" fill="#FFD700" rx="2" />
            <rect x="660" y="367" width="80" height="4" fill="#FFD700" rx="2" />
            <rect x="800" y="365" width="80" height="4" fill="#FFD700" rx="2" />
            <rect x="940" y="368" width="80" height="4" fill="#FFD700" rx="2" />
            <rect x="1080" y="365" width="80" height="4" fill="#FFD700" rx="2" />
            <rect x="1220" y="363" width="80" height="4" fill="#FFD700" rx="2" />
          </motion.g>
        </svg>

        {/* Desert silhouettes - very subtle */}
        <div className="absolute bottom-28 left-20" style={{ opacity: 0.08 }}>
          <svg width="40" height="70" viewBox="0 0 40 70">
            <rect x="16" y="20" width="8" height="50" fill="#5A7247" rx="4" />
            <rect x="7" y="35" width="5" height="18" fill="#5A7247" rx="2.5" transform="rotate(-20 9.5 44)" />
            <rect x="28" y="40" width="5" height="18" fill="#5A7247" rx="2.5" transform="rotate(20 30.5 49)" />
          </svg>
        </div>

        {/* Route 66 Shield - on highway */}
        <div className="absolute" style={{ left: '50%', top: '460px', transform: 'translateX(-50%)', opacity: 0.25, zIndex: 1 }}>
          <svg width="50" height="50" viewBox="0 0 50 50">
            <path
              d="M 25 3 L 42 10 L 42 32 L 25 45 L 8 32 L 8 10 Z"
              fill="#FFFFFF"
              stroke="#1a1a1a"
              strokeWidth="2"
            />
            <text
              x="25"
              y="32"
              textAnchor="middle"
              fill="#1a1a1a"
              style={{ fontSize: '18px', fontWeight: '900' }}
            >
              66
            </text>
            <text
              x="25"
              y="17"
              textAnchor="middle"
              fill="#1a1a1a"
              style={{ fontSize: '7px', fontWeight: '700', letterSpacing: '0.5px' }}
            >
              ROUTE
            </text>
          </svg>
        </div>
      </div>

      {/* Info Box - Layer 10 - Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute"
        style={{ 
          top: '110px',
          right: '80px',
          zIndex: 10 
        }}
      >
        <div 
          className="p-6 rounded-xl text-right"
          style={{
            background: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 107, 53, 0.2)',
          }}
        >
          <p 
            className="text-[#6B7280] mb-2"
            style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '2px' }}
          >
            THE TRAIL
          </p>
          <p className="text-[#4a4a4a]" style={{ fontSize: '14px', fontWeight: '500', lineHeight: '1.6' }}>
            66 Championship Courses
          </p>
          <p className="text-[#4a4a4a]" style={{ fontSize: '14px', fontWeight: '500', lineHeight: '1.6' }}>
            2,500 Miles • 8 States
          </p>
          <p className="text-[#4a4a4a]" style={{ fontSize: '14px', fontWeight: '500', lineHeight: '1.6' }}>
            Chicago to Santa Monica
          </p>
        </div>
      </motion.div>

      {/* MAIN COMPOSITION - All text boxes and car positioned absolutely */}
      <div className="absolute inset-0" style={{ maxWidth: '1440px', margin: '0 auto' }}>
        
        {/* Text Box 1: "America's" - Layer 3 */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="absolute text-[#1a1a1a]"
          style={{
            left: '80px',
            top: '150px',
            fontSize: '110px',
            fontWeight: '900',
            lineHeight: '1',
            letterSpacing: '-2px',
            zIndex: 3,
          }}
        >
          America's
        </motion.h1>

        {/* Text Box 2: "open" - Layer 4 */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute text-[#1a1a1a]"
          style={{
            left: '80px',
            top: '280px',
            fontSize: '110px',
            fontWeight: '900',
            lineHeight: '1',
            letterSpacing: '-2px',
            zIndex: 4,
          }}
        >
          open
        </motion.h1>

        {/* Car Image - Layer 5 - CENTERED, transparent background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            delay: 0.4,
            type: "spring",
            stiffness: 80
          }}
          className="absolute"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%) rotate(-2deg)',
            transformOrigin: 'center center',
            width: '500px',
            zIndex: 5,
          }}
          whileHover={{ 
            scale: 1.03,
            y: -5,
            rotate: -1,
            transition: { duration: 0.3 }
          }}
        >
          {/* Atmospheric glow behind car */}
          <div 
            className="absolute inset-0 -z-10"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255, 107, 53, 0.12) 0%, transparent 70%)',
              transform: 'scale(1.4)',
              filter: 'blur(50px)',
            }}
          />
          
          {/* Ground contact shadow */}
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10"
            style={{
              width: '85%',
              height: '25px',
              background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.25) 0%, transparent 70%)',
              filter: 'blur(12px)',
              transform: 'translateY(25px) translateX(-50%)',
            }}
          />
          
          {/* Car image with drop shadow */}
          <img 
            src={carImage} 
            alt="1957 Chevrolet Bel Air"
            className="w-full h-auto"
            style={{
              filter: 'drop-shadow(0px 30px 50px rgba(0, 0, 0, 0.2))',
            }}
          />
        </motion.div>

        {/* Text Box 3: "road." - Layer 6 */}
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute text-[#1a1a1a]"
          style={{
            left: '1100px',
            top: '180px',
            fontSize: '110px',
            fontWeight: '900',
            lineHeight: '1',
            letterSpacing: '-2px',
            zIndex: 6,
          }}
        >
          road.
        </motion.h1>

        {/* Text Box 4: "meets" - Layer 7 */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute text-[#1a1a1a]"
          style={{
            left: '280px',
            top: '410px',
            fontSize: '110px',
            fontWeight: '900',
            lineHeight: '1',
            letterSpacing: '-2px',
            zIndex: 7,
          }}
        >
          meets
        </motion.h1>

        {/* Text Box 5: "championship" - Layer 8 - COMPLETE WORD */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute text-[#1a1a1a]"
          style={{
            left: '480px',
            top: '540px',
            fontSize: '110px',
            fontWeight: '900',
            lineHeight: '1',
            letterSpacing: '-2px',
            zIndex: 8,
          }}
        >
          championship
        </motion.h1>

        {/* Text Box 6: "golf." with gradient - Layer 9 - COMPLETE with period */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute"
          style={{
            left: '600px',
            top: '580px',
            fontSize: '110px',
            fontWeight: '900',
            lineHeight: '1',
            letterSpacing: '-2px',
            background: 'linear-gradient(to right, #FF6B35, #DC143C)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            zIndex: 9,
          }}
        >
          golf.
        </motion.h1>
      </div>

      {/* CTA Button - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute"
        style={{
          bottom: '80px',
          left: '80px',
          zIndex: 10,
        }}
      >
        <motion.button
          className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#1a1a1a] text-white hover:bg-[#FF6B35] transition-all duration-300"
          style={{
            fontSize: '14px',
            fontWeight: '600',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Explore the Trail</span>
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}
