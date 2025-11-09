import { useState } from 'react';
import { motion } from 'motion/react';
import { Switch } from '../ui/switch';
import { Checkbox } from '../ui/checkbox';

export default function PackageToggle() {
  const [activeTab, setActiveTab] = useState('individual');
  const [billingType, setBillingType] = useState('full');
  const [showMedallion, setShowMedallion] = useState(false);
  const [includeAddons, setIncludeAddons] = useState(true);

  const tabs = [
    { id: 'individual', label: 'Individual Packages' },
    { id: 'group', label: 'Group Packages' },
    { id: 'corporate', label: 'Corporate Plans' },
  ];

  return (
    <div className="sticky top-0 z-40 bg-[#F5F1E8] border-b border-[#E5E7EB] px-4 py-6">
      <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* View Toggle Tabs */}
        <div className="flex gap-2 max-md:w-full max-md:justify-center">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 max-md:px-4 max-md:py-2 max-md:text-[14px] rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#FF6B35] to-[#DC2626] text-white shadow-lg'
                  : 'bg-white text-[#64748B] hover:bg-[#F9FAFB]'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Right side controls */}
        <div className="flex flex-wrap items-center gap-6 max-md:w-full max-md:justify-center">
          {/* Billing Toggle */}
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg">
            <span className={`text-[14px] ${billingType === 'perRound' ? 'text-[#0F172A]' : 'text-[#94A3B8]'}`}>
              Pay Per Round
            </span>
            <Switch
              checked={billingType === 'full'}
              onCheckedChange={(checked) => setBillingType(checked ? 'full' : 'perRound')}
            />
            <span className={`text-[14px] ${billingType === 'full' ? 'text-[#0F172A]' : 'text-[#94A3B8]'}`}>
              Full Package
            </span>
            {billingType === 'full' && (
              <motion.span
                className="ml-2 px-2 py-1 bg-[#10B981] text-white text-[12px] rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
              >
                Save up to 30%
              </motion.span>
            )}
          </div>

          {/* Filter Options */}
          <div className="flex flex-col gap-2 max-md:w-full">
            <div className="flex items-center gap-2">
              <Checkbox
                id="medallion"
                checked={showMedallion}
                onCheckedChange={(checked) => setShowMedallion(checked as boolean)}
              />
              <label htmlFor="medallion" className="text-[14px] text-[#0F172A] cursor-pointer">
                Show only Trail Medallion packages
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="addons"
                checked={includeAddons}
                onCheckedChange={(checked) => setIncludeAddons(checked as boolean)}
              />
              <label htmlFor="addons" className="text-[14px] text-[#0F172A] cursor-pointer">
                Include add-ons
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
