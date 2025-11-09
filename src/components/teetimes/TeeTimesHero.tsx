import { motion } from 'motion/react';
import { MapPin, Calendar, Users, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useState } from 'react';

export function TeeTimesHero() {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedPlayers, setSelectedPlayers] = useState('');

  return (
    <section 
      className="relative overflow-hidden"
      style={{ 
        minHeight: '600px',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
      }}
    >
      {/* Animated Route 66 highway markers background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" style={{ strokeDasharray: '10 10' }}>
          <motion.path
            d="M 0 250 Q 360 200, 720 250 T 1440 250"
            stroke="#FF6B35"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-16 sm:py-20 flex flex-col items-center justify-center text-center">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-3 sm:space-y-4 mb-8 sm:mb-12"
        >
          <motion.p
            className="hidden sm:block"
            style={{ 
              fontSize: '14px',
              letterSpacing: '4px',
              color: '#FF6B35',
              textTransform: 'uppercase',
            }}
          >
            Tee Off On America's Highway
          </motion.p>
          
          <h1 
            className="text-white px-4"
            style={{ 
              fontSize: 'clamp(2rem, 8vw, 4rem)',
              fontWeight: '700',
              textShadow: '0 4px 20px rgba(255, 107, 53, 0.3)',
            }}
          >
            Book Your Tee Time
          </h1>
          
          <p 
            className="max-w-[700px] mx-auto px-4 hidden sm:block"
            style={{ 
              fontSize: '18px',
              color: '#94A3B8',
              lineHeight: '1.6',
            }}
          >
            Reserve your spot at any of our 66 legendary courses along Route 66. 
            From sunrise rounds in California to sunset golf in Illinois.
          </p>
        </motion.div>

        {/* Quick Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-[900px]"
        >
          <div className="bg-white rounded-2xl sm:rounded-full shadow-2xl p-4 sm:p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2">
            {/* Course Selection */}
            <div className="flex items-center gap-3 px-3 sm:px-4 py-3 sm:py-2 bg-gray-50 sm:bg-transparent rounded-xl sm:rounded-none">
              <MapPin className="w-5 h-5 text-[#FF6B35] flex-shrink-0" />
              <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                <SelectTrigger className="border-0 shadow-none p-0 h-auto focus:ring-0 w-full">
                  <SelectValue placeholder="Select Course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pebble-beach">Pebble Beach</SelectItem>
                  <SelectItem value="torrey-pines">Torrey Pines</SelectItem>
                  <SelectItem value="bethpage">Bethpage Black</SelectItem>
                  <SelectItem value="chambers-bay">Chambers Bay</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Date Picker */}
            <div className="flex items-center gap-3 px-3 sm:px-4 py-3 sm:py-2 bg-gray-50 sm:bg-transparent rounded-xl sm:rounded-none sm:border-l border-gray-200">
              <Calendar className="w-5 h-5 text-[#FF6B35] flex-shrink-0" />
              <input
                type="date"
                className="border-0 outline-none bg-transparent text-sm flex-1 min-w-0 focus:ring-0"
                placeholder="Choose Date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>

            {/* Players */}
            <div className="flex items-center gap-3 px-3 sm:px-4 py-3 sm:py-2 bg-gray-50 sm:bg-transparent rounded-xl sm:rounded-none sm:border-l border-gray-200">
              <Users className="w-5 h-5 text-[#FF6B35] flex-shrink-0" />
              <Select value={selectedPlayers} onValueChange={setSelectedPlayers}>
                <SelectTrigger className="border-0 shadow-none p-0 h-auto focus:ring-0 w-full">
                  <SelectValue placeholder="Players" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Player</SelectItem>
                  <SelectItem value="2">2 Players</SelectItem>
                  <SelectItem value="3">3 Players</SelectItem>
                  <SelectItem value="4">4 Players</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <Button
              className="rounded-xl sm:rounded-full h-12 sm:h-auto w-full"
              style={{
                background: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)',
                color: 'white',
              }}
            >
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
