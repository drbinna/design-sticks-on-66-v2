import { motion } from 'motion/react';
import { Flag, MapPin } from 'lucide-react';

export function Anniversary() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* America 250 */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 60 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ 
              scale: 1.02,
              rotateY: 2,
              transition: { duration: 0.3 }
            }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#dc143c] to-[#b22222] p-8 text-white"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="relative z-10">
              <div className="mb-4">
                <Flag className="w-10 h-10 text-white/90" />
              </div>
              <div className="mb-3 tracking-tight" style={{ fontSize: 'clamp(3rem, 6vw, 4rem)', fontWeight: '700' }}>
                250
              </div>
              <h3 className="mb-3 tracking-tight" style={{ fontSize: '24px', fontWeight: '700' }}>
                Years of America
              </h3>
              <p className="text-white/90 leading-relaxed max-w-md" style={{ fontSize: '14px' }}>
                Celebrating America's Semiquincentennial (250th anniversary) with a golf experience that honors our nation's heritage and the spirit of adventure that built this country.
              </p>
            </div>
            {/* Decorative Pattern */}
            <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <Flag className="w-full h-full" />
              </div>
            </div>
          </motion.div>

          {/* Route 66 Centennial */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 60 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ 
              scale: 1.02,
              rotateY: -2,
              transition: { duration: 0.3 }
            }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] p-8 text-white"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="relative z-10">
              <div className="mb-4">
                <MapPin className="w-10 h-10 text-white/90" />
              </div>
              <div className="mb-3 tracking-tight" style={{ fontSize: 'clamp(3rem, 6vw, 4rem)', fontWeight: '700' }}>
                100
              </div>
              <h3 className="mb-3 tracking-tight" style={{ fontSize: '24px', fontWeight: '700' }}>
                Years of Route 66
              </h3>
              <p className="text-white/90 leading-relaxed max-w-md" style={{ fontSize: '14px' }}>
                Commemorating the centennial of America's Main Street - the legendary highway that connected Chicago to Santa Monica and captured the imagination of travelers for generations.
              </p>
            </div>
            {/* Route 66 Shield */}
            <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 20 L180 60 L180 140 L100 180 L20 140 L20 60 Z"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <text
                    x="100"
                    y="110"
                    textAnchor="middle"
                    fill="currentColor"
                    style={{ fontSize: '60px', fontWeight: '700' }}
                  >
                    66
                  </text>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
