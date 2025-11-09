import { motion } from 'motion/react';
import { Handshake, FileText } from 'lucide-react';
import { Button } from '../ui/button';

export default function PartnershipMedia() {
  return (
    <section className="py-20" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="max-w-[1440px] mx-auto px-6">
        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: For Partners */}
          <motion.div
            className="bg-white rounded-2xl p-10 shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#FF6B35]/10 flex items-center justify-center">
                <Handshake className="w-8 h-8 text-[#FF6B35]" />
              </div>
              <h2 className="text-[32px] text-[#0F172A]">For Partners</h2>
            </div>

            <h3 className="text-[24px] text-[#0F172A] mb-3">
              Course or Resort Owner?
            </h3>
            <p className="text-[16px] text-[#64748B] mb-6">
              Join America's First National Golf Trail
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Reach 10,000+ golfers',
                'Increased bookings',
                'Marketing support',
                'Trail recognition',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-[#10B981] mt-1">•</span>
                  <span className="text-[16px] text-[#0F172A]">{benefit}</span>
                </div>
              ))}
            </div>

            <Button className="w-full h-[52px] bg-gradient-to-r from-[#FF6B35] to-[#DC2626] text-white text-[16px] hover:shadow-xl transition-all">
              Partner With Us
            </Button>

            <p className="text-[13px] text-[#64748B] text-center mt-4">
              Email: <a href="mailto:partners@stickson66.com" className="text-[#FF6B35] hover:underline">partners@stickson66.com</a>
            </p>
          </motion.div>

          {/* Right Column: For Media */}
          <motion.div
            className="bg-white rounded-2xl p-10 shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#3B82F6]/10 flex items-center justify-center">
                <FileText className="w-8 h-8 text-[#3B82F6]" />
              </div>
              <h2 className="text-[32px] text-[#0F172A]">For Media</h2>
            </div>

            <h3 className="text-[24px] text-[#0F172A] mb-3">
              Press & Media Inquiries
            </h3>
            <p className="text-[16px] text-[#64748B] mb-6">
              Cover the Trail story
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Press kit available',
                'High-res images',
                'Interview requests',
                'Story pitches welcome',
              ].map((resource, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-[#3B82F6] mt-1">•</span>
                  <span className="text-[16px] text-[#0F172A]">{resource}</span>
                </div>
              ))}
            </div>

            <Button className="w-full h-[52px] bg-[#3B82F6] text-white text-[16px] hover:shadow-xl transition-all">
              Download Press Kit
            </Button>

            <p className="text-[13px] text-[#64748B] text-center mt-4">
              Email: <a href="mailto:media@stickson66.com" className="text-[#3B82F6] hover:underline">media@stickson66.com</a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
