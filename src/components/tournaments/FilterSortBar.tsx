import { motion } from 'motion/react';
import { useState } from 'react';
import { SlidersHorizontal, Calendar, MapPin, Trophy } from 'lucide-react';

interface FilterSortBarProps {
  onFilterChange: (filter: string) => void;
  onSortChange: (sort: string) => void;
  activeFilter: string;
  activeSort: string;
}

export default function FilterSortBar({
  onFilterChange,
  onSortChange,
  activeFilter,
  activeSort,
}: FilterSortBarProps) {
  const filters = [
    { id: 'all', label: 'All Events', color: '#FF6B35' },
    { id: 'bronze', label: 'Bronze', color: '#CD7F32' },
    { id: 'silver', label: 'Silver', color: '#C0C0C0' },
    { id: 'gold', label: 'Gold', color: '#FFD700' },
    { id: 'special', label: 'Special', color: '#8B5CF6' },
  ];

  const sorts = [
    { id: 'date', label: 'By Date', icon: Calendar },
    { id: 'location', label: 'By Location', icon: MapPin },
    { id: 'prize', label: 'By Prize Pool', icon: Trophy },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8" role="toolbar" aria-label="Tournament filters and sorting">
      <div className="flex items-center gap-2 mb-4">
        <SlidersHorizontal className="w-5 h-5 text-[#FF6B35]" />
        <h3 
          className="text-[#0F172A]"
          style={{ fontSize: '18px' }}
        >
          Filter & Sort
        </h3>
      </div>

      {/* Filters */}
      <div className="mb-4">
        <p 
          className="text-[#64748B] uppercase tracking-wider mb-3"
          style={{ fontSize: '13px' }}
        >
          Tournament Series
        </p>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by tournament series">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeFilter === filter.id
                  ? 'text-white shadow-lg'
                  : 'bg-[#F9FAFB] text-[#64748B] hover:bg-[#F3F4F6]'
              }`}
              style={{
                backgroundColor: activeFilter === filter.id ? filter.color : undefined,
                fontSize: '14px',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              aria-pressed={activeFilter === filter.id}
              aria-label={`Filter by ${filter.label}`}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Sort Options */}
      <div>
        <p 
          className="text-[#64748B] uppercase tracking-wider mb-3"
          style={{ fontSize: '13px' }}
        >
          Sort By
        </p>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Sort tournaments">
          {sorts.map((sort) => (
            <motion.button
              key={sort.id}
              onClick={() => onSortChange(sort.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeSort === sort.id
                  ? 'bg-[#FF6B35] text-white shadow-lg'
                  : 'bg-[#F9FAFB] text-[#64748B] hover:bg-[#F3F4F6]'
              }`}
              style={{ fontSize: '14px' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              aria-pressed={activeSort === sort.id}
              aria-label={`Sort ${sort.label}`}
            >
              <sort.icon className="w-4 h-4" />
              {sort.label}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
