import { motion } from 'motion/react';
import { Medal, Award, Trophy, Crown } from 'lucide-react';

export default function TournamentTypes() {
  const types = [
    {
      icon: Medal,
      iconColor: '#CD7F32',
      bgGradient: 'linear-gradient(135deg, #CD7F32 0%, #B8860B 100%)',
      title: 'Bronze Series',
      tagline: 'Weekend Warrior Events',
      description: 'Casual competition for recreational golfers',
      details: [
        '6-8 events annually',
        '$50-$100 entry fee',
        'All handicaps welcome',
        '1-day format',
        'Local courses',
      ],
      cta: 'View Bronze Events →',
    },
    {
      icon: Award,
      iconColor: '#C0C0C0',
      bgGradient: 'linear-gradient(135deg, #C0C0C0 0%, #A8A8A8 100%)',
      title: 'Silver Series',
      tagline: 'Competitive Regional Play',
      description: 'Serious competition with substantial prizes',
      details: [
        '8-10 events annually',
        '$100-$200 entry fee',
        'Handicap 15 & under',
        '1-2 day format',
        'Premium courses',
      ],
      cta: 'View Silver Events →',
    },
    {
      icon: Trophy,
      iconColor: '#FFD700',
      bgGradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
      title: 'Gold Series',
      tagline: 'Championship Level',
      description: 'Elite tournaments for top competitors',
      details: [
        '4-6 events annually',
        '$150-$300 entry fee',
        'Handicap 10 & under',
        '2-3 day format',
        'Championship courses',
      ],
      cta: 'View Gold Events →',
    },
    {
      icon: Crown,
      iconColor: '#8B5CF6',
      bgGradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
      title: 'Special Events',
      tagline: 'Unique Experiences',
      description: 'Charity, corporate, and invitation-only',
      details: [
        'Pro-am tournaments',
        'Charity fundraisers',
        'Corporate challenges',
        'Member invitationals',
        'Custom formats',
      ],
      cta: 'View Special Events →',
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
          <h2 
            className="text-[#0F172A] mb-2"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3rem)' }}
          >
            Find Your Competition
          </h2>
          <p 
            className="tracking-[2px] text-[#FF6B35] uppercase"
            style={{ fontSize: '16px' }}
          >
            FOUR SERIES TO MATCH YOUR GAME
          </p>
        </motion.div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((type, index) => (
            <motion.div
              key={type.title}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Header with Gradient */}
              <div
                className="p-8 text-center text-white relative overflow-hidden"
                style={{ background: type.bgGradient }}
              >
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <type.icon className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h3 
                  className="mb-2"
                  style={{ fontSize: '24px' }}
                >
                  {type.title}
                </h3>
                <p 
                  className="opacity-90"
                  style={{ fontSize: '14px' }}
                >
                  {type.tagline}
                </p>
              </div>

              {/* Content */}
              <div className="bg-white p-6">
                <p 
                  className="text-[#64748B] mb-6 leading-relaxed"
                  style={{ fontSize: '15px' }}
                >
                  {type.description}
                </p>

                {/* Details */}
                <ul className="space-y-2 mb-6">
                  {type.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#10B981] mt-1">•</span>
                      <span 
                        className="text-[#0F172A]"
                        style={{ fontSize: '14px' }}
                      >
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#"
                  className="hover:underline flex items-center justify-center gap-2"
                  style={{ color: type.iconColor, fontSize: '14px' }}
                >
                  {type.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
