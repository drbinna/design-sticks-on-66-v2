import { motion } from 'motion/react';
import { MapPin, Flag, ArrowRight, X } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '../ui/dialog';

const stateData = [
  {
    name: 'Illinois',
    color: '#3B82F6',
    courses: 9,
    miles: 301,
    topCourses: [
      { name: 'Lincoln Greens Golf Course', city: 'Springfield', difficulty: 3 },
      { name: 'Heritage Bluffs Public Golf Club', city: 'Channahon', difficulty: 4 },
      { name: 'Cog Hill Golf & Country Club', city: 'Lemont', difficulty: 5 },
    ],
  },
  {
    name: 'Missouri',
    color: '#10B981',
    courses: 10,
    miles: 317,
    topCourses: [
      { name: 'Eagle Knoll Golf Club', city: 'Hartsburg', difficulty: 4 },
      { name: 'The Courses at Forest Park', city: 'St. Louis', difficulty: 3 },
      { name: 'Osage National Golf Club', city: 'Lake Ozark', difficulty: 5 },
    ],
  },
  {
    name: 'Kansas',
    color: '#EAB308',
    courses: 3,
    miles: 13,
    topCourses: [
      { name: 'Buffalo Dunes Golf Course', city: 'Garden City', difficulty: 4 },
      { name: 'Mariah Hills Golf Course', city: 'Dodge City', difficulty: 3 },
      { name: 'Carey Park Golf Course', city: 'Hutchinson', difficulty: 3 },
    ],
  },
  {
    name: 'Oklahoma',
    color: '#F97316',
    courses: 11,
    miles: 432,
    topCourses: [
      { name: 'Karsten Creek Golf Club', city: 'Stillwater', difficulty: 5 },
      { name: 'Cherokee Hills Golf Club', city: 'Catoosa', difficulty: 4 },
      { name: 'The Patriot Golf Club', city: 'Owasso', difficulty: 4 },
    ],
  },
  {
    name: 'Texas',
    color: '#DC2626',
    courses: 6,
    miles: 186,
    topCourses: [
      { name: 'Comanche Trail Golf Complex', city: 'Amarillo', difficulty: 3 },
      { name: 'Ross Rogers Golf Complex', city: 'Amarillo', difficulty: 4 },
      { name: 'Tascosa Golf Club', city: 'Amarillo', difficulty: 4 },
    ],
  },
  {
    name: 'New Mexico',
    color: '#8B5CF6',
    courses: 8,
    miles: 487,
    topCourses: [
      { name: 'Paa-Ko Ridge Golf Club', city: 'Sandia Park', difficulty: 5 },
      { name: 'Twin Warriors Golf Club', city: 'Santa Ana Pueblo', difficulty: 5 },
      { name: 'Piñon Hills Golf Course', city: 'Farmington', difficulty: 4 },
    ],
  },
  {
    name: 'Arizona',
    color: '#B7410E',
    courses: 12,
    miles: 401,
    topCourses: [
      { name: 'We-Ko-Pa Golf Club', city: 'Fort McDowell', difficulty: 5 },
      { name: 'Sedona Golf Resort', city: 'Sedona', difficulty: 5 },
      { name: 'London Bridge Golf Club', city: 'Lake Havasu City', difficulty: 4 },
    ],
  },
  {
    name: 'California',
    color: '#FDB813',
    courses: 7,
    miles: 315,
    topCourses: [
      { name: 'Desert Willow Golf Resort', city: 'Palm Desert', difficulty: 5 },
      { name: 'Rustic Canyon Golf Course', city: 'Moorpark', difficulty: 5 },
      { name: 'Brookside Golf Course', city: 'Pasadena', difficulty: 4 },
    ],
  },
];

export function TrailStateCards() {
  const [selectedState, setSelectedState] = useState<typeof stateData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (state: typeof stateData[0]) => {
    setSelectedState(state);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedState(null), 200);
  };

  const renderDifficulty = (level: number) => {
    return (
      <div className="flex gap-0.5 sm:gap-1">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
            style={{
              backgroundColor: dot <= level ? '#FF6B35' : '#E5E7EB',
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="relative bg-white py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 
            className="mb-3"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '700',
              color: '#0F172A',
            }}
          >
            Your Journey Awaits
          </h2>
          <p 
            className="uppercase"
            style={{ 
              fontSize: '14px',
              color: '#999999',
              letterSpacing: '3px',
              fontWeight: '600',
            }}
          >
            EXPLORE THE COURSES BY STATE
          </p>
        </motion.div>

        {/* State Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {stateData.map((state, index) => (
            <motion.div
              key={state.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: '0 20px 25px rgba(0,0,0,0.15)' }}
              className="relative bg-white rounded-2xl p-8 transition-all duration-300"
              style={{
                border: '2px solid #E5E7EB',
                minHeight: '400px',
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  {/* State Color Dot */}
                  <div 
                    className="rounded-full"
                    style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: state.color,
                    }}
                  />
                  
                  {/* State Name */}
                  <h3 
                    style={{ 
                      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                      fontWeight: '700',
                      color: '#0F172A',
                    }}
                  >
                    {state.name}
                  </h3>
                </div>

                {/* Course Count Badge */}
                <div 
                  className="px-4 py-1.5 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: '600',
                  }}
                >
                  {state.courses} courses
                </div>
              </div>

              {/* Route 66 Shield */}
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
                <div 
                  className="flex items-center justify-center rounded-lg"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: state.color,
                    opacity: 0.1,
                  }}
                >
                  <span 
                    style={{ 
                      fontSize: '24px',
                      fontWeight: '900',
                      color: state.color,
                    }}
                  >
                    66
                  </span>
                </div>
              </div>

              {/* Stats Row */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: '#64748B' }} />
                  <span className="text-xs sm:text-sm" style={{ color: '#64748B' }}>
                    {state.miles} miles
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Flag className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: '#64748B' }} />
                  <span className="text-xs sm:text-sm" style={{ color: '#64748B' }}>
                    {state.courses} courses
                  </span>
                </div>
              </div>

              {/* Course List Preview */}
              <div className="space-y-3 sm:space-y-4 mb-6">
                {state.topCourses.map((course, idx) => (
                  <motion.div
                    key={course.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start justify-between gap-2 sm:gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <div 
                        className="text-sm sm:text-base mb-1"
                        style={{ 
                          fontWeight: '600',
                          color: '#0F172A',
                        }}
                      >
                        {course.name}
                      </div>
                      <div className="text-xs sm:text-sm truncate" style={{ color: '#64748B' }}>
                        {course.city}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      {renderDifficulty(course.difficulty)}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ x: 5 }}
                onClick={() => openModal(state)}
                className="flex items-center gap-2 mt-auto text-xs sm:text-sm"
                style={{
                  color: '#FF6B35',
                  fontWeight: '600',
                }}
              >
                View All {state.name} Courses
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Modal Dialog */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-3xl w-[95vw] sm:w-full max-h-[90vh] overflow-hidden p-4 sm:p-6">
            {selectedState && (
              <>
                <DialogHeader className="space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div 
                      className="rounded-full flex-shrink-0"
                      style={{
                        width: '24px',
                        height: '24px',
                        backgroundColor: selectedState.color,
                      }}
                    />
                    <DialogTitle className="text-xl sm:text-2xl lg:text-3xl">
                      {selectedState.name} Golf Courses
                    </DialogTitle>
                  </div>
                  <DialogDescription className="sr-only">
                    View all golf courses available in {selectedState.name} along Route 66
                  </DialogDescription>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-1">
                    <div className="flex items-center gap-2">
                      <Flag className="w-4 h-4" style={{ color: '#64748B' }} />
                      <span style={{ fontSize: '13px', color: '#64748B' }} className="sm:text-sm">
                        {selectedState.courses} courses
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" style={{ color: '#64748B' }} />
                      <span style={{ fontSize: '13px', color: '#64748B' }} className="sm:text-sm">
                        {selectedState.miles} miles
                      </span>
                    </div>
                  </div>
                </DialogHeader>

                <div className="overflow-y-auto pr-1 sm:pr-2 -mr-1 sm:-mr-2" style={{ maxHeight: 'calc(90vh - 180px)' }}>
                  <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
                    {selectedState.topCourses.map((course, idx) => (
                      <motion.div
                        key={course.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-3 sm:p-4 rounded-xl transition-all hover:shadow-md"
                        style={{
                          border: '2px solid #E5E7EB',
                          background: 'white',
                        }}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                          <div className="flex-1 min-w-0">
                            <h3 
                              className="text-base sm:text-lg mb-2"
                              style={{ 
                                fontWeight: '600',
                                color: '#0F172A',
                              }}
                            >
                              {course.name}
                            </h3>
                            <div className="flex items-center gap-2 mb-2 sm:mb-3">
                              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" style={{ color: '#64748B' }} />
                              <span className="text-xs sm:text-sm truncate" style={{ color: '#64748B' }}>
                                {course.city}, {selectedState.name}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs sm:text-sm" style={{ color: '#64748B' }}>
                                Difficulty:
                              </span>
                              {renderDifficulty(course.difficulty)}
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 rounded-lg w-full sm:w-auto sm:flex-shrink-0 text-sm sm:text-base"
                            style={{
                              background: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)',
                              color: 'white',
                              fontWeight: '600',
                            }}
                          >
                            View Details
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
