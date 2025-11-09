import { motion } from 'motion/react';
import { Building2, Trophy, PartyPopper } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

export default function GroupPackages() {
  const groupPackages = [
    {
      icon: Building2,
      title: 'Corporate Team Building',
      badge: '12-24 PLAYERS',
      price: 'From $89/person',
      minimum: 'Minimum: 12 players',
      includes: [
        '18 holes at choice of course',
        'Shared carts',
        'Lunch buffet included',
        'Team photo package',
        'Branded scorecards',
        'Awards ceremony setup',
        'Dedicated coordinator',
        'Optional team challenges',
      ],
      customization: [
        'Add breakfast: +$15/person',
        'Add dinner: +$25/person',
        'Trophies & prizes: +$200',
        'Company logo items: Custom quote',
      ],
      cta: 'Request Corporate Quote',
      secondaryCta: 'Download Corporate Packet PDF',
    },
    {
      icon: Trophy,
      title: 'Full Tournament',
      badge: '24-72 PLAYERS',
      price: 'From $125/person',
      minimum: 'Minimum: 24 players',
      featured: true,
      includes: [
        'Exclusive course booking',
        'Premium cart fleet',
        'Professional scoring system',
        'Live leaderboard',
        'Opening & closing ceremonies',
        'Lunch & dinner buffets',
        'Full photo & video coverage',
        'Custom trophies (Top 3)',
        'Player gift bags',
        'Route 66 tournament banners',
        'Event manager',
        'Post-tournament celebration',
      ],
      customization: [
        'Multiple format options',
        'Sponsor opportunities',
        'Custom branding',
        'Bar packages',
      ],
      cta: 'Start Planning Now',
      secondaryCta: 'Check Availability',
    },
    {
      icon: PartyPopper,
      title: 'Bachelor/Bachelorette Party',
      badge: '8-16 PLAYERS',
      price: 'From $119/person',
      minimum: 'Minimum: 8 players',
      includes: [
        '18 holes on premium course',
        'Novelty tournament format',
        'Shared cart with drinks cooler',
        'Lunch & beverage package',
        'Group photo session',
        'Custom bachelor/bachelorette gear',
        'Fun prizes & games',
        'Post-round celebration access',
        'Designated party coordinator',
      ],
      customization: [
        'Cigar package: +$30/person',
        'Premium bar: +$40/person',
        'DJ for celebration: +$500',
      ],
      cta: 'Book Bachelor Party',
      secondaryCta: 'Call for Custom Quote',
    },
  ];

  return (
    <section className="py-16 bg-[#0F172A] relative overflow-hidden">
      {/* Golf course silhouette overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 900">
          <path d="M0,400 Q360,300 720,400 T1440,400 L1440,900 L0,900 Z" fill="currentColor" className="text-[#10B981]" />
        </svg>
      </div>

      {/* Route 66 highway lines */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-[#FF6B35]"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1440px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[48px] max-md:text-[36px] text-white mb-2">Group Adventures</h2>
          <p className="text-[14px] uppercase tracking-[3px] text-[#FF6B35]">
            Corporate Outings • Tournaments • Bachelor Parties
          </p>
        </motion.div>

        {/* 3 Group Package Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {groupPackages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`relative bg-[#1E293B]/80 backdrop-blur-sm rounded-2xl overflow-hidden border-2 ${
                pkg.featured
                  ? 'border-[#FFD700] md:scale-105'
                  : 'border-[#FF6B35]/30'
              } hover:border-[#FF6B35] transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              {/* Featured Badge */}
              {pkg.featured && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-2 bg-[#DC2626] text-white text-[10px] uppercase tracking-wider rounded-full shadow-lg">
                    ⭐ Most Popular
                  </span>
                </div>
              )}

              {/* Glow effect for featured */}
              {pkg.featured && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/20 to-transparent pointer-events-none"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}

              {/* Header */}
              <div className="p-8 max-md:p-6 text-center border-b border-white/10">
                <pkg.icon className="w-16 h-16 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="text-[24px] max-md:text-[20px] text-white mb-2">{pkg.title}</h3>
                <div className="inline-block px-3 py-1 bg-[#FF6B35]/20 border border-[#FF6B35] rounded-full">
                  <span className="text-[12px] text-[#FF6B35] uppercase tracking-wider">
                    {pkg.badge}
                  </span>
                </div>
              </div>

              {/* Pricing */}
              <div className="p-8 max-md:p-6 text-center border-b border-white/10">
                <div className="text-[40px] max-md:text-[32px] text-[#FF6B35] mb-2">{pkg.price}</div>
                <p className="text-[14px] text-[#94A3B8]">{pkg.minimum}</p>
              </div>

              {/* Includes */}
              <div className="p-8 max-md:p-6">
                <h4 className="text-[14px] uppercase tracking-wider text-white/60 mb-4">Includes:</h4>
                <div className="space-y-2 mb-6">
                  {pkg.includes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[14px] text-white/80">
                      <span className="text-[#10B981] flex-shrink-0 mt-1">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Customization */}
                <h4 className="text-[14px] uppercase tracking-wider text-white/60 mb-3">Customize:</h4>
                <div className="space-y-2 mb-6">
                  {pkg.customization.map((item, idx) => (
                    <div key={idx} className="text-[13px] text-[#94A3B8]">
                      • {item}
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="space-y-3">
                  <Button className="w-full h-[50px] bg-gradient-to-r from-[#FF6B35] to-[#DC2626] text-white hover:shadow-xl">
                    {pkg.cta}
                  </Button>
                  <button className="w-full text-[14px] text-[#FF6B35] hover:underline">
                    {pkg.secondaryCta}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Group Inquiry Form */}
        <motion.div
          className="max-w-[800px] mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-md:p-6 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[24px] text-white text-center mb-2">
            Can't find what you need?
          </h3>
          <p className="text-[16px] text-[#94A3B8] text-center mb-6">
            Let's create something special.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <Input placeholder="Name" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
            <Input placeholder="Email" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
            <Input placeholder="Phone" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
            <Input placeholder="Group size" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
          </div>
          <Input placeholder="Preferred date" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 mb-4" />
          <Textarea
            placeholder="Tell us about your event..."
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 mb-4 min-h-[120px]"
          />
          <Button className="w-full h-[50px] bg-gradient-to-r from-[#FF6B35] to-[#DC2626] text-white hover:shadow-xl">
            Get Custom Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
