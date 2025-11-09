import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';
import { Button } from '../ui/button';

export default function ComparisonTable() {
  const packages = [
    { name: 'Starter', price: '$99', icon: '🏌️' },
    { name: 'Weekend Warrior', price: '$399', icon: '⛳' },
    { name: 'Silver Trail', price: '$1,299', icon: '🥈' },
    { name: 'Gold Champion', price: '$2,499', icon: '🏆' },
    { name: 'Couples', price: '$1,899', icon: '⛳⛳' },
    { name: 'Family Fun', price: '$999', icon: '👨‍👩‍👧‍👦' },
  ];

  const featureGroups = [
    {
      category: 'Basics',
      features: [
        { name: 'Number of rounds', values: ['5', '15', '33', '66', '30 (15 each)', '20 (shared)'] },
        { name: 'Validity period', values: ['90 days', '6 months', '12 months', '18 months', '12 months', '12 months'] },
        { name: 'States included', values: ['All', 'All', '8', '8', 'All', 'All'] },
        { name: 'Cart rental', values: [true, true, true, true, true, true] },
      ],
    },
    {
      category: 'Golf Perks',
      features: [
        { name: 'GPS device', values: ['Rental', 'Included', 'Included', 'Top-tier', 'Included', 'Included'] },
        { name: 'Premium cart option', values: [false, true, true, true, true, true] },
        { name: 'Club rental discount', values: [false, false, '10%', '20%', '10%', 'Free (junior)'] },
        { name: 'Range balls', values: [false, false, false, true, false, false] },
      ],
    },
    {
      category: 'Trail Benefits',
      features: [
        { name: 'Medallion eligibility', values: [false, false, 'Silver', 'Gold', false, false] },
        { name: 'Trail progress tracking', values: ['Basic', 'Advanced', 'Premium', 'Premium', 'Couples', 'Family'] },
        { name: 'Certificate', values: [false, false, true, true, false, false] },
        { name: 'Hall of Fame entry', values: [false, false, true, true, false, false] },
      ],
    },
    {
      category: 'Discounts',
      features: [
        { name: 'Pro shop discount', values: [false, '5%', '10%', '20%', '10%', '5%'] },
        { name: 'Food & beverage discount', values: [false, false, '5%', '10%', '5%', '5%'] },
        { name: 'Guest pass rounds', values: [false, false, false, '5', false, false] },
        { name: 'Future round discount', values: [false, '5%', '10%', '15%', '10%', '10%'] },
      ],
    },
    {
      category: 'Exclusive Access',
      features: [
        { name: 'Priority tee times', values: [false, false, true, true, false, false] },
        { name: 'VIP events', values: [false, false, true, true, false, false] },
        { name: 'Member tournaments', values: [false, false, true, true, false, true] },
        { name: 'Course preview access', values: [false, true, true, true, false, false] },
      ],
    },
    {
      category: 'Merchandise',
      features: [
        { name: 'Welcome kit', values: [true, true, true, true, true, true] },
        { name: 'Apparel package', values: [false, false, false, true, false, false] },
        { name: 'Photo package', values: [false, false, true, true, true, true] },
        { name: 'Documentary feature', values: [false, false, false, true, false, false] },
      ],
    },
  ];

  const renderCell = (value: any) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-[#10B981] mx-auto" />
      ) : (
        <X className="w-5 h-5 text-[#CBD5E1] mx-auto" />
      );
    }
    return <span className="text-[14px] text-[#0F172A]">{value}</span>;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[48px] max-md:text-[36px] text-[#0F172A] mb-2">Compare All Features</h2>
          <p className="text-[16px] uppercase tracking-[3px] text-[#FF6B35]">
            Find Your Perfect Fit
          </p>
        </motion.div>

        {/* Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[1200px]">
            {/* Header Row */}
            <div className="grid grid-cols-7 gap-4 mb-4">
              <div className="bg-[#F9FAFB] p-4 rounded-lg">
                <div className="text-[14px] text-[#64748B] uppercase tracking-wider">Features</div>
              </div>
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-[#FF6B35] to-[#DC2626] p-4 rounded-lg text-center"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-[24px] mb-1">{pkg.icon}</div>
                  <div className="text-[16px] text-white">{pkg.name}</div>
                  <div className="text-[14px] text-white/80">{pkg.price}</div>
                </motion.div>
              ))}
            </div>

            {/* Feature Groups */}
            {featureGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="mb-8">
                <div className="bg-[#0F172A] text-white px-4 py-3 rounded-lg mb-2">
                  <h3 className="text-[16px] uppercase tracking-wider">{group.category}</h3>
                </div>
                {group.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    className={`grid grid-cols-7 gap-4 py-3 px-2 rounded-lg ${
                      featureIndex % 2 === 0 ? 'bg-[#F9FAFB]' : 'bg-white'
                    } hover:bg-[#FFF7ED] transition-colors`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: featureIndex * 0.05 }}
                  >
                    <div className="flex items-center">
                      <span className="text-[14px] text-[#0F172A]">{feature.name}</span>
                    </div>
                    {feature.values.map((value, valueIndex) => (
                      <div key={valueIndex} className="flex items-center justify-center">
                        {renderCell(value)}
                      </div>
                    ))}
                  </motion.div>
                ))}
              </div>
            ))}

            {/* Bottom CTA Row */}
            <div className="grid grid-cols-7 gap-4 mt-8">
              <div />
              {packages.map((pkg, index) => (
                <div key={index} className="text-center">
                  <Button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#DC2626] text-white hover:shadow-xl">
                    Select
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
