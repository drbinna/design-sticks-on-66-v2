import { motion } from 'motion/react';
import { Search, ClipboardList, Flag, Trophy } from 'lucide-react';
import { Button } from '../ui/button';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: 'Browse Events',
      description: 'Explore tournaments by date, location, and skill level',
    },
    {
      number: 2,
      icon: ClipboardList,
      title: 'Check Details',
      description: 'Review format, prizes, and entry requirements',
    },
    {
      number: 3,
      icon: Flag,
      title: 'Join the Competition',
      description: 'Contact organizers to secure your spot',
    },
    {
      number: 4,
      icon: Trophy,
      title: 'Compete & Win',
      description: 'Play your best and earn Trail points and prizes',
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[48px] max-md:text-[36px] text-[#0F172A] mb-2">
            How to Compete
          </h2>
          <p className="text-[16px] tracking-[2px] text-[#FF6B35] uppercase">
            4 SIMPLE STEPS
          </p>
        </motion.div>

        {/* 4-Step Process */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-[40px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#DC2626] max-lg:hidden" 
            style={{
              backgroundImage: 'repeating-linear-gradient(to right, #FF6B35 0, #FF6B35 10px, transparent 10px, transparent 20px)',
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {/* Icon Above Number */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#FF6B35] flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-[#FF6B35]" />
                  </div>
                </div>

                {/* Number Badge */}
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#DC2626] flex items-center justify-center shadow-xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="text-[32px] text-white">{step.number}</span>
                </motion.div>

                {/* Title */}
                <h3 className="text-[20px] text-[#0F172A] mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[16px] text-[#64748B] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-[18px] text-[#0F172A] mb-4">
            Ready to compete? Explore upcoming events
          </p>
          <Button className="h-[52px] px-10 bg-gradient-to-r from-[#FF6B35] to-[#DC2626] text-white text-[16px] hover:shadow-xl transition-all">
            View All Tournaments
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
