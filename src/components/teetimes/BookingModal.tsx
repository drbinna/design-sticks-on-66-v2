import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Calendar, Users, CreditCard, Download, Mail } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  time: string;
  price: number;
}

export function BookingModal({ isOpen, onClose, time, price }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [players, setPlayers] = useState(4);

  const handleComplete = () => {
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[800px] max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="p-6 pb-4 border-b">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle style={{ fontSize: '24px' }}>
                {step === 3 ? "You're All Set!" : 'Confirm Your Tee Time'}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Book your tee time at Pebble Beach Golf Links
              </DialogDescription>
              {step !== 3 && (
                <p style={{ fontSize: '14px', color: '#64748B', marginTop: '4px' }}>
                  Step {step} of 3
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Indicators */}
          {step !== 3 && (
            <div className="flex gap-2 mt-4">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className="h-1 flex-1 rounded-full transition-colors"
                  style={{
                    backgroundColor: s <= step ? '#FF6B35' : '#E5E7EB',
                  }}
                />
              ))}
            </div>
          )}
        </DialogHeader>

        <AnimatePresence mode="wait">
          {step === 1 && <StepOne time={time} price={price} players={players} onNext={() => setStep(2)} />}
          {step === 2 && <StepTwo time={time} price={price} players={players} onBack={() => setStep(1)} onComplete={handleComplete} />}
          {step === 3 && <StepThree time={time} price={price} players={players} onClose={handleReset} />}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}

function StepOne({ time, price, players, onNext }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="p-6 space-y-6"
    >
      {/* Booking Summary */}
      <div className="bg-[#F5F1E8] rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Booking Summary</h3>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span style={{ color: '#64748B' }}>Course</span>
            <span>Pebble Beach Golf Links</span>
          </div>
          <div className="flex justify-between">
            <span style={{ color: '#64748B' }}>Date</span>
            <span>Monday, October 15, 2025</span>
          </div>
          <div className="flex justify-between">
            <span style={{ color: '#64748B' }}>Time</span>
            <span>{time}</span>
          </div>
          <div className="flex justify-between">
            <span style={{ color: '#64748B' }}>Players</span>
            <span>{players}</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-gray-300">
            <span style={{ fontWeight: '600' }}>Total</span>
            <span style={{ fontWeight: '700', color: '#FF6B35', fontSize: '18px' }}>
              ${price * players} (${price}/player)
            </span>
          </div>
        </div>
      </div>

      {/* Player Information Form */}
      <div className="space-y-4">
        <h3 style={{ fontSize: '18px', fontWeight: '600' }}>Player Information</h3>
        
        {[1, 2, 3, 4].slice(0, players).map((playerNum) => (
          <div key={playerNum} className="border border-gray-200 rounded-lg p-4 space-y-3">
            <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#64748B' }}>
              Player {playerNum} {playerNum === 1 && '(You)'}
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor={`first-${playerNum}`}>First Name</Label>
                <Input id={`first-${playerNum}`} placeholder="John" />
              </div>
              <div>
                <Label htmlFor={`last-${playerNum}`}>Last Name</Label>
                <Input id={`last-${playerNum}`} placeholder="Doe" />
              </div>
            </div>
            {playerNum === 1 && (
              <>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Equipment Add-ons */}
      <div className="space-y-3">
        <h3 style={{ fontSize: '18px', fontWeight: '600' }}>Equipment Add-ons</h3>
        <div className="flex items-center space-x-2">
          <Checkbox id="cart" defaultChecked disabled />
          <label htmlFor="cart" style={{ fontSize: '14px' }}>
            Cart rental (Included ✓)
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="clubs" />
          <label htmlFor="clubs" style={{ fontSize: '14px' }}>
            Club rental (+$35/set)
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="gps" />
          <label htmlFor="gps" style={{ fontSize: '14px' }}>
            GPS device (+$10)
          </label>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-4">
        <Button variant="outline" className="flex-1">
          Back
        </Button>
        <Button
          onClick={onNext}
          className="flex-1"
          style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)' }}
        >
          Continue to Payment →
        </Button>
      </div>
    </motion.div>
  );
}

function StepTwo({ time, price, players, onBack, onComplete }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="p-6 space-y-6"
    >
      {/* Payment Method */}
      <div className="space-y-3">
        <h3 style={{ fontSize: '18px', fontWeight: '600' }}>Payment Method</h3>
        <div className="grid grid-cols-4 gap-3">
          {['Card', 'PayPal', 'Apple Pay', 'Google Pay'].map((method) => (
            <button
              key={method}
              className="border-2 border-[#FF6B35] rounded-lg p-3 text-center hover:bg-[#FFF7ED] transition-colors"
              style={{ fontSize: '13px', fontWeight: '600', color: '#FF6B35' }}
            >
              {method}
            </button>
          ))}
        </div>
      </div>

      {/* Card Details */}
      <div className="space-y-3">
        <h3 style={{ fontSize: '18px', fontWeight: '600' }}>Card Details</h3>
        <div>
          <Label htmlFor="card-number">Card Number</Label>
          <Input id="card-number" placeholder="1234 5678 9012 3456" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2">
            <Label htmlFor="expiry">Expiration</Label>
            <Input id="expiry" placeholder="MM/YY" />
          </div>
          <div>
            <Label htmlFor="cvv">CVV</Label>
            <Input id="cvv" placeholder="123" />
          </div>
        </div>
        <div>
          <Label htmlFor="zip">ZIP Code</Label>
          <Input id="zip" placeholder="90210" />
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-[#F5F1E8] rounded-lg p-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>${price * players}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span style={{ color: '#10B981' }}>Trail member discount (10%)</span>
          <span style={{ color: '#10B981' }}>-${((price * players) * 0.1).toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Tax</span>
          <span>${((price * players) * 0.08).toFixed(2)}</span>
        </div>
        <div className="flex justify-between pt-2 border-t border-gray-300">
          <span style={{ fontWeight: '700', fontSize: '16px' }}>Total</span>
          <span style={{ fontWeight: '700', fontSize: '18px', color: '#FF6B35' }}>
            ${((price * players) * 0.98).toFixed(2)}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-4">
        <Button variant="outline" className="flex-1" onClick={onBack}>
          Back
        </Button>
        <Button
          onClick={onComplete}
          className="flex-1"
          style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)' }}
        >
          Complete Booking
        </Button>
      </div>
    </motion.div>
  );
}

function StepThree({ time, price, players, onClose }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-6 text-center space-y-6"
    >
      {/* Success Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="w-24 h-24 mx-auto rounded-full bg-[#10B981] flex items-center justify-center"
      >
        <Check className="w-12 h-12 text-white" />
      </motion.div>

      <div>
        <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '8px' }}>
          You're All Set!
        </h2>
        <p style={{ color: '#64748B' }}>Booking #STK66-2025-1234</p>
      </div>

      {/* Booking Details */}
      <div className="bg-[#F5F1E8] rounded-lg p-6 text-left space-y-3">
        <img
          src="https://images.unsplash.com/photo-1668048092480-a5c35c3f1330?w=800"
          alt="Course"
          className="w-full h-32 object-cover rounded-lg mb-4"
        />
        <h3 style={{ fontSize: '18px', fontWeight: '700' }}>Pebble Beach Golf Links</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span style={{ color: '#64748B' }}>Date & Time</span>
            <span>Monday, Oct 15, 2025 at {time}</span>
          </div>
          <div className="flex justify-between">
            <span style={{ color: '#64748B' }}>Players</span>
            <span>{players}</span>
          </div>
          <div className="flex justify-between pt-2 border-t">
            <span style={{ fontWeight: '600' }}>Total Paid</span>
            <span style={{ fontWeight: '700', color: '#FF6B35' }}>
              ${((price * players) * 0.98).toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="flex items-center justify-center gap-2">
          <Download className="w-4 h-4" />
          Download PDF
        </Button>
        <Button variant="outline" className="flex items-center justify-center gap-2">
          <Mail className="w-4 h-4" />
          Email Receipt
        </Button>
      </div>

      {/* Final Actions */}
      <div className="space-y-3 pt-4">
        <Button
          onClick={onClose}
          className="w-full"
          style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #DC2626 100%)' }}
        >
          Done
        </Button>
        <Button variant="outline" className="w-full">
          Book Another Tee Time
        </Button>
      </div>
    </motion.div>
  );
}
