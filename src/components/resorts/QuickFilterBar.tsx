import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Grid, List, Map, X } from 'lucide-react';

export default function QuickFilterBar() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>(['All Resorts']);
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'map'>('grid');
  const [sortBy, setSortBy] = useState('recommended');
  const [priceRange, setPriceRange] = useState([50, 500]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filterOptions = [
    'All Resorts',
    'Near My Course',
    'Trail Exclusive',
    'Pet Friendly',
    'Spa Available',
    'Golf Packages',
  ];

  const amenityFilters = ['Pool', 'Restaurant', 'Fitness', 'Breakfast', 'WiFi', 'Parking'];

  const toggleFilter = (filter: string) => {
    if (filter === 'All Resorts') {
      setActiveFilters(['All Resorts']);
    } else {
      const newFilters = activeFilters.includes(filter)
        ? activeFilters.filter(f => f !== filter)
        : [...activeFilters.filter(f => f !== 'All Resorts'), filter];
      setActiveFilters(newFilters.length ? newFilters : ['All Resorts']);
    }
  };

  return (
    <motion.div
      className={`bg-[#F5F1E8] transition-all duration-300 z-40 ${
        isSticky ? 'fixed top-0 left-0 right-0 shadow-lg' : 'relative'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1440px] mx-auto px-6 py-6">
        {/* Main Filter Row */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {/* Primary Filters */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {filterOptions.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className={`px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                  activeFilters.includes(filter)
                    ? 'bg-[#FF6B35] text-white shadow-md'
                    : 'bg-white text-[#0F172A] hover:bg-[#FF6B35]/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-[13px]">{filter}</span>
              </motion.button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-px h-8 bg-[#94A3B8]/30 flex-shrink-0" />

          {/* State Filter */}
          <div className="relative flex-shrink-0">
            <button className="px-4 py-2 rounded-full bg-white text-[#0F172A] hover:bg-[#FF6B35]/10 transition-all flex items-center gap-2">
              <span className="text-[13px]">By State</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Price Range */}
          <div className="relative flex-shrink-0">
            <button className="px-4 py-2 rounded-full bg-white text-[#0F172A] hover:bg-[#FF6B35]/10 transition-all flex items-center gap-2">
              <span className="text-[13px]">${priceRange[0]} - ${priceRange[1]}+</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Amenity Filters */}
          {amenityFilters.map((amenity) => (
            <motion.button
              key={amenity}
              className="px-3 py-2 rounded-full bg-white text-[#64748B] hover:bg-[#FF6B35]/10 transition-all flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-[12px]">{amenity}</span>
            </motion.button>
          ))}
        </div>

        {/* Second Row: Active Filters + Sort + View */}
        <div className="flex items-center justify-between mt-4">
          {/* Active Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            {activeFilters.length > 0 && activeFilters[0] !== 'All Resorts' && (
              <>
                {activeFilters.map((filter) => (
                  <div
                    key={filter}
                    className="px-3 py-1 rounded-full bg-[#FF6B35] text-white text-[12px] flex items-center gap-2"
                  >
                    {filter}
                    <button onClick={() => toggleFilter(filter)}>
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => setActiveFilters(['All Resorts'])}
                  className="text-[12px] text-[#FF6B35] hover:underline"
                >
                  Clear All
                </button>
              </>
            )}
          </div>

          {/* Sort & View Controls */}
          <div className="flex items-center gap-4">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-[13px] text-[#64748B]">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1 rounded-lg bg-white text-[#0F172A] text-[13px] border border-[#E5E7EB] outline-none cursor-pointer"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="distance">Distance to Course</option>
                <option value="rating">Guest Rating</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-1 bg-white rounded-lg p-1">
              {[
                { mode: 'grid' as const, icon: Grid },
                { mode: 'list' as const, icon: List },
                { mode: 'map' as const, icon: Map },
              ].map(({ mode, icon: Icon }) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`p-2 rounded transition-all ${
                    viewMode === mode
                      ? 'bg-[#FF6B35] text-white'
                      : 'text-[#64748B] hover:bg-[#F5F1E8]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.div>
  );
}
