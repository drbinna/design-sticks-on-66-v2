import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../ui/button';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Input } from '../ui/input';
import { ShoppingCart, Save } from 'lucide-react';

export default function CustomBuilder() {
  const [basePackage, setBasePackage] = useState('moderate');
  const [validity, setValidity] = useState('12');
  const [players, setPlayers] = useState('1');
  const [customRounds, setCustomRounds] = useState('');
  const [addons, setAddons] = useState({
    premiumCart: false,
    clubRental: false,
    photography: false,
    guestPasses: false,
    merchandise: false,
    lessons: false,
    tournament: false,
  });

  const basePackages = {
    starter: { rounds: 5, price: 99 },
    moderate: { rounds: 15, price: 399 },
    silver: { rounds: 33, price: 1299 },
    gold: { rounds: 66, price: 2499 },
    custom: { rounds: parseInt(customRounds) || 0, price: parseInt(customRounds) * 25 || 0 },
  };

  const addonPrices = {
    premiumCart: 99,
    clubRental: 150,
    photography: 200,
    guestPasses: 175,
    merchandise: 100,
    lessons: 300,
    tournament: 50,
  };

  const calculateTotal = () => {
    const base = basePackages[basePackage as keyof typeof basePackages];
    const addonTotal = Object.entries(addons).reduce((sum, [key, enabled]) => {
      return sum + (enabled ? addonPrices[key as keyof typeof addonPrices] : 0);
    }, 0);
    const playerMultiplier = parseInt(players);
    const validityDiscount = parseInt(validity) >= 12 ? 0.1 : 0;
    
    const subtotal = (base.price + addonTotal) * playerMultiplier;
    const discount = subtotal * validityDiscount;
    
    return {
      base: base.price,
      addons: addonTotal,
      subtotal,
      discount,
      total: subtotal - discount,
      rounds: base.rounds,
    };
  };

  const totals = calculateTotal();

  return (
    <section className="py-16 bg-[#F5F1E8] relative overflow-hidden">
      {/* Diagonal striped pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)`,
          backgroundSize: '10px 10px',
        }} />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[48px] max-md:text-[36px] text-[#0F172A] mb-2">Build Your Own Package</h2>
          <p className="text-[16px] uppercase tracking-[3px] text-[#FF6B35]">
            Customize Your Adventure
          </p>
        </motion.div>

        {/* Builder Interface */}
        <motion.div
          className="max-w-[1200px] mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-[1fr,450px]">
            {/* Left Side: Options */}
            <div className="p-8 max-md:p-6 space-y-8">
              {/* Step 1: Choose Base */}
              <div>
                <h3 className="text-[20px] text-[#0F172A] mb-4">Step 1: Choose Base Package</h3>
                <RadioGroup value={basePackage} onValueChange={setBasePackage}>
                  <div className="space-y-3">
                    {[
                      { id: 'starter', label: 'Starter (5 rounds) - $99', value: 'starter' },
                      { id: 'moderate', label: 'Moderate (15 rounds) - $399', value: 'moderate' },
                      { id: 'silver', label: 'Silver Path (33 rounds) - $1,299', value: 'silver' },
                      { id: 'gold', label: 'Gold Complete (66 rounds) - $2,499', value: 'gold' },
                      { id: 'custom', label: 'Custom amount', value: 'custom' },
                    ].map((option) => (
                      <div key={option.id} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.value} id={option.id} />
                        <Label htmlFor={option.id} className="text-[14px] cursor-pointer">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
                {basePackage === 'custom' && (
                  <motion.div
                    className="mt-3"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                  >
                    <Input
                      type="number"
                      placeholder="Enter number of rounds"
                      value={customRounds}
                      onChange={(e) => setCustomRounds(e.target.value)}
                      className="max-w-[200px]"
                    />
                  </motion.div>
                )}
              </div>

              {/* Step 2: Validity Period */}
              <div>
                <h3 className="text-[20px] text-[#0F172A] mb-4">Step 2: Validity Period</h3>
                <Select value={validity} onValueChange={setValidity}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3 months</SelectItem>
                    <SelectItem value="6">6 months</SelectItem>
                    <SelectItem value="12">12 months (10% discount!)</SelectItem>
                    <SelectItem value="18">18 months (10% discount!)</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-[12px] text-[#64748B] mt-2">💡 Longer = better value</p>
              </div>

              {/* Step 3: Add-ons */}
              <div>
                <h3 className="text-[20px] text-[#0F172A] mb-4">Step 3: Add-ons</h3>
                <div className="space-y-3">
                  {[
                    { id: 'premiumCart', label: 'Premium cart upgrade', price: 99 },
                    { id: 'clubRental', label: 'Club rental package', price: 150 },
                    { id: 'photography', label: 'Photography package', price: 200 },
                    { id: 'guestPasses', label: 'Guest passes (5 rounds)', price: 175 },
                    { id: 'merchandise', label: 'Merchandise kit', price: 100 },
                    { id: 'lessons', label: 'Private lessons (3 sessions)', price: 300 },
                    { id: 'tournament', label: 'Tournament entry', price: 50 },
                  ].map((addon) => (
                    <div key={addon.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={addon.id}
                        checked={addons[addon.id as keyof typeof addons]}
                        onCheckedChange={(checked) =>
                          setAddons({ ...addons, [addon.id]: checked as boolean })
                        }
                      />
                      <Label htmlFor={addon.id} className="text-[14px] cursor-pointer flex-1">
                        {addon.label}
                      </Label>
                      <span className="text-[14px] text-[#FF6B35]">+${addon.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 4: Players */}
              <div>
                <h3 className="text-[20px] text-[#0F172A] mb-4">Step 4: Number of Players</h3>
                <Select value={players} onValueChange={setPlayers}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 player</SelectItem>
                    <SelectItem value="2">2 players</SelectItem>
                    <SelectItem value="3">3 players</SelectItem>
                    <SelectItem value="4">4 players</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Right Side: Live Preview */}
            <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 max-md:p-6 text-white">
              <h3 className="text-[24px] mb-6">Your Custom Package</h3>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={JSON.stringify(totals)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  {/* Package Summary */}
                  <div className="text-center py-6 border-y border-white/20">
                    <div className="text-[48px] mb-2">
                      {basePackage === 'starter' && '🏌️'}
                      {basePackage === 'moderate' && '⛳'}
                      {basePackage === 'silver' && '🥈'}
                      {basePackage === 'gold' && '🏆'}
                      {basePackage === 'custom' && '🎯'}
                    </div>
                    <div className="text-[18px] text-white/80">
                      {totals.rounds} Rounds
                    </div>
                    <div className="text-[14px] text-white/60">
                      Valid for {validity} months
                    </div>
                    <div className="text-[14px] text-white/60">
                      {players} {parseInt(players) > 1 ? 'players' : 'player'}
                    </div>
                  </div>

                  {/* Selected Options */}
                  <div>
                    <h4 className="text-[14px] uppercase tracking-wider text-white/60 mb-3">
                      Included:
                    </h4>
                    <div className="space-y-2">
                      <div className="text-[14px]">✓ Base package ({totals.rounds} rounds)</div>
                      {Object.entries(addons).map(([key, enabled]) => 
                        enabled && (
                          <div key={key} className="text-[14px]">
                            ✓ {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-3 pt-6 border-t border-white/20">
                    <div className="flex justify-between text-[14px]">
                      <span className="text-white/80">Base price:</span>
                      <span>${totals.base}</span>
                    </div>
                    {totals.addons > 0 && (
                      <div className="flex justify-between text-[14px]">
                        <span className="text-white/80">Add-ons:</span>
                        <span>${totals.addons}</span>
                      </div>
                    )}
                    {parseInt(players) > 1 && (
                      <div className="flex justify-between text-[14px]">
                        <span className="text-white/80">× {players} players:</span>
                        <span>${totals.subtotal}</span>
                      </div>
                    )}
                    {totals.discount > 0 && (
                      <div className="flex justify-between text-[14px] text-[#10B981]">
                        <span>Savings:</span>
                        <span>-${totals.discount.toFixed(0)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-[32px] pt-4 border-t border-white/20">
                      <span>Total:</span>
                      <span className="text-[#FF6B35]">${totals.total.toFixed(0)}</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3 pt-6">
                    <Button className="w-full h-[50px] bg-gradient-to-r from-[#FF6B35] to-[#DC2626] text-white hover:shadow-xl">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" className="w-full h-[50px] bg-transparent border-white text-white hover:bg-white/10">
                      <Save className="w-5 h-5 mr-2" />
                      Save for Later
                    </Button>
                  </div>

                  {/* Help Note */}
                  <div className="text-center pt-4 text-[12px] text-white/60">
                    Need help? <span className="text-[#FF6B35] cursor-pointer hover:underline">Chat with our Trail experts →</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
