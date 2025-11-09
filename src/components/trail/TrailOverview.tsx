import { motion } from 'motion/react';
import { MapPin, Flag, Award, User, Crown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const stateData = [
  { name: 'Arizona', color: '#B7410E', courses: 12, miles: 401 },
  { name: 'California', color: '#FDB813', courses: 7, miles: 315 },
  { name: 'Illinois', color: '#3B82F6', courses: 9, miles: 301 },
  { name: 'Kansas', color: '#EAB308', courses: 3, miles: 13 },
  { name: 'Missouri', color: '#10B981', courses: 10, miles: 317 },
  { name: 'New Mexico', color: '#8B5CF6', courses: 8, miles: 487 },
  { name: 'Oklahoma', color: '#F97316', courses: 11, miles: 432 },
  { name: 'Texas', color: '#DC2626', courses: 6, miles: 186 },
];

const trails = [
  {
    icon: User,
    title: 'Weekend Warrior',
    courses: '10-15 courses',
    time: '3-4 weekends',
    color: '#64748B',
  },
  {
    icon: Award,
    title: 'Silver Seeker',
    courses: '33 courses',
    time: '6-8 weeks',
    color: '#94A3B8',
    highlight: true,
  },
  {
    icon: Crown,
    title: 'Gold Champion',
    courses: 'All 66 courses',
    time: '3-4 months',
    color: '#FFD700',
  },
];

export function TrailOverview() {
  const [activeTab, setActiveTab] = useState<'states' | 'plans'>('states');

  return (
    <section className="relative bg-white py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 
            className="mb-3"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '700',
              color: '#0F172A',
            }}
          >
            Plan Your Journey
          </h2>
          <p 
            className="uppercase mb-8"
            style={{ 
              fontSize: '14px',
              color: '#999999',
              letterSpacing: '3px',
              fontWeight: '600',
            }}
          >
            2,452 MILES • 8 STATES • 66 COURSES
          </p>

          {/* Tab Toggle */}
          <div className="inline-flex rounded-full p-1 bg-gray-100 gap-1">
            <button
              onClick={() => setActiveTab('states')}
              className="px-6 py-2 rounded-full transition-all"
              style={{
                background: activeTab === 'states' ? 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)' : 'transparent',
                color: activeTab === 'states' ? 'white' : '#64748B',
                fontWeight: '600',
                fontSize: '14px',
              }}
            >
              By State
            </button>
            <button
              onClick={() => setActiveTab('plans')}
              className="px-6 py-2 rounded-full transition-all"
              style={{
                background: activeTab === 'plans' ? 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)' : 'transparent',
                color: activeTab === 'plans' ? 'white' : '#64748B',
                fontWeight: '600',
                fontSize: '14px',
              }}
            >
              By Experience
            </button>
          </div>
        </motion.div>

        {/* States View */}
        {activeTab === 'states' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
          >
            {stateData.map((state, index) => (
              <motion.div
                key={state.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative bg-white rounded-xl p-5 cursor-pointer transition-all"
                style={{
                  border: '2px solid #E5E7EB',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                }}
              >
                {/* State Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div 
                    className="rounded-full flex-shrink-0"
                    style={{
                      width: '16px',
                      height: '16px',
                      backgroundColor: state.color,
                    }}
                  />
                  <h3 
                    style={{ 
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#0F172A',
                    }}
                  >
                    {state.name}
                  </h3>
                </div>

                {/* Stats */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Flag className="w-3.5 h-3.5" style={{ color: '#64748B' }} />
                    <span className="text-sm" style={{ color: '#64748B' }}>
                      {state.courses} courses
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" style={{ color: '#64748B' }} />
                    <span className="text-sm" style={{ color: '#64748B' }}>
                      {state.miles} miles
                    </span>
                  </div>
                </div>

                {/* Explore Link */}
                <motion.div
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-1 mt-3 text-sm"
                  style={{
                    color: '#FF6B35',
                    fontWeight: '600',
                  }}
                >
                  Explore
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Plans View */}
        {activeTab === 'plans' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {trails.map((trail, index) => (
              <motion.div
                key={trail.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: trail.highlight ? 1.03 : 1.02 }}
                className="relative rounded-xl p-6 text-center transition-all"
                style={{
                  backgroundColor: trail.highlight ? '#FFF7ED' : '#F8FAFC',
                  border: `2px solid ${trail.highlight ? '#FF6B35' : '#E5E7EB'}`,
                }}
              >
                {/* Popular Badge */}
                {trail.highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs"
                    style={{
                      background: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)',
                      color: 'white',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}
                  >
                    Popular
                  </div>
                )}

                {/* Icon */}
                <div 
                  className="rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: 'rgba(255, 107, 53, 0.1)',
                    border: `2px solid ${trail.color}`,
                  }}
                >
                  <trail.icon 
                    style={{ 
                      width: '28px',
                      height: '28px',
                      color: trail.color,
                    }}
                  />
                </div>

                {/* Title */}
                <h3 
                  className="mb-2"
                  style={{ 
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#0F172A',
                  }}
                >
                  {trail.title}
                </h3>

                {/* Courses */}
                <div 
                  className="mb-1"
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#FF6B35',
                  }}
                >
                  {trail.courses}
                </div>

                {/* Time */}
                <div 
                  style={{
                    fontSize: '13px',
                    color: '#64748B',
                  }}
                >
                  {trail.time}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
