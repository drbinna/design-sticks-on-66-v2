import { motion } from 'motion/react';
import { Users, Award, UtensilsCrossed, Trophy } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

export function GroupBookings() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '700', marginBottom: '8px' }}>
              Planning a Group Outing?
            </h2>
            <p 
              style={{ 
                fontSize: '14px',
                letterSpacing: '2px',
                color: '#FF6B35',
                textTransform: 'uppercase',
                marginBottom: '24px',
              }}
            >
              Corporate Events • Tournaments • Bachelor Parties
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {[
                'Groups of 12+ players',
                'Custom pricing',
                'Dedicated coordinator',
                'Food & beverage packages',
                'Prizes & awards',
                'Multiple course options',
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div 
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: '#10B981' }}
                  />
                  <span style={{ fontSize: '13px', color: '#334155' }}>{feature}</span>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company" style={{ fontSize: '13px', marginBottom: '8px', display: 'block' }}>Company/Group Name</Label>
                  <Input id="company" placeholder="ABC Corporation" className="h-11" />
                </div>
                <div>
                  <Label htmlFor="contact" style={{ fontSize: '13px', marginBottom: '8px', display: 'block' }}>Contact Name</Label>
                  <Input id="contact" placeholder="John Doe" className="h-11" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" style={{ fontSize: '13px', marginBottom: '8px', display: 'block' }}>Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="h-11" />
                </div>
                <div>
                  <Label htmlFor="phone" style={{ fontSize: '13px', marginBottom: '8px', display: 'block' }}>Phone</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" className="h-11" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date" style={{ fontSize: '13px', marginBottom: '8px', display: 'block' }}>Preferred Date</Label>
                  <Input id="date" type="date" className="h-11" />
                </div>
                <div>
                  <Label htmlFor="players" style={{ fontSize: '13px', marginBottom: '8px', display: 'block' }}>Number of Players</Label>
                  <Input id="players" type="number" placeholder="20" min="12" className="h-11" />
                </div>
              </div>

              <div>
                <Label htmlFor="message" style={{ fontSize: '13px', marginBottom: '8px', display: 'block' }}>Message/Details</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your event..."
                  rows={4}
                  className="resize-none"
                />
              </div>

              <Button
                className="w-full h-11 sm:h-12"
                style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)', fontSize: '15px' }}
              >
                Request Group Quote
              </Button>
            </div>
          </motion.div>

          {/* Right Side - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1621398945024-8d70345f33cc?w=800"
                alt="Group golfing"
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                }}
              />

              {/* Overlaid Stats */}
              <div className="absolute bottom-6 left-6 right-6 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/90 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3"
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#FFF7ED' }}
                  >
                    <Users className="w-6 h-6" style={{ color: '#FF6B35' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: '700', color: '#0F172A' }}>
                      500+
                    </div>
                    <div style={{ fontSize: '14px', color: '#64748B' }}>
                      Groups Hosted
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/90 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3"
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#FFF7ED' }}
                  >
                    <Award className="w-6 h-6" style={{ color: '#FF6B35' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: '700', color: '#0F172A' }}>
                      25%
                    </div>
                    <div style={{ fontSize: '14px', color: '#64748B' }}>
                      Average Savings
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/90 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3"
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#FFF7ED' }}
                  >
                    <Trophy className="w-6 h-6" style={{ color: '#FF6B35' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#0F172A' }}>
                      Custom Packages
                    </div>
                    <div style={{ fontSize: '14px', color: '#64748B' }}>
                      Available
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
