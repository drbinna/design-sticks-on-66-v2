import { motion } from 'motion/react';
import { useState } from 'react';
import { MapPin, Calendar, Users, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function ResortsHero() {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  return (
    <section className="relative min-h-[700px] max-md:min-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop"
          alt="Luxury golf resort"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(15,23,42,0.7), rgba(15,23,42,0.5))',
        }}
      />

      {/* Animated Background Elements */}
      <motion.div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#FF6B35]"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.1,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 w-full py-20">
        
        {/* Pre-title Badge */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[#FF6B35]/20 border border-[#FF6B35]/30 backdrop-blur-sm">
            <span 
              className="tracking-[4px] text-[#FF6B35]"
              style={{ fontSize: '12px' }}
            >
              ACCOMMODATIONS
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-center text-white mb-12"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Resorts Along the Trail
        </motion.h1>

        {/* Search Form - Desktop & Mobile Responsive */}
        <motion.div
          className="bg-white rounded-2xl shadow-2xl p-6 max-w-[1000px] mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Location */}
            <div>
              <label 
                htmlFor="location" 
                className="block text-[#64748B] mb-2 uppercase tracking-wider"
                style={{ fontSize: '13px' }}
              >
                Destination
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF6B35]" />
                <input
                  type="text"
                  id="location"
                  placeholder="State or City"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-lg text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  style={{ fontSize: '15px' }}
                />
              </div>
            </div>

            {/* Check-in */}
            <div>
              <label 
                htmlFor="checkin" 
                className="block text-[#64748B] mb-2 uppercase tracking-wider"
                style={{ fontSize: '13px' }}
              >
                Check-in
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF6B35]" />
                <input
                  type="date"
                  id="checkin"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-lg text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  style={{ fontSize: '15px' }}
                />
              </div>
            </div>

            {/* Check-out */}
            <div>
              <label 
                htmlFor="checkout" 
                className="block text-[#64748B] mb-2 uppercase tracking-wider"
                style={{ fontSize: '13px' }}
              >
                Check-out
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF6B35]" />
                <input
                  type="date"
                  id="checkout"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-lg text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  style={{ fontSize: '15px' }}
                />
              </div>
            </div>

            {/* Guests */}
            <div>
              <label 
                htmlFor="guests" 
                className="block text-[#64748B] mb-2 uppercase tracking-wider"
                style={{ fontSize: '13px' }}
              >
                Guests
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF6B35]" />
                <select
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-[#E5E7EB] rounded-lg text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent appearance-none bg-white cursor-pointer"
                  style={{ fontSize: '15px' }}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4+ Guests</option>
                </select>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <Button 
            className="w-full mt-6 h-[52px] bg-gradient-to-r from-[#FF6B35] to-[#DC2626] text-white hover:shadow-xl transition-all flex items-center justify-center gap-2"
            style={{ fontSize: '16px' }}
          >
            <Search className="w-5 h-5" />
            Find Resorts
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white opacity-80 cursor-pointer"
          style={{ fontSize: '14px' }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Explore Accommodations ↓
        </motion.div>
      </div>
    </section>
  );
}
