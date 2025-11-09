import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function StateCards() {
  const states = [
    { name: 'Arizona', courses: 9, color: '#ffd700', gradient: 'from-[#ffd700] to-[#ffb700]', link: null },
    { name: 'California', courses: 7, color: '#8b4789', gradient: 'from-[#8b4789] to-[#d4567f]', link: null },
    { name: 'Illinois', courses: 8, color: '#ff6b35', gradient: 'from-[#ff6b35] to-[#ff8c42]', link: null },
    { name: 'Kansas', courses: 5, color: '#ffd700', gradient: 'from-[#ffd700] to-[#ffb700]', link: null },
    { name: 'Missouri', courses: 10, color: '#dc143c', gradient: 'from-[#dc143c] to-[#c41e3a]', link: null },
    { name: 'New Mexico', courses: 7, color: '#dc143c', gradient: 'from-[#dc143c] to-[#b22222]', link: null },
    { name: 'Oklahoma', courses: 8, color: '#8b4789', gradient: 'from-[#8b4789] to-[#d4567f]', link: '/oklahoma-courses' },
    { name: 'Texas', courses: 12, color: '#ff6b35', gradient: 'from-[#ff6b35] to-[#ffa552]', link: null },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2
            className="mb-4 tracking-tight text-black"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '700' }}
          >
            The Trail
          </h2>
          <p className="text-black/60 tracking-[0.1em] uppercase max-w-2xl mx-auto" style={{ fontSize: '16px' }}>
            Journey across 8 states, 2,500 miles, and 66 championship courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {states.map((state, index) => {
            const CardContent = (
              <>
                <div className="p-8">
                  {/* Color Indicator Dot */}
                  <motion.div 
                    className="mb-6"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.08 + 0.3, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: state.color }}
                      animate={{
                        boxShadow: [
                          `0 0 0 0 ${state.color}60`,
                          `0 0 0 8px ${state.color}00`,
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                  </motion.div>

                  {/* State Name */}
                  <h3 className="mb-2 tracking-tight text-black" style={{ fontSize: '28px', fontWeight: '700' }}>
                    {state.name}
                  </h3>

                  {/* Course Count */}
                  <p className="mb-6 text-black/60" style={{ fontSize: '16px' }}>
                    {state.courses} {state.courses === 1 ? 'Course' : 'Courses'}
                  </p>

                  {/* View Courses Link */}
                  <div className="group/link flex items-center gap-2 text-black hover:gap-3 transition-all duration-300">
                    <span className="tracking-[0.1em] uppercase" style={{ fontSize: '13px', fontWeight: '600' }}>
                      View Courses
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${state.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </>
            );

            const cardClasses = "group relative overflow-hidden rounded-lg bg-gradient-to-br border border-black/10 hover:border-black/20 transition-all duration-300 hover:shadow-2xl";
            const cardStyle = {
              background: `linear-gradient(135deg, ${state.color}15 0%, ${state.color}05 100%)`,
              transformStyle: 'preserve-3d' as const,
            };

            return state.link ? (
              <Link key={state.name} to={state.link} className="block">
                <motion.div
                  initial={{ opacity: 0, y: 50, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 80
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    rotateY: 2,
                    transition: { duration: 0.3 }
                  }}
                  className={cardClasses}
                  style={cardStyle}
                >
                  {CardContent}
                </motion.div>
              </Link>
            ) : (
              <motion.div
                key={state.name}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 80
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
                className={cardClasses}
                style={cardStyle}
              >
                {CardContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
