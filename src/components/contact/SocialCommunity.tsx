import { motion } from 'motion/react';
import { useState } from 'react';
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function SocialCommunity() {
  const [email, setEmail] = useState('');

  const socials = [
    { icon: Facebook, name: 'Facebook', followers: '8.5K', color: '#1877F2' },
    { icon: Instagram, name: 'Instagram', followers: '12.3K', color: '#E4405F' },
    { icon: Twitter, name: 'Twitter/X', followers: '5.2K', color: '#1DA1F2' },
    { icon: Youtube, name: 'YouTube', followers: '3.1K', color: '#FF0000' },
    { icon: Linkedin, name: 'LinkedIn', followers: '2.8K', color: '#0A66C2' },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #1E293B, #0F172A)',
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[48px] max-md:text-[36px] text-white mb-2">
            Join the Trail Community
          </h2>
          <p className="text-[14px] tracking-[2px] text-[#FF6B35] uppercase">
            FOLLOW OUR JOURNEY
          </p>
        </motion.div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-6 mb-12 max-md:grid max-md:grid-cols-3 max-md:gap-4">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href="#"
              className="flex flex-col items-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center bg-white/10 border border-white/20 group-hover:bg-white transition-all mb-3"
              >
                <social.icon 
                  className="w-10 h-10 text-white group-hover:text-[#0F172A] transition-colors"
                  style={{ color: 'white' }}
                />
              </div>
              <span className="text-[13px] text-white mb-1">{social.name}</span>
              <span className="text-[12px] text-[#94A3B8]">{social.followers}</span>
            </motion.a>
          ))}
        </div>

        {/* Community Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-[900px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { value: '12,500+', label: 'Trail members' },
            { value: '2,500+', label: 'rounds played monthly' },
            { value: '500+', label: 'medallions awarded' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-[40px] text-[#FF6B35] mb-2">{stat.value}</div>
              <div className="text-[14px] text-[#94A3B8]">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="max-w-[600px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-[18px] text-white text-center mb-4">
            Stay updated on Trail news
          </p>
          <div className="flex items-center gap-3 max-md:flex-col">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-[52px] bg-white/10 border-white/20 text-white placeholder:text-[#94A3B8] max-md:w-full"
            />
            <Button className="h-[52px] px-8 bg-gradient-to-r from-[#FF6B35] to-[#DC2626] text-white hover:shadow-xl transition-all max-md:w-full">
              Subscribe
            </Button>
          </div>
          <p className="text-[13px] text-[#94A3B8] text-center mt-3">
            Join 12,500+ golfers
          </p>
        </motion.div>
      </div>
    </section>
  );
}
