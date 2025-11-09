import { motion } from 'motion/react';
import { X, SlidersHorizontal } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useState } from 'react';

export function FilterSortBar() {
  const [activeFilters, setActiveFilters] = useState<string[]>(['All Courses']);
  const [sortBy, setSortBy] = useState('recommended');

  const filterOptions = [
    'All Courses',
    'By State',
    'Difficulty',
    'Time of Day',
    'Price Range',
    'Trail Courses Only',
    'Available Today',
  ];

  const toggleFilter = (filter: string) => {
    if (filter === 'All Courses') {
      setActiveFilters(['All Courses']);
    } else {
      const newFilters = activeFilters.filter(f => f !== 'All Courses');
      if (activeFilters.includes(filter)) {
        setActiveFilters(newFilters.filter(f => f !== filter));
      } else {
        setActiveFilters([...newFilters, filter]);
      }
    }
  };

  const clearAllFilters = () => {
    setActiveFilters(['All Courses']);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 bg-[#F5F1E8] border-b border-[#E5E7EB] shadow-sm overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-3 sm:py-4">
        {/* Mobile: Stack filters and sort */}
        <div className="flex flex-col gap-3 sm:hidden">
          {/* Filters Row */}
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar -mx-4 px-4">
            <SlidersHorizontal className="w-4 h-4 text-[#64748B] flex-shrink-0" />
            {filterOptions.map((filter) => {
              const isActive = activeFilters.includes(filter);
              return (
                <Badge
                  key={filter}
                  variant={isActive ? "default" : "outline"}
                  className="cursor-pointer whitespace-nowrap flex-shrink-0"
                  style={{
                    backgroundColor: isActive ? '#FF6B35' : 'white',
                    color: isActive ? 'white' : '#64748B',
                    borderColor: isActive ? '#FF6B35' : '#E5E7EB',
                    fontSize: '12px',
                    padding: '4px 12px',
                  }}
                  onClick={() => toggleFilter(filter)}
                >
                  {filter}
                  {isActive && filter !== 'All Courses' && (
                    <X className="w-3 h-3 ml-1" />
                  )}
                </Badge>
              );
            })}
          </div>
          
          {/* Sort Row */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full h-9 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">Recommended</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="earliest">Earliest Time</SelectItem>
              <SelectItem value="distance">Distance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Desktop: Side by side */}
        <div className="hidden sm:flex items-center justify-between gap-4">
          {/* Left Side - Filters */}
          <div className="flex items-center gap-4 flex-1 overflow-x-auto hide-scrollbar">
            <div className="flex items-center gap-2 flex-shrink-0">
              <SlidersHorizontal className="w-5 h-5 text-[#64748B]" />
              <span style={{ fontSize: '14px', fontWeight: '600' }}>Filters</span>
            </div>
            
            <div className="flex gap-2">
              {filterOptions.map((filter) => {
                const isActive = activeFilters.includes(filter);
                return (
                  <Badge
                    key={filter}
                    variant={isActive ? "default" : "outline"}
                    className="cursor-pointer whitespace-nowrap"
                    style={{
                      backgroundColor: isActive ? '#FF6B35' : 'white',
                      color: isActive ? 'white' : '#64748B',
                      borderColor: isActive ? '#FF6B35' : '#E5E7EB',
                    }}
                    onClick={() => toggleFilter(filter)}
                  >
                    {filter}
                    {isActive && filter !== 'All Courses' && (
                      <X className="w-3 h-3 ml-1" />
                    )}
                  </Badge>
                );
              })}
            </div>
          </div>

          {/* Right Side - Sort & View */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {activeFilters.length > 1 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                style={{ fontSize: '13px', color: '#64748B' }}
              >
                Clear all
              </Button>
            )}
            
            <div className="flex items-center gap-2">
              <span style={{ fontSize: '14px', color: '#64748B' }}>Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] h-9">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="earliest">Earliest Time</SelectItem>
                  <SelectItem value="distance">Distance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
