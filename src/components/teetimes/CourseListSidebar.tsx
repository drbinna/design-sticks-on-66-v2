import { motion } from 'motion/react';
import { MapPin, Star, Navigation, Flag } from 'lucide-react';
import { Badge } from '../ui/badge';
import { useState } from 'react';

const courses = [
  {
    id: 1,
    name: 'Pebble Beach Golf Links',
    city: 'Pebble Beach',
    state: 'CA',
    distance: '2.3 miles',
    rating: 4.8,
    par: 72,
    yardage: 6828,
    difficulty: 4,
    trailPosition: 24,
    price: 45,
    thumbnail: 'https://images.unsplash.com/photo-1668048092480-a5c35c3f1330?w=200',
    status: 'available',
    stateColor: '#FF6B35',
  },
  {
    id: 2,
    name: 'Torrey Pines Golf Course',
    city: 'La Jolla',
    state: 'CA',
    distance: '5.1 miles',
    rating: 4.7,
    par: 72,
    yardage: 7698,
    difficulty: 5,
    trailPosition: 18,
    price: 68,
    thumbnail: 'https://images.unsplash.com/photo-1662224107740-10509a444253?w=200',
    status: 'limited',
    stateColor: '#FF6B35',
  },
  {
    id: 3,
    name: 'Bethpage Black Course',
    city: 'Farmingdale',
    state: 'NY',
    distance: '8.7 miles',
    rating: 4.9,
    par: 71,
    yardage: 7459,
    difficulty: 5,
    trailPosition: 45,
    price: 60,
    thumbnail: 'https://images.unsplash.com/photo-1715595812325-5c4ba24e66ca?w=200',
    status: 'available',
    stateColor: '#DC2626',
  },
  {
    id: 4,
    name: 'Chambers Bay',
    city: 'University Place',
    state: 'WA',
    distance: '12.4 miles',
    rating: 4.6,
    par: 72,
    yardage: 7585,
    difficulty: 4,
    trailPosition: 8,
    price: 52,
    thumbnail: 'https://images.unsplash.com/photo-1668048092480-a5c35c3f1330?w=200',
    status: 'available',
    stateColor: '#FFD700',
  },
];

interface CourseListSidebarProps {
  onSelectCourse: (courseId: number) => void;
  selectedCourseId: number | null;
}

export function CourseListSidebar({ onSelectCourse, selectedCourseId }: CourseListSidebarProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return '#10B981';
      case 'limited': return '#F59E0B';
      case 'sold-out': return '#94A3B8';
      default: return '#94A3B8';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available': return 'Available Times';
      case 'limited': return 'Limited';
      case 'sold-out': return 'Sold Out';
      default: return '';
    }
  };

  return (
    <div className="w-full lg:w-[400px] bg-[#F5F1E8] p-4 sm:p-6 overflow-y-auto hide-scrollbar" style={{ maxHeight: 'calc(100vh - 200px)' }}>
      {/* Section Header */}
      <div className="mb-6">
        <h2 style={{ fontSize: '24px', fontWeight: '700' }}>Select a Course</h2>
        <p style={{ fontSize: '14px', color: '#64748B', marginTop: '8px' }}>
          Showing {courses.length} courses
        </p>
      </div>

      {/* Course List */}
      <div className="space-y-4">
        {courses.map((course, idx) => {
          const isSelected = selectedCourseId === course.id;
          
          return (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => onSelectCourse(course.id)}
              className="bg-white rounded-xl p-4 cursor-pointer transition-all duration-200 hover:shadow-md"
              style={{
                border: isSelected ? '2px solid #FF6B35' : '1px solid #E5E7EB',
                backgroundColor: isSelected ? '#FFF7ED' : 'white',
              }}
            >
              {/* Top Row */}
              <div className="flex gap-3 mb-3">
                {/* Thumbnail */}
                <img
                  src={course.thumbnail}
                  alt={course.name}
                  className="w-[60px] h-[60px] rounded-lg object-cover flex-shrink-0"
                />

                {/* Course Info */}
                <div className="flex-1 min-w-0">
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#0F172A' }}>
                    {course.name}
                  </h3>
                  <p style={{ fontSize: '12px', color: '#64748B' }}>
                    {course.city}, {course.state}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <Navigation className="w-3 h-3 text-[#64748B]" />
                    <span style={{ fontSize: '12px', color: '#64748B' }}>
                      {course.distance} away
                    </span>
                  </div>
                </div>

                {/* Price Badge */}
                <div 
                  className="flex-shrink-0 px-3 py-1 rounded-full h-fit"
                  style={{ backgroundColor: '#FFF7ED' }}
                >
                  <span style={{ fontSize: '14px', fontWeight: '700', color: '#FF6B35' }}>
                    ${course.price}
                  </span>
                </div>
              </div>

              {/* Middle Row - Badges */}
              <div className="flex items-center gap-2 mb-3">
                <div 
                  className="px-2 py-1 rounded-full text-white text-xs"
                  style={{ backgroundColor: course.stateColor }}
                >
                  {course.state}
                </div>
                <Badge 
                  variant="outline" 
                  className="text-xs"
                  style={{ 
                    color: '#FF6B35',
                    borderColor: '#FF6B35',
                    backgroundColor: 'white',
                  }}
                >
                  #{course.trailPosition} of 66
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-[#FFD700] text-[#FFD700]" />
                  <span style={{ fontSize: '12px' }}>{course.rating}</span>
                </div>
              </div>

              {/* Bottom Row - Stats */}
              <div className="flex items-center justify-between text-xs" style={{ color: '#64748B' }}>
                <span>Par {course.par}</span>
                <span>•</span>
                <span>{course.yardage.toLocaleString()} yds</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Flag className="w-3 h-3 text-[#FF6B35]" />
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full mr-1"
                        style={{
                          backgroundColor: i < course.difficulty ? '#FF6B35' : '#E5E7EB',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-200">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: getStatusColor(course.status) }}
                />
                <span 
                  style={{ 
                    fontSize: '12px',
                    color: getStatusColor(course.status),
                    fontWeight: '600',
                  }}
                >
                  {getStatusText(course.status)}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Load More */}
      <button
        className="w-full mt-6 py-3 rounded-lg border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FFF7ED] transition-colors"
        style={{ fontSize: '14px', fontWeight: '600' }}
      >
        Load More Courses
      </button>
    </div>
  );
}
