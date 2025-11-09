import { motion } from 'motion/react';
import { useState, useMemo } from 'react';
import { MapPin, Calendar, Users, Trophy, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Progress } from '../ui/progress';
import FilterSortBar from './FilterSortBar';

interface TournamentCardProps {
  name: string;
  date: string;
  location: string;
  course: string;
  image: string;
  tier: string;
  tierColor: string;
  status: 'open' | 'filling' | 'soldout';
  format: string;
  players: string;
  prize: string;
  handicap: string;
  entryFee: string;
  spotsRemaining: number;
  totalSpots: number;
  features: string[];
  index: number;
}

function TournamentCard({
  name,
  date,
  location,
  course,
  image,
  tier,
  tierColor,
  status,
  format,
  players,
  prize,
  handicap,
  entryFee,
  spotsRemaining,
  totalSpots,
  features,
  index,
}: TournamentCardProps) {
  const statusConfig = {
    open: { color: '#10B981', text: 'Open' },
    filling: { color: '#F59E0B', text: 'Filling Fast' },
    soldout: { color: '#64748B', text: 'Sold Out' },
  };

  const spotsProgress = ((totalSpots - spotsRemaining) / totalSpots) * 100;

  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5E7EB] hover:border-[#FF6B35] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#FF6B35] focus-within:ring-offset-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      tabIndex={0}
      role="article"
      aria-label={`${name} tournament on ${date}`}
    >
      {/* Image Section */}
      <div className="relative h-[220px] overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Tier Badge */}
        <div className="absolute top-3 left-3">
          <div
            className="px-3 py-1 rounded-full text-white backdrop-blur-sm"
            style={{ backgroundColor: tierColor, fontSize: '12px' }}
          >
            {tier}
          </div>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <div
            className="px-3 py-1 rounded-full text-white backdrop-blur-sm"
            style={{ backgroundColor: statusConfig[status].color, fontSize: '12px' }}
          >
            {statusConfig[status].text}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <h3 
          className="text-[#0F172A] mb-2"
          style={{ fontSize: '22px' }}
        >
          {name}
        </h3>
        <div className="flex items-center gap-2 text-[#FF6B35] mb-2">
          <Calendar className="w-4 h-4" />
          <span style={{ fontSize: '16px' }}>{date}</span>
        </div>
        <div className="flex items-center gap-2 text-[#64748B] mb-4 pb-4 border-b border-[#E5E7EB]">
          <MapPin className="w-4 h-4" />
          <span style={{ fontSize: '14px' }}>{location}</span>
        </div>

        {/* Key Info */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span 
              className="text-[#64748B]"
              style={{ fontSize: '14px' }}
            >
              {format}
            </span>
            <span 
              className="text-[#64748B]"
              style={{ fontSize: '14px' }}
            >
              {prize}
            </span>
          </div>
          <p 
            className="text-[#FF6B35]"
            style={{ fontSize: '20px' }}
          >
            {entryFee}
          </p>
        </div>

        {/* Spots Progress */}
        <div className="mb-4">
          <div 
            className="flex items-center justify-between text-[#64748B] mb-1"
            style={{ fontSize: '13px' }}
          >
            <span>{spotsRemaining} spots left</span>
            <span>{Math.round(spotsProgress)}% full</span>
          </div>
          <Progress value={spotsProgress} className="h-2" />
        </div>

        {/* CTA */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <Button
            className="w-full h-[44px] bg-gradient-to-r from-[#FF6B35] to-[#DC2626] text-white"
            aria-label={`View details for ${name}`}
          >
            View Details
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function UpcomingTournaments() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSort, setActiveSort] = useState('date');
  
  const allTournaments: TournamentCardProps[] = [
    {
      name: 'The Mother Road Championship',
      date: 'June 15-16, 2026',
      location: 'Oklahoma City, OK',
      course: 'Lake Hefner Golf Club',
      image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=600&h=400&fit=crop',
      tier: 'Gold Series',
      tierColor: '#FFD700',
      status: 'open',
      format: '2-Day Stroke Play',
      players: '72 spots',
      prize: '$10,000 pool',
      handicap: '10 & under',
      entryFee: '$300/player',
      spotsRemaining: 28,
      totalSpots: 72,
      features: [
        'Professional scoring',
        'Lunch included both days',
        'Awards ceremony',
        'Trail points awarded',
      ],
      index: 0,
    },
    {
      name: 'Desert Scramble',
      date: 'May 8, 2026',
      location: 'Phoenix, AZ',
      course: 'Desert Ridge Golf Club',
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&h=400&fit=crop',
      tier: 'Silver Series',
      tierColor: '#C0C0C0',
      status: 'open',
      format: '1-Day Scramble',
      players: '18 teams',
      prize: '$2,500 pool',
      handicap: 'All levels',
      entryFee: '$150/player',
      spotsRemaining: 24,
      totalSpots: 72,
      features: [
        '4-person teams',
        'Closest to pin contests',
        'Lunch & beverages',
        'Team prizes',
      ],
      index: 1,
    },
    {
      name: 'Chicago Kickoff Classic',
      date: 'April 22, 2026',
      location: 'Chicago, IL',
      course: 'Cog Hill Golf & Country Club',
      image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=600&h=400&fit=crop',
      tier: 'Bronze Series',
      tierColor: '#CD7F32',
      status: 'open',
      format: '1-Day Stroke Play',
      players: '96 spots',
      prize: '$1,000 pool',
      handicap: 'All levels',
      entryFee: '$75/player',
      spotsRemaining: 45,
      totalSpots: 96,
      features: [
        'Where the Trail begins',
        'Breakfast included',
        'Awards for top 10',
        'Trail points awarded',
      ],
      index: 2,
    },
    {
      name: 'Santa Monica Finale',
      date: 'September 20, 2026',
      location: 'Santa Monica, CA',
      course: 'Riviera Country Club',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      tier: 'Gold Series',
      tierColor: '#FFD700',
      status: 'filling',
      format: '2-Day Stroke Play',
      players: '72 spots',
      prize: '$5,000 pool',
      handicap: '12 & under',
      entryFee: '$250/player',
      spotsRemaining: 8,
      totalSpots: 72,
      features: [
        'End of Trail celebration',
        'Ocean view course',
        'Gala dinner included',
        'Trail points awarded',
      ],
      index: 3,
    },
    {
      name: 'Route 66 Senior Open',
      date: 'July 10, 2026',
      location: 'St. Louis, MO',
      course: 'Forest Park Golf Course',
      image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=600&h=400&fit=crop',
      tier: 'Silver Series',
      tierColor: '#C0C0C0',
      status: 'open',
      format: '1-Day Stroke Play',
      players: '60 spots',
      prize: '$2,000 pool',
      handicap: '55+ only',
      entryFee: '$100/player',
      spotsRemaining: 32,
      totalSpots: 60,
      features: [
        'Age 55 and over',
        'Senior tees available',
        'Lunch included',
        'Age group prizes',
      ],
      index: 4,
    },
    {
      name: 'Trail Member Invitational',
      date: 'August 15-17, 2026',
      location: 'Albuquerque, NM',
      course: 'Paa-Ko Ridge Golf Club',
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&h=400&fit=crop',
      tier: 'Championship',
      tierColor: '#8B5CF6',
      status: 'soldout',
      format: '3-Day Championship',
      players: '48 spots',
      prize: '$7,500 pool',
      handicap: 'Invitation only',
      entryFee: '$400/player',
      spotsRemaining: 0,
      totalSpots: 48,
      features: [
        'Members only event',
        'All meals included',
        'Premium gift bag',
        'Championship trophy',
      ],
      index: 5,
    },
  ];

  // Filter and sort tournaments
  const tournaments = useMemo(() => {
    let filtered = [...allTournaments];
    
    // Apply filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter((t) => 
        t.tier.toLowerCase().includes(activeFilter)
      );
    }
    
    // Apply sort
    if (activeSort === 'date') {
      filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else if (activeSort === 'location') {
      filtered.sort((a, b) => a.location.localeCompare(b.location));
    } else if (activeSort === 'prize') {
      filtered.sort((a, b) => {
        const prizeA = parseInt(a.prize.replace(/[^0-9]/g, ''));
        const prizeB = parseInt(b.prize.replace(/[^0-9]/g, ''));
        return prizeB - prizeA;
      });
    }
    
    return filtered;
  }, [activeFilter, activeSort, allTournaments]);

  return (
    <section className="py-20" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-[#0F172A] mb-2"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3rem)' }}
          >
            Upcoming Events
          </h2>
          <p 
            className="tracking-[2px] text-[#FF6B35] uppercase"
            style={{ fontSize: '16px' }}
          >
            2026 TOURNAMENT SCHEDULE
          </p>
        </motion.div>

        {/* Filter & Sort Bar */}
        <FilterSortBar
          onFilterChange={setActiveFilter}
          onSortChange={setActiveSort}
          activeFilter={activeFilter}
          activeSort={activeSort}
        />

        {/* Tournament Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tournaments.map((tournament) => (
            <TournamentCard key={tournament.name} {...tournament} />
          ))}
        </div>
        
        {tournaments.length === 0 && (
          <div className="text-center py-12">
            <p 
              className="text-[#64748B]"
              style={{ fontSize: '18px' }}
            >
              No tournaments found. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
