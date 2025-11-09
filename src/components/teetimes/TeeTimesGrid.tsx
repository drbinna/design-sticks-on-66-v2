import { motion } from 'motion/react';
import { Cloud, Wind } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';

const dates = [
  { day: 'MON', date: 15, month: 'Oct' },
  { day: 'TUE', date: 16, month: 'Oct' },
  { day: 'WED', date: 17, month: 'Oct' },
  { day: 'THU', date: 18, month: 'Oct' },
  { day: 'FRI', date: 19, month: 'Oct' },
  { day: 'SAT', date: 20, month: 'Oct' },
  { day: 'SUN', date: 21, month: 'Oct' },
];

const timeSlots = {
  morning: [
    { time: '6:30 AM', price: 42, spots: 4, available: true },
    { time: '7:00 AM', price: 45, spots: 4, available: true },
    { time: '7:30 AM', price: 48, spots: 2, available: true, limited: true },
    { time: '8:00 AM', price: 48, spots: 4, available: true },
    { time: '8:30 AM', price: 48, spots: 4, available: true },
    { time: '9:00 AM', price: 52, spots: 0, available: false },
    { time: '9:30 AM', price: 52, spots: 4, available: true },
    { time: '10:00 AM', price: 55, spots: 4, available: true },
    { time: '10:30 AM', price: 55, spots: 1, available: true, limited: true },
  ],
  afternoon: [
    { time: '11:00 AM', price: 58, spots: 4, available: true },
    { time: '11:30 AM', price: 58, spots: 4, available: true },
    { time: '12:00 PM', price: 62, spots: 4, available: true },
    { time: '12:30 PM', price: 62, spots: 0, available: false },
    { time: '1:00 PM', price: 62, spots: 4, available: true },
    { time: '1:30 PM', price: 60, spots: 2, available: true, limited: true },
    { time: '2:00 PM', price: 58, spots: 4, available: true },
    { time: '2:30 PM', price: 58, spots: 4, available: true },
    { time: '3:00 PM', price: 55, spots: 4, available: true },
    { time: '3:30 PM', price: 52, spots: 4, available: true },
  ],
  twilight: [
    { time: '4:00 PM', price: 48, spots: 4, available: true },
    { time: '4:30 PM', price: 45, spots: 4, available: true },
    { time: '5:00 PM', price: 42, spots: 4, available: true },
    { time: '5:30 PM', price: 38, spots: 4, available: true },
    { time: '6:00 PM', price: 35, spots: 3, available: true, limited: true },
    { time: '6:30 PM', price: 32, spots: 4, available: true },
  ],
};

interface TeeTimesGridProps {
  courseId: number;
  onBookTime: (time: string, price: number) => void;
}

export function TeeTimesGrid({ courseId, onBookTime }: TeeTimesGridProps) {
  const [selectedDate, setSelectedDate] = useState(0);

  return (
    <div className="flex-1 bg-white p-4 sm:p-6 lg:p-8">
      {/* Selected Course Header */}
      <div className="mb-4 sm:mb-6">
        <div className="relative h-[200px] sm:h-[250px] lg:h-[300px] rounded-2xl overflow-hidden mb-4 sm:mb-6">
          <img
            src="https://images.unsplash.com/photo-1668048092480-a5c35c3f1330?w=1200"
            alt="Course"
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))',
            }}
          />
          
          {/* Course Info Overlay */}
          <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 text-white">
            <h2 style={{ fontSize: 'clamp(1.25rem, 4vw, 2rem)', fontWeight: '700', marginBottom: '4px' }}>
              Pebble Beach Golf Links
            </h2>
            <p style={{ fontSize: 'clamp(0.75rem, 2vw, 1rem)', color: '#E5E7EB' }}>
              Pebble Beach, CA • Par 72 • 6,828 yds
            </p>
          </div>

          {/* Weather Widget */}
          <div 
            className="absolute top-3 sm:top-6 right-3 sm:right-6 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3"
          >
            <Cloud className="w-4 h-4 sm:w-5 sm:h-5 text-[#64748B]" />
            <div>
              <div style={{ fontSize: 'clamp(0.875rem, 2vw, 1.125rem)', fontWeight: '700' }}>72°F</div>
              <div className="hidden sm:flex items-center gap-1" style={{ fontSize: '12px', color: '#64748B' }}>
                <Wind className="w-3 h-3" />
                <span>Light breeze</span>
              </div>
            </div>
          </div>

          {/* Book Now CTA */}
          <Button
            className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 h-9 sm:h-10 px-4 sm:px-6 text-sm"
            style={{
              background: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)',
            }}
          >
            <span className="hidden sm:inline">Book Now</span>
            <span className="sm:hidden">Book</span>
          </Button>
        </div>

        {/* Date Selector */}
        <div className="flex gap-2 sm:gap-3 overflow-x-auto hide-scrollbar pb-4">
          {dates.map((date, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedDate(idx)}
              className="flex-shrink-0 rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-center transition-all min-w-[80px] sm:min-w-[100px]"
              style={{
                backgroundColor: selectedDate === idx ? '#FF6B35' : 'white',
                color: selectedDate === idx ? 'white' : '#64748B',
                border: selectedDate === idx ? 'none' : '1px solid #E5E7EB',
              }}
            >
              <div style={{ fontSize: '11px', textTransform: 'uppercase' }}>{date.day}</div>
              <div style={{ fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: '700', margin: '4px 0' }}>{date.date}</div>
              <div style={{ fontSize: '11px' }}>{date.month}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Morning Times */}
      <div className="mb-6 sm:mb-8">
        <h3 
          className="mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-gray-200"
          style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', fontWeight: '600', color: '#0F172A' }}
        >
          Morning Times (6:00 AM - 11:00 AM)
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {timeSlots.morning.map((slot, idx) => (
            <TimeSlotCard
              key={idx}
              {...slot}
              onBook={() => onBookTime(slot.time, slot.price)}
            />
          ))}
        </div>
      </div>

      {/* Afternoon Times */}
      <div className="mb-6 sm:mb-8">
        <h3 
          className="mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-gray-200"
          style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', fontWeight: '600', color: '#0F172A' }}
        >
          Afternoon Times (11:00 AM - 4:00 PM)
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {timeSlots.afternoon.map((slot, idx) => (
            <TimeSlotCard
              key={idx}
              {...slot}
              onBook={() => onBookTime(slot.time, slot.price)}
            />
          ))}
        </div>
      </div>

      {/* Twilight Times */}
      <div>
        <h3 
          className="mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-gray-200"
          style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', fontWeight: '600', color: '#0F172A' }}
        >
          Twilight Times (4:00 PM - Sunset)
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {timeSlots.twilight.map((slot, idx) => (
            <TimeSlotCard
              key={idx}
              {...slot}
              onBook={() => onBookTime(slot.time, slot.price)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface TimeSlotCardProps {
  time: string;
  price: number;
  spots: number;
  available: boolean;
  limited?: boolean;
  onBook: () => void;
}

function TimeSlotCard({ time, price, spots, available, limited, onBook }: TimeSlotCardProps) {
  const getBorderColor = () => {
    if (!available) return '#E5E7EB';
    if (limited) return '#F59E0B';
    return '#10B981';
  };

  const getSpotColor = () => {
    if (!available) return '#9CA3AF';
    if (limited) return '#F59E0B';
    return '#10B981';
  };

  return (
    <motion.button
      whileHover={available ? { scale: 1.02, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' } : {}}
      onClick={available ? onBook : undefined}
      disabled={!available}
      className="rounded-lg p-3 sm:p-4 text-left transition-all"
      style={{
        backgroundColor: available ? 'white' : '#F3F4F6',
        border: `2px solid ${getBorderColor()}`,
        cursor: available ? 'pointer' : 'not-allowed',
        opacity: available ? 1 : 0.6,
      }}
    >
      <div style={{ fontSize: 'clamp(0.875rem, 3vw, 1.125rem)', fontWeight: '700', color: available ? '#0F172A' : '#9CA3AF' }}>
        {time}
      </div>
      <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#FF6B35', fontWeight: '600', margin: '6px 0' }}>
        ${price}/player
      </div>
      <div 
        className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-1"
        style={{ fontSize: 'clamp(0.625rem, 1.5vw, 0.75rem)' }}
      >
        <span style={{ color: getSpotColor() }}>
          {available ? (limited ? `Only ${spots} left` : `${spots} spots`) : 'Sold Out'}
        </span>
        <span style={{ color: '#64748B' }} className="hidden sm:inline">18 holes</span>
      </div>
    </motion.button>
  );
}
