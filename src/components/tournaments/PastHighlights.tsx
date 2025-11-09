import { motion } from 'motion/react';
import { Trophy, TrendingUp, Heart } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function PastHighlights() {
  const highlights = [
    {
      icon: Trophy,
      image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=600&h=400&fit=crop',
      event: '2025 Mother Road Championship',
      title: 'Championship Winner',
      winner: 'Michael Rodriguez',
      score: '65-68-133 (-11)',
      prize: '$10,000',
      quote: '"Playing the Trail tournaments has been the highlight of my golf career"',
    },
    {
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&h=400&fit=crop',
      event: 'Santa Monica Finale',
      title: 'Record Breaking',
      achievement: 'Course Record Broken',
      score: '62 (-10)',
      winner: 'Emma Thompson',
      note: 'First woman to win Gold Series event',
    },
    {
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1504195457 2-c25b5d6c113c?w=600&h=400&fit=crop',
      event: 'Route 66 Charity Classic',
      title: 'Charity Impact',
      amount: '$50,000 raised',
      beneficiary: 'Junior Golf Programs',
      participants: '120 players',
      note: 'Record charitable contribution',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[48px] max-md:text-[36px] text-[#0F172A] mb-2">
            Tournament Highlights
          </h2>
          <p className="text-[16px] tracking-[2px] text-[#FF6B35] uppercase">
            2025 SEASON RECAP
          </p>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.event}
              className="bg-[#F9FAFB] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative h-[200px] overflow-hidden">
                <ImageWithFallback
                  src={highlight.image}
                  alt={highlight.event}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF6B35] flex items-center justify-center">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[13px] text-[#FF6B35] uppercase tracking-wider mb-2">
                  {highlight.event}
                </p>
                <h3 className="text-[24px] text-[#0F172A] mb-4">
                  {highlight.title}
                </h3>

                {highlight.winner && (
                  <div className="mb-3">
                    <p className="text-[14px] text-[#64748B] mb-1">Winner</p>
                    <p className="text-[18px] text-[#0F172A]">{highlight.winner}</p>
                  </div>
                )}

                {highlight.score && (
                  <div className="mb-3">
                    <p className="text-[14px] text-[#64748B] mb-1">Score</p>
                    <p className="text-[16px] text-[#0F172A]">{highlight.score}</p>
                  </div>
                )}

                {highlight.prize && (
                  <div className="mb-3">
                    <p className="text-[14px] text-[#64748B] mb-1">Prize</p>
                    <p className="text-[20px] text-[#10B981]">{highlight.prize}</p>
                  </div>
                )}

                {highlight.achievement && (
                  <div className="mb-3">
                    <p className="text-[14px] text-[#64748B] mb-1">Achievement</p>
                    <p className="text-[16px] text-[#0F172A]">{highlight.achievement}</p>
                  </div>
                )}

                {highlight.amount && (
                  <div className="mb-3">
                    <p className="text-[14px] text-[#64748B] mb-1">Amount Raised</p>
                    <p className="text-[20px] text-[#10B981]">{highlight.amount}</p>
                  </div>
                )}

                {highlight.beneficiary && (
                  <div className="mb-3">
                    <p className="text-[14px] text-[#64748B] mb-1">Beneficiary</p>
                    <p className="text-[16px] text-[#0F172A]">{highlight.beneficiary}</p>
                  </div>
                )}

                {highlight.participants && (
                  <div className="mb-3">
                    <p className="text-[14px] text-[#64748B] mb-1">Participants</p>
                    <p className="text-[16px] text-[#0F172A]">{highlight.participants}</p>
                  </div>
                )}

                {highlight.quote && (
                  <div className="bg-white p-4 rounded-lg border-l-4 border-[#FF6B35] mt-4">
                    <p className="text-[14px] text-[#64748B] italic">
                      {highlight.quote}
                    </p>
                  </div>
                )}

                {highlight.note && !highlight.quote && (
                  <div className="mt-4">
                    <p className="text-[13px] text-[#FF6B35]">{highlight.note}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Link */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#" className="text-[16px] text-[#FF6B35] hover:underline">
            View All Past Results →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
