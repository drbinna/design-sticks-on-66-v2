import { motion } from 'motion/react';
import { Check, Calendar, MapPin, Users, Heart, Baby } from 'lucide-react';
import { Button } from '../ui/button';

interface PackageCardProps {
  name: string;
  tier: string;
  gradient: string;
  icon: string;
  price: string;
  descriptor: string;
  originalPrice?: string;
  monthlyPrice?: string;
  features: string[];
  stats: { label: string; value: string }[];
  savingsBadge?: string;
  specialBadge?: string;
  specialOffer?: string;
  trustIndicator?: string;
  index: number;
}

function PackageCard({
  name,
  tier,
  gradient,
  icon,
  price,
  descriptor,
  originalPrice,
  monthlyPrice,
  features,
  stats,
  savingsBadge,
  specialBadge,
  specialOffer,
  trustIndicator,
  index,
}: PackageCardProps) {
  return (
    <motion.div
      className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5E7EB] hover:border-[#FF6B35] group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Special Badge */}
      {specialBadge && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-[#DC2626] text-white text-[10px] uppercase tracking-wider rounded-full shadow-lg">
            {specialBadge}
          </span>
        </div>
      )}

      {/* Header Section */}
      <div className={`h-[70px] ${gradient} p-4 relative overflow-hidden`}>
        <div className="relative z-10">
          <h3 className="text-[20px] text-white">{name}</h3>
          <p className="text-[11px] text-white/80 uppercase tracking-wider">{tier}</p>
        </div>
        <div className="absolute top-2 right-2 text-[36px] opacity-20">
          {icon}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white p-4 border-b border-[#E5E7EB]">
        {originalPrice && (
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[16px] text-[#94A3B8] line-through">{originalPrice}</span>
            {savingsBadge && (
              <span className="px-2 py-1 bg-[#10B981] text-white text-[11px] rounded-full">
                {savingsBadge}
              </span>
            )}
          </div>
        )}
        <div className="text-[40px] bg-gradient-to-r from-[#FF6B35] to-[#DC2626] bg-clip-text text-transparent">
          {price}
        </div>
        <p className="text-[13px] text-[#64748B]">{descriptor}</p>
        {monthlyPrice && (
          <p className="text-[11px] text-[#94A3B8] mt-1">{monthlyPrice}</p>
        )}
      </div>

      {/* Features List */}
      <div className="p-4">
        <div className="space-y-2 mb-3">
          {features.slice(0, 5).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <div className="w-4 h-4 rounded-full bg-[#10B981]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-[#10B981]" />
              </div>
              <span className="text-[13px] text-[#0F172A]">{feature}</span>
            </div>
          ))}
        </div>
        {features.length > 5 && (
          <button className="text-[12px] text-[#FF6B35] hover:underline">
            +{features.length - 5} more features →
          </button>
        )}
      </div>

      {/* Stats Bar */}
      <div className="bg-[#F9FAFB] px-4 py-3 border-t border-[#E5E7EB]">
        <div className="grid grid-cols-3 gap-2 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-[14px] text-[#0F172A]">{stat.value}</div>
              <div className="text-[11px] text-[#64748B]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="p-4">
        <Button className="w-full h-[44px] bg-gradient-to-r from-[#FF6B35] to-[#DC2626] text-white hover:shadow-xl transition-all">
          Select Package
        </Button>
      </div>
    </motion.div>
  );
}

export default function PackagesGrid() {
  const packages: PackageCardProps[] = [
    {
      name: 'Starter Pass',
      tier: 'BRONZE TIER',
      gradient: 'bg-gradient-to-br from-[#CD7F32] to-[#B87333]',
      icon: '🏌️',
      price: '$99',
      descriptor: '5 rounds package',
      features: [
        'Any 5 courses along the Trail',
        'Valid for 90 days',
        'Standard cart included',
        'GPS device rental',
        'Basic scorecard tracking',
        'Welcome kit',
      ],
      stats: [
        { label: 'Rounds', value: '5' },
        { label: 'Days', value: '90' },
        { label: 'States', value: 'All' },
      ],
      savingsBadge: 'Save $30',
      index: 0,
    },
    {
      name: 'Weekend Warrior',
      tier: 'ORANGE TIER',
      gradient: 'bg-gradient-to-br from-[#FF6B35] to-[#DC2626]',
      icon: '⛳',
      price: '$399',
      descriptor: '15 rounds package',
      originalPrice: '$450',
      features: [
        'Any 15 courses along the Trail',
        'Valid for 6 months',
        'Premium cart included',
        'GPS device included',
        'Advanced stat tracking',
        '5% pro shop discount',
        'Route 66 merchandise kit',
        'Digital trail map',
      ],
      stats: [
        { label: 'Rounds', value: '15' },
        { label: 'Months', value: '6' },
        { label: 'States', value: 'All' },
      ],
      savingsBadge: 'Save $150',
      specialBadge: '⭐ BEST VALUE',
      specialOffer: 'Free course preview guide',
      index: 1,
    },
    {
      name: 'Silver Trail Pass',
      tier: 'SILVER TIER',
      gradient: 'bg-gradient-to-br from-[#C0C0C0] to-[#A8A8A8]',
      icon: '🥈',
      price: '$1,299',
      descriptor: '33 rounds package',
      originalPrice: '$1,799',
      monthlyPrice: '$108/month × 12',
      features: [
        'Presidential Silver Medallion',
        'Official certificate & commemorative photo',
        'All 33 courses required for Silver',
        'Valid for 12 months',
        'Premium cart included',
        'GPS device included',
        '10% pro shop discount',
        'Priority tee times',
        'Welcome package ($150 value)',
        'Trail progress app premium',
        'Exclusive Silver member events',
        'Name in Trail Hall of Fame',
      ],
      stats: [
        { label: 'Rounds', value: '33' },
        { label: 'Months', value: '12' },
        { label: 'States', value: '8' },
      ],
      savingsBadge: 'Save $500',
      specialBadge: '🏅 MOST POPULAR',
      trustIndicator: 'Most chosen by serious golfers',
      index: 2,
    },
    {
      name: 'Gold Champion Pass',
      tier: 'GOLD TIER',
      gradient: 'bg-gradient-to-br from-[#FFD700] to-[#FFA500]',
      icon: '🏆',
      price: '$2,499',
      descriptor: 'All 66 rounds',
      originalPrice: '$3,600',
      monthlyPrice: '$208/month × 12',
      features: [
        'Presidential Gold Medallion',
        'Personal ceremony & professional photos',
        'All 66 courses - complete the Trail',
        'Valid for 18 months',
        'VIP premium cart included',
        'Top-tier GPS device',
        '20% pro shop discount',
        'VIP tee time access',
        'Free guest pass (5 rounds)',
        'Commemorative apparel package',
        'Trail documentary feature',
        'Lifetime Trail membership',
        'Name on Route 66 Championship Wall',
        'Annual reunion event invitation',
      ],
      stats: [
        { label: 'Rounds', value: '66' },
        { label: 'Months', value: '18' },
        { label: 'States', value: '8' },
      ],
      savingsBadge: 'Save $1,100+',
      specialBadge: '👑 LEGENDARY',
      specialOffer: 'White House photo opportunity',
      index: 3,
    },
    {
      name: 'Couples Pass',
      tier: 'ROMANTIC ORANGE',
      gradient: 'bg-gradient-to-br from-[#FF6B35] to-[#FF8C61]',
      icon: '⛳⛳',
      price: '$1,899',
      descriptor: '30 rounds (15 each)',
      features: [
        '15 rounds for each player',
        'Valid for 12 months',
        'Shared cart included',
        'Couples scorecard tracking',
        'Anniversary round discount',
        'Romantic dinner package (1x)',
        'Couples photo shoot',
        'Trail couples leaderboard',
      ],
      stats: [
        { label: 'Rounds', value: '30' },
        { label: 'Months', value: '12' },
        { label: 'Players', value: '2' },
      ],
      savingsBadge: 'Save $380',
      specialBadge: 'PERFECT FOR TWO',
      index: 4,
    },
    {
      name: 'Family Fun Pass',
      tier: 'GREEN TIER',
      gradient: 'bg-gradient-to-br from-[#10B981] to-[#059669]',
      icon: '👨‍👩‍👧‍👦',
      price: '$999',
      descriptor: '20 rounds (shared)',
      features: [
        '20 rounds for up to 4 family members',
        'Valid for 12 months',
        'Family cart included',
        'Junior club rental free',
        'Kids play free (under 12)',
        'Family photo package',
        'Educational golf clinics',
        'Family tournament entry',
      ],
      stats: [
        { label: 'Rounds', value: '20' },
        { label: 'Months', value: '12' },
        { label: 'Players', value: '4' },
      ],
      specialOffer: 'Perfect for creating memories',
      specialBadge: 'FAMILY FRIENDLY',
      index: 5,
    },
  ];

  return (
    <section className="py-16 bg-[#F5F1E8]">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[48px] max-md:text-[36px] text-[#0F172A] mb-2">All Trail Packages</h2>
          <p className="text-[16px] uppercase tracking-[3px] text-[#FF6B35] mb-4">
            Find Your Perfect Adventure
          </p>
          <p className="text-[18px] text-[#64748B] max-w-[800px] mx-auto">
            Every package includes cart rental, GPS, and Trail progress tracking
          </p>
        </motion.div>

        {/* Package Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
