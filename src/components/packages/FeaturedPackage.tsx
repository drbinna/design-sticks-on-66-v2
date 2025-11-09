import { motion } from 'motion/react';
import { Check, Calendar, MapPin, Award } from 'lucide-react';
import { Button } from '../ui/button';

export default function FeaturedPackage() {
  const features = [
    'Presidential Silver Medallion',
    'Official certificate & photo',
    'Premium cart included',
    '10% pro shop discount',
    'Priority tee times',
  ];

  const stats = [
    { icon: Award, label: '33 Rounds', value: '33' },
    { icon: Calendar, label: '12 Months', value: '12' },
    { icon: MapPin, label: '8 States', value: '8' },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-[#FFF7ED] overflow-hidden">
      {/* Background Route 66 map overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 L200 100' stroke='%23000' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }} />
      </div>

      <div className="max-w-[1440px] mx-auto px-4">
        {/* Most Popular Badge */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-[#DC2626] text-white text-[12px] uppercase tracking-wider rounded-full">
            ⭐ Most Popular
          </span>
        </motion.div>

        {/* Featured Package Card */}
        <motion.div
          className="max-w-[1200px] mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side: Visual */}
            <div className="relative bg-gradient-to-br from-[#C0C0C0] to-[#A8A8A8] p-12 flex items-center justify-center">
              {/* LIMITED TIME OFFER ribbon */}
              <div className="absolute top-8 -left-10 bg-[#DC2626] text-white px-12 py-2 rotate-[-45deg] shadow-lg text-[12px] uppercase tracking-wider">
                Limited Time Offer
              </div>

              {/* Glowing effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/20 to-transparent"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Silver Medallion */}
              <motion.div
                className="relative w-[300px] h-[300px] max-md:w-[200px] max-md:h-[200px]"
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#E8E8E8] via-[#C0C0C0] to-[#A8A8A8] flex items-center justify-center shadow-2xl border-8 border-white/30">
                  <div className="text-center">
                    <Award className="w-24 h-24 max-md:w-16 max-md:h-16 text-white mx-auto mb-4" />
                    <div className="text-white text-[24px] max-md:text-[18px]">SILVER</div>
                    <div className="text-white/80 text-[14px] max-md:text-[12px]">TRAIL PASS</div>
                  </div>
                </div>
              </motion.div>

              {/* Route 66 shield decoration */}
              <div className="absolute bottom-4 right-4 w-16 h-16 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                  <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" />
                </svg>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="p-12 max-md:p-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-[48px] max-md:text-[32px] text-[#0F172A] mb-2">
                  Silver Trail Pass
                </h2>
                <div className="h-1 w-24 bg-[#FF6B35] mb-4" />
                <p className="text-[24px] max-md:text-[18px] text-[#64748B] mb-6">
                  The Perfect Journey
                </p>

                {/* Price Display */}
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-[32px] max-md:text-[24px] text-[#94A3B8] line-through">$1,799</span>
                    <span className="px-3 py-1 bg-[#10B981] text-white text-[14px] rounded-full">
                      SAVE $500
                    </span>
                  </div>
                  <div className="text-[64px] max-md:text-[48px] text-[#FF6B35]">$1,299</div>
                  <p className="text-[16px] text-[#64748B]">or $108/month for 12 months</p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 py-6 border-y border-[#E5E7EB]">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <stat.icon className="w-8 h-8 text-[#FF6B35] mx-auto mb-2" />
                      <div className="text-[24px] max-md:text-[18px] text-[#0F172A]">{stat.value}</div>
                      <div className="text-[14px] text-[#64748B]">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Top Features */}
                <div className="mb-8 space-y-3">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-[16px] text-[#0F172A]">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button className="flex-1 min-w-[200px] h-[50px] bg-gradient-to-r from-[#FF6B35] to-[#DC2626] text-white hover:shadow-xl transition-all">
                    Get Started Now →
                  </Button>
                  <Button variant="outline" className="flex-1 min-w-[200px] h-[50px] border-[#FF6B35] text-[#FF6B35] hover:bg-[#FFF7ED]">
                    View Full Details
                  </Button>
                </div>

                {/* Trust Badge */}
                <div className="flex items-start gap-2 text-[#10B981]">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-[14px]">Free cancellation up to 24 hours before first round</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
