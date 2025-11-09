import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

export default function TrailConcierge() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: '2',
    budget: '',
  });

  const services = [
    'Custom itinerary planning',
    'Multi-property bookings',
    'Tee time coordination',
    'Dining reservations',
    'Local attraction recommendations',
    'Transportation arrangements',
    'Special occasion planning',
    '24/7 support during your trip',
  ];

  return (
    <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#0F172A' }}>
      {/* Golf Course Silhouette Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="golf-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M 50 150 Q 100 100 150 150" stroke="white" fill="none" strokeWidth="2"/>
            <circle cx="160" cy="50" r="8" fill="white"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#golf-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6">
        <div className="flex max-lg:flex-col gap-12">
          {/* Left Side: Service Description */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-block px-4 py-2 rounded-full bg-[#10B981]/20 border border-[#10B981] mb-6">
                <span className="text-[12px] tracking-[2px] text-[#10B981]">
                  COMPLIMENTARY SERVICE
                </span>
              </div>

              {/* Title */}
              <h2 className="text-[48px] max-md:text-[36px] text-white mb-4">
                Your Personal Trail Concierge
              </h2>
              <p className="text-[16px] tracking-[2px] text-[#FF6B35] uppercase mb-8">
                LET US PLAN YOUR PERFECT JOURNEY
              </p>

              {/* Services Offered */}
              <div className="space-y-3 mb-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="text-[#10B981] mt-1">✓</span>
                    <span className="text-[16px] text-[#E5E7EB]">{service}</span>
                  </motion.div>
                ))}
              </div>

              {/* Value Propositions */}
              <div className="grid grid-cols-3 gap-6 mb-8 max-md:grid-cols-1">
                {[
                  { label: 'Average time saved', value: '8+ hours' },
                  { label: 'Used by', value: '500+ Trail travelers' },
                  { label: 'Satisfaction', value: '100% rating' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="text-[28px] text-[#FF6B35] mb-1">{stat.value}</div>
                    <div className="text-[13px] text-[#94A3B8]">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-4 max-md:flex-col">
                <Button className="h-[52px] px-8 bg-white text-[#FF6B35] hover:bg-[#F9FAFB]">
                  Request Concierge
                </Button>
                <a href="tel:1-800-768-8366" className="text-[16px] text-white hover:text-[#FF6B35] transition-colors">
                  Call: 1-800-ROUTE-66
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:w-1/2">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-[28px] text-[#0F172A] mb-6">Get Your Custom Plan</h3>

              <form className="space-y-4">
                <div>
                  <label className="block text-[14px] text-[#64748B] mb-2">Name</label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-[48px]"
                  />
                </div>

                <div>
                  <label className="block text-[14px] text-[#64748B] mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-[48px]"
                  />
                </div>

                <div>
                  <label className="block text-[14px] text-[#64748B] mb-2">Phone</label>
                  <Input
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-[48px]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[14px] text-[#64748B] mb-2">Travel Dates</label>
                    <Input type="date" className="h-[48px]" />
                  </div>
                  <div>
                    <label className="block text-[14px] text-[#64748B] mb-2">Travelers</label>
                    <select
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className="w-full h-[48px] px-3 rounded-md border border-[#E5E7EB] outline-none"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Traveler' : 'Travelers'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] text-[#64748B] mb-2">Budget per night</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full h-[48px] px-3 rounded-md border border-[#E5E7EB] outline-none"
                  >
                    <option value="">Select budget</option>
                    <option value="budget">$50 - $100</option>
                    <option value="mid">$100 - $200</option>
                    <option value="premium">$200 - $300</option>
                    <option value="luxury">$300+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[14px] text-[#64748B] mb-2">Preferred States</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Illinois', 'Missouri', 'Kansas', 'Oklahoma', 'Texas', 'New Mexico', 'Arizona', 'California'].map((state) => (
                      <label key={state} className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4 accent-[#FF6B35]" />
                        <span className="text-[13px] text-[#0F172A]">{state}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] text-[#64748B] mb-2">Special Requests</label>
                  <Textarea
                    placeholder="Tell us about your ideal trip..."
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <Button className="w-full h-[52px] bg-gradient-to-r from-[#FF6B35] to-[#DC2626] text-white hover:shadow-xl transition-all">
                  Get Your Custom Plan
                </Button>

                {/* Trust Signal */}
                <div className="flex items-center gap-2 text-[#10B981] text-center justify-center pt-2">
                  <span className="text-[16px]">✓</span>
                  <span className="text-[13px]">We respond within 2 hours, 7 days a week</span>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
