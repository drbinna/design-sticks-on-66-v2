import { motion } from 'motion/react';
import { useState } from 'react';
import { Trophy, Medal, Award, ArrowUpDown } from 'lucide-react';

export default function PrizesLeaderboard() {
  const [sortColumn, setSortColumn] = useState<'points' | 'events' | 'winnings'>('points');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  
  const baseLeaderboard = [
    { rank: 1, name: 'John Smith', points: 2450, events: 12, winnings: '$8,500' },
    { rank: 2, name: 'Sarah Johnson', points: 2320, events: 10, winnings: '$6,200' },
    { rank: 3, name: 'Mike Davis', points: 2180, events: 11, winnings: '$5,800' },
    { rank: 4, name: 'Emma Thompson', points: 2050, events: 9, winnings: '$4,900' },
    { rank: 5, name: 'David Rodriguez', points: 1980, events: 10, winnings: '$4,500' },
    { rank: 6, name: 'Lisa Chen', points: 1850, events: 8, winnings: '$3,800' },
    { rank: 7, name: 'James Wilson', points: 1720, events: 9, winnings: '$3,400' },
    { rank: 8, name: 'Maria Garcia', points: 1680, events: 7, winnings: '$3,100' },
    { rank: 9, name: 'Robert Brown', points: 1590, events: 8, winnings: '$2,900' },
    { rank: 10, name: 'Jennifer Lee', points: 1520, events: 7, winnings: '$2,600' },
  ];
  
  const handleSort = (column: 'points' | 'events' | 'winnings') => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('desc');
    }
  };
  
  const leaderboard = [...baseLeaderboard].sort((a, b) => {
    let aValue: number, bValue: number;
    
    if (sortColumn === 'points') {
      aValue = a.points;
      bValue = b.points;
    } else if (sortColumn === 'events') {
      aValue = a.events;
      bValue = b.events;
    } else {
      aValue = parseInt(a.winnings.replace(/[^0-9]/g, ''));
      bValue = parseInt(b.winnings.replace(/[^0-9]/g, ''));
    }
    
    return sortDirection === 'desc' ? bValue - aValue : aValue - bValue;
  });

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0F172A' }}>
      {/* Trophy Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <Trophy
            key={i}
            className="absolute w-12 h-12 text-white"
            style={{
              left: `${(i % 5) * 25}%`,
              top: `${Math.floor(i / 5) * 30}%`,
              transform: `rotate(${i * 15}deg)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Prize Structure */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[40px] max-md:text-[32px] text-white mb-8">
              Win Big on the Trail
            </h2>

            {/* Prize Breakdown */}
            <div
              className="rounded-2xl p-8 mb-8"
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <h3 className="text-[24px] text-white mb-6">Typical Prize Distribution</h3>

              <div className="space-y-4 mb-8">
                {[
                  { icon: Trophy, place: '1st Place', percentage: '40% of pool', color: '#FFD700' },
                  { icon: Medal, place: '2nd Place', percentage: '25% of pool', color: '#C0C0C0' },
                  { icon: Award, place: '3rd Place', percentage: '15% of pool', color: '#CD7F32' },
                  { icon: Award, place: '4th-5th', percentage: '10% of pool each', color: '#94A3B8' },
                ].map((prize, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <prize.icon className="w-8 h-8" style={{ color: prize.color }} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[16px] text-white">{prize.place}</span>
                        <span className="text-[16px]" style={{ color: prize.color }}>
                          {prize.percentage}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6">
                <h4 className="text-[18px] text-white mb-4">Additional Prizes</h4>
                <ul className="space-y-2">
                  {[
                    'Closest to pin',
                    'Longest drive',
                    'Low net/gross',
                    'Team competitions',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[14px] text-[#94A3B8]">
                      <span className="text-[#FF6B35]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Annual Championship */}
            <div className="bg-gradient-to-r from-[#FF6B35] to-[#DC2626] rounded-2xl p-6">
              <h3 className="text-[20px] text-white mb-3">Annual Championship</h3>
              <ul className="space-y-2">
                {[
                  'Top 32 Trail tournament players qualify',
                  'Grand prize: $25,000',
                  'Presidential Medallion ceremony',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[14px] text-white">
                    <span className="mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Side: Leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-[40px] max-md:text-[32px] text-white mb-2">
              2026 Season Leaders
            </h2>
            <p className="text-[14px] tracking-[2px] text-[#FF6B35] uppercase mb-8">
              OVERALL POINTS STANDINGS
            </p>

            {/* Leaderboard Table */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <table className="w-full">
                <thead>
                  <tr className="bg-white/10">
                    <th className="text-left p-4 text-[13px] text-[#94A3B8] uppercase tracking-wider">
                      Rank
                    </th>
                    <th className="text-left p-4 text-[13px] text-[#94A3B8] uppercase tracking-wider">
                      Player
                    </th>
                    <th 
                      className="text-right p-4 text-[13px] text-[#94A3B8] uppercase tracking-wider cursor-pointer hover:text-[#FF6B35] transition-colors group"
                      onClick={() => handleSort('points')}
                      role="button"
                      tabIndex={0}
                      aria-label="Sort by points"
                      onKeyDown={(e) => e.key === 'Enter' && handleSort('points')}
                    >
                      <div className="flex items-center justify-end gap-1">
                        Points
                        <ArrowUpDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </th>
                    <th 
                      className="text-right p-4 text-[13px] text-[#94A3B8] uppercase tracking-wider max-md:hidden cursor-pointer hover:text-[#FF6B35] transition-colors group"
                      onClick={() => handleSort('events')}
                      role="button"
                      tabIndex={0}
                      aria-label="Sort by events"
                      onKeyDown={(e) => e.key === 'Enter' && handleSort('events')}
                    >
                      <div className="flex items-center justify-end gap-1">
                        Events
                        <ArrowUpDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </th>
                    <th 
                      className="text-right p-4 text-[13px] text-[#94A3B8] uppercase tracking-wider max-md:hidden cursor-pointer hover:text-[#FF6B35] transition-colors group"
                      onClick={() => handleSort('winnings')}
                      role="button"
                      tabIndex={0}
                      aria-label="Sort by winnings"
                      onKeyDown={(e) => e.key === 'Enter' && handleSort('winnings')}
                    >
                      <div className="flex items-center justify-end gap-1">
                        Winnings
                        <ArrowUpDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((player, index) => (
                    <motion.tr
                      key={player.rank}
                      className="border-t border-white/10 hover:bg-[#FF6B35]/10 transition-colors cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      tabIndex={0}
                      role="button"
                      aria-label={`View ${player.name}'s profile`}
                      onKeyDown={(e) => e.key === 'Enter' && console.log(`View ${player.name}`)}
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          {player.rank <= 3 && (
                            <Trophy
                              className="w-4 h-4"
                              style={{
                                color:
                                  player.rank === 1
                                    ? '#FFD700'
                                    : player.rank === 2
                                    ? '#C0C0C0'
                                    : '#CD7F32',
                              }}
                            />
                          )}
                          <span className="text-[16px] text-white">{player.rank}</span>
                        </div>
                      </td>
                      <td className="p-4 text-[15px] text-white">{player.name}</td>
                      <td className="p-4 text-right text-[15px] text-[#FF6B35]">
                        {player.points.toLocaleString()}
                      </td>
                      <td className="p-4 text-right text-[14px] text-[#94A3B8] max-md:hidden">
                        {player.events}
                      </td>
                      <td className="p-4 text-right text-[14px] text-[#10B981] max-md:hidden">
                        {player.winnings}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CTA */}
            <div className="text-center mt-6">
              <a href="#" className="text-[14px] text-[#FF6B35] hover:underline">
                View Full Leaderboard →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
