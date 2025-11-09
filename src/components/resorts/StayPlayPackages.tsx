import { motion } from 'motion/react';
import { Hotel, Flag, Coffee, Medal, Award } from 'lucide-react';
import { Button } from '../ui/button';

interface PackageCardProps {
  title: string;
  subtitle: string;
  image1: string;
  image2: string;
  badge: string;
  badgeColor: string;
  icons: { icon: string; text: string }[];
  originalPrice: string;
  packagePrice: string;
  perPersonPrice?: string;
  includes: string[];
  options?: {
    label: string;
    items: string[];
  };
  ctaText: string;
  ctaColor: string;
  isPopular?: boolean;
  index: number;
}

function PackageCard({
  title,
  subtitle,
  image1,
  image2,
  badge,
  badgeColor,
  icons,
  originalPrice,
  packagePrice,
  perPersonPrice,
  includes,
  options,
  ctaText,
  ctaColor,
  isPopular,
  index,
}: PackageCardProps) {
  return (
    <motion.div
      className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
        isPopular 
          ? 'shadow-2xl border-2 border-[#FF6B35] scale-105 max-lg:scale-100' 
          : 'shadow-lg border border-[#E5E7EB]'
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -8 }}
    >
      {/* Popular Ribbon */}
      {isPopular && (
        <div className="relative h-12 bg-gradient-to-r from-[#FF6B35] to-[#DC2626] flex items-center justify-center">
          <span className="text-[14px] tracking-[2px] text-white">
            🏅 MOST POPULAR
          </span>
        </div>
      )}

      {/* Split Image */}
      <div className="relative h-[220px] flex">
        <div 
          className="w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${image1})` }}
        />
        <div 
          className="w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${image2})` }}
        />
        {/* Overlay Badge */}
        <div className="absolute top-4 left-4">
          <div 
            className="px-4 py-2 rounded-full text-white text-[14px] backdrop-blur-sm"
            style={{ backgroundColor: badgeColor }}
          >
            {badge}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-[28px] text-[#0F172A] mb-2">{title}</h3>
        <p className="text-[16px] text-[#64748B] mb-4">{subtitle}</p>

        {/* Icon Row */}
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#E5E7EB]">
          {icons.map((item, idx) => {
            const IconMap: any = { Hotel, Flag, Coffee, Medal, Award };
            const IconComponent = IconMap[item.icon] || Hotel;
            return (
              <div key={idx} className="flex items-center gap-2">
                <IconComponent className="w-5 h-5 text-[#FF6B35]" />
                <span className="text-[13px] text-[#64748B]">{item.text}</span>
              </div>
            );
          })}
        </div>

        {/* Pricing */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[24px] text-[#94A3B8] line-through">{originalPrice}</span>
            <div className="px-3 py-1 rounded-full bg-[#10B981] text-white text-[12px]">
              Save ${parseInt(originalPrice.replace(/[^0-9]/g, '')) - parseInt(packagePrice.replace(/[^0-9]/g, ''))}
            </div>
          </div>
          <div className="text-[40px] bg-gradient-to-r from-[#FF6B35] to-[#DC2626] bg-clip-text text-transparent mb-2">
            {packagePrice}
          </div>
          {perPersonPrice && (
            <p className="text-[13px] text-[#64748B]">{perPersonPrice}</p>
          )}
        </div>

        {/* Includes */}
        <div className="space-y-2 mb-6">
          {includes.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-[#10B981] mt-1">✓</span>
              <span className="text-[14px] text-[#0F172A]">{item}</span>
            </div>
          ))}
        </div>

        {/* Options */}
        {options && (
          <div className="bg-[#F9FAFB] p-4 rounded-lg mb-6">
            <p className="text-[13px] text-[#64748B] mb-2">{options.label}</p>
            <ul className="space-y-1">
              {options.items.map((item, idx) => (
                <li key={idx} className="text-[12px] text-[#0F172A]">• {item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <Button 
          className="w-full h-[52px] text-white hover:shadow-xl transition-all"
          style={{
            background: ctaColor,
          }}
        >
          {ctaText}
        </Button>
      </div>
    </motion.div>
  );
}

export default function StayPlayPackages() {
  const packages: PackageCardProps[] = [
    {
      title: 'Weekend Escape',
      subtitle: '2 Nights + 36 Holes',
      image1: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop',
      image2: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=400&h=300&fit=crop',
      badge: 'SAVE $125',
      badgeColor: '#10B981',
      icons: [
        { icon: 'Hotel', text: '2 nights' },
        { icon: 'Flag', text: '2 rounds' },
        { icon: 'Coffee', text: 'Breakfast' },
      ],
      originalPrice: '$475',
      packagePrice: '$349',
      perPersonPrice: '$175/person (based on double occupancy)',
      includes: [
        '2 nights deluxe accommodations',
        '2 rounds of golf (18 holes each)',
        'Daily breakfast buffet',
        'Premium cart rental',
        'Golf club storage',
        'Welcome gift bag',
      ],
      options: {
        label: 'Select Options:',
        items: ['Choose resort (5 participating properties)', 'Date picker', 'Guests selector'],
      },
      ctaText: 'Book Package',
      ctaColor: 'linear-gradient(to right, #FF6B35, #DC2626)',
      index: 0,
    },
    {
      title: 'Silver Trail Bundle',
      subtitle: '5 Nights + Silver Medallion Journey',
      image1: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop',
      image2: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400&h=300&fit=crop',
      badge: 'SAVE $600',
      badgeColor: '#C0C0C0',
      icons: [
        { icon: 'Hotel', text: '5 nights' },
        { icon: 'Flag', text: '33 rounds' },
        { icon: 'Medal', text: 'Medal' },
      ],
      originalPrice: '$2,499',
      packagePrice: '$1,899',
      includes: [
        '5 nights at premium Trail resorts',
        'Any 33 courses (Silver Medallion eligible)',
        'Breakfast & dinner included',
        'Presidential Silver Medallion',
        'Official certificate & photos',
        'Trail progress concierge',
        'Commemorative apparel',
        'Resort upgrades when available',
      ],
      options: {
        label: 'Flexible Options:',
        items: [
          '"Build Your Own Route" customization',
          'Split stays across states',
          'Valid for 6 months',
        ],
      },
      ctaText: 'Start Your Journey',
      ctaColor: 'linear-gradient(to right, #FF6B35, #DC2626)',
      isPopular: true,
      index: 1,
    },
    {
      title: 'Gold Champion Experience',
      subtitle: '10 Nights + Complete the Trail',
      image1: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      image2: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=400&h=300&fit=crop',
      badge: 'ULTIMATE',
      badgeColor: '#FFD700',
      icons: [
        { icon: 'Hotel', text: '10 nights' },
        { icon: 'Flag', text: '66 rounds' },
        { icon: 'Award', text: 'Gold' },
      ],
      originalPrice: '$4,999',
      packagePrice: '$3,999',
      includes: [
        '10 nights luxury accommodations',
        'All 66 courses (Gold Medallion)',
        'All meals included (breakfast, lunch, dinner)',
        'Presidential Gold Medallion & ceremony',
        'Professional photography package',
        'Private concierge service',
        'Resort spa treatments',
        'Exclusive Trail merchandise',
        'Documentary film feature',
        'VIP Trail member lifetime status',
      ],
      options: {
        label: 'Exclusive Perks:',
        items: [
          'Private transfer between resorts',
          'Priority check-in/late checkout',
          'Room upgrades guaranteed',
        ],
      },
      ctaText: 'Reserve Your Legacy',
      ctaColor: 'linear-gradient(to right, #FFD700, #F97316)',
      index: 2,
    },
  ];

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: '#F5F1E8' }}
    >
      {/* Route 66 Shield Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: `${(i % 4) * 25}%`,
              left: `${Math.floor(i / 4) * 20}%`,
              width: '100px',
              height: '100px',
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M50 10 L80 25 L80 65 L50 90 L20 65 L20 25 Z\' fill=\'%23000\' /%3E%3C/svg%3E")',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[48px] max-md:text-[36px] text-[#0F172A] mb-2">
            Stay & Play Packages
          </h2>
          <p className="text-[16px] tracking-[2px] text-[#FF6B35] uppercase mb-4">
            BOOK TOGETHER, SAVE BIG
          </p>
          <p className="text-[18px] text-[#64748B] max-w-[700px] mx-auto">
            Combine your accommodation with tee times for the ultimate Trail experience
          </p>
        </motion.div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-lg:max-w-[500px] max-lg:mx-auto">
          {packages.map((pkg) => (
            <PackageCard key={pkg.title} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
