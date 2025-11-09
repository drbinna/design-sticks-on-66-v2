import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Button } from '../ui/button';

interface PackageCardProps {
  name: string;
  tier: string;
  gradient: string;
  icon: string;
  price: string;
  descriptor: string;
  originalPrice?: string;
  features: string[];
  stats: { label: string; value: string }[];
  savingsBadge?: string;
  specialBadge?: string;
  index: number;
  popular?: boolean;
}

function PackageCard({
  name,
  tier,
  gradient,
  icon,
  price,
  descriptor,
  originalPrice,
  features,
  stats,
  savingsBadge,
  specialBadge,
  index,
  popular,
}: PackageCardProps) {
  return (
    <motion.div
      className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
        popular ? 'border-[#FF6B35] scale-105' : 'border-[#E5E7EB]'
      } hover:border-[#FF6B35] group`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
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
          <h3 
            className="text-white"
            style={{ fontSize: '20px' }}
          >
            {name}
          </h3>
          <p 
            className="text-white/80 uppercase tracking-wider"
            style={{ fontSize: '11px' }}
          >
            {tier}
          </p>
        </div>
        <div 
          className="absolute top-2 right-2 opacity-20"
          style={{ fontSize: '36px' }}
        >
          {icon}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white p-6 border-b border-[#E5E7EB]">
        {originalPrice && (
          <div className="flex items-center gap-2 mb-1">
            <span 
              className="text-[#94A3B8] line-through"
              style={{ fontSize: '16px' }}
            >
              {originalPrice}
            </span>
            {savingsBadge && (
              <span 
                className="px-2 py-1 bg-[#10B981] text-white rounded-full"
                style={{ fontSize: '11px' }}
              >
                {savingsBadge}
              </span>
            )}
          </div>
        )}
        <div 
          className="bg-gradient-to-r from-[#FF6B35] to-[#DC2626] bg-clip-text text-transparent"
          style={{ fontSize: '40px' }}
        >
          {price}
        </div>
        <p 
          className="text-[#64748B]"
          style={{ fontSize: '13px' }}
        >
          {descriptor}
        </p>
      </div>

      {/* Stats Bar */}
      <div className="bg-[#F9FAFB] px-6 py-3 border-b border-[#E5E7EB]">
        <div className="grid grid-cols-3 gap-2 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div 
                className="text-[#0F172A]"
                style={{ fontSize: '14px' }}
              >
                {stat.value}
              </div>
              <div 
                className="text-[#64748B]"
                style={{ fontSize: '11px' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features List */}
      <div className="p-6">
        <div className="space-y-2 mb-4">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <div className="w-4 h-4 rounded-full bg-[#10B981]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-[#10B981]" />
              </div>
              <span 
                className="text-[#0F172A]"
                style={{ fontSize: '13px' }}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="p-6 pt-0">
        <Button className="w-full h-[44px] bg-gradient-to-r from-[#FF6B35] to-[#DC2626] text-white hover:shadow-xl transition-all">
          Select Package
        </Button>
      </div>
    </motion.div>
  );
}

export default function PackagesGridSimple() {
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
        '5% pro shop discount',
        'Route 66 merchandise kit',
      ],
      stats: [
        { label: 'Rounds', value: '15' },
        { label: 'Months', value: '6' },
        { label: 'States', value: 'All' },
      ],
      savingsBadge: 'Save $150',
      specialBadge: 'BEST VALUE',
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
      features: [
        'Presidential Silver Medallion',
        'Official certificate & photo',
        'All 33 courses required for Silver',
        'Valid for 12 months',
        'Premium cart & GPS included',
        '10% pro shop discount',
        'Priority tee times',
        'Trail Hall of Fame entry',
      ],
      stats: [
        { label: 'Rounds', value: '33' },
        { label: 'Months', value: '12' },
        { label: 'States', value: '8' },
      ],
      savingsBadge: 'Save $500',
      specialBadge: 'MOST POPULAR',
      popular: true,
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
      features: [
        'Presidential Gold Medallion',
        'Personal ceremony & pro photos',
        'All 66 courses - complete the Trail',
        'Valid for 18 months',
        'VIP premium cart & GPS',
        '20% pro shop discount',
        'Free guest pass (5 rounds)',
        'Lifetime Trail membership',
        'Championship Wall recognition',
      ],
      stats: [
        { label: 'Rounds', value: '66' },
        { label: 'Months', value: '18' },
        { label: 'States', value: '8' },
      ],
      savingsBadge: 'Save $1,100+',
      specialBadge: 'LEGENDARY',
      index: 3,
    },
  ];

  return (
    <section className="py-16 bg-[#F5F1E8]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-[#0F172A] mb-2" 
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Trail Packages
          </h2>
          <p 
            className="uppercase tracking-[3px] text-[#FF6B35] mb-4"
            style={{ fontSize: '16px' }}
          >
            Find Your Perfect Adventure
          </p>
          <p 
            className="text-[#64748B] max-w-[700px] mx-auto"
            style={{ fontSize: '18px' }}
          >
            All packages include cart rental, GPS, and Trail progress tracking
          </p>
        </motion.div>

        {/* Package Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} {...pkg} />
          ))}
        </div>

        {/* Additional Options Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p 
            className="text-[#64748B]"
            style={{ fontSize: '15px' }}
          >
            Looking for couples or family packages?{' '}
            <button className="text-[#FF6B35] hover:underline">
              Contact us for custom options
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
