import { motion } from 'motion/react';
import { User, Award, Crown } from 'lucide-react';

export function TrailDifficulty() {
  const trails = [
    {
      icon: User,
      title: 'The Weekend Warrior',
      courses: '10-15 courses',
      time: '3-4 weekends',
      description: 'Perfect for golfers looking to experience the highlights of Route 66',
      borderColor: 'rgba(255, 107, 53, 0.3)',
      background: 'rgba(255, 255, 255, 0.1)',
      scale: 0.95,
    },
    {
      icon: Award,
      title: 'The Silver Seeker',
      courses: '33 courses',
      time: '6-8 weeks',
      description: 'Earn your Presidential Silver Medallion with the classic Route 66 experience',
      borderColor: '#94A3B8',
      background: 'rgba(255, 255, 255, 0.15)',
      scale: 1.05,
      highlight: true,
    },
    {
      icon: Crown,
      title: 'The Gold Champion',
      courses: 'All 66 courses',
      time: '3-4 months',
      description: 'Master the entire trail and achieve the ultimate Presidential Gold Medallion',
      borderColor: '#FFD700',
      background: 'rgba(255, 215, 0, 0.1)',
      scale: 0.95,
    },
  ];

  return (
    <section 
      className="relative overflow-hidden py-16 lg:py-20"
      style={{ minHeight: '600px' }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: '#0F172A' }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.2) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 
            className="text-white mb-3"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '700',
            }}
          >
            Plan Your Adventure
          </h2>
          <p 
            className="uppercase"
            style={{ 
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.6)',
              letterSpacing: '3px',
              fontWeight: '600',
            }}
          >
            CHOOSE YOUR ROUTE
          </p>
        </motion.div>

        {/* Difficulty Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {trails.map((trail, index) => (
            <motion.div
              key={trail.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: trail.scale }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: trail.highlight ? 1.08 : 1.02,
                y: -10,
              }}
              className="relative rounded-2xl p-8 text-center backdrop-blur-sm transition-all duration-300"
              style={{
                backgroundColor: trail.background,
                border: `${trail.highlight ? '2px' : '1px'} solid ${trail.borderColor}`,
                minHeight: '380px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Icon */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                className="mb-6"
              >
                <div 
                  className="rounded-full flex items-center justify-center mx-auto"
                  style={{
                    width: trail.highlight ? '90px' : '80px',
                    height: trail.highlight ? '90px' : '80px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: `2px solid ${trail.borderColor}`,
                  }}
                >
                  <trail.icon 
                    className="text-white"
                    style={{ 
                      width: trail.highlight ? '40px' : '36px',
                      height: trail.highlight ? '40px' : '36px',
                    }}
                  />
                </div>
              </motion.div>

              {/* Title */}
              <h3 
                className="text-white mb-3"
                style={{ 
                  fontSize: trail.highlight ? '24px' : '22px',
                  fontWeight: '700',
                }}
              >
                {trail.title}
              </h3>

              {/* Courses */}
              <div 
                className="mb-2"
                style={{
                  fontSize: trail.highlight ? '20px' : '18px',
                  fontWeight: '600',
                  color: '#FF6B35',
                }}
              >
                {trail.courses}
              </div>

              {/* Time */}
              <div 
                className="mb-4"
                style={{
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.6)',
                }}
              >
                Estimated time: {trail.time}
              </div>

              {/* Description */}
              <p 
                className="text-white/80"
                style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  maxWidth: '280px',
                }}
              >
                {trail.description}
              </p>

              {/* Highlight badge */}
              {trail.highlight && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)',
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Most Popular
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
