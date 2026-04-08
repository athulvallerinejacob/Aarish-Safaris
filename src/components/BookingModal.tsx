import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarIcon, Users, MapPin, CheckCircle2 } from "lucide-react";

interface BookingModalProps {
  children: React.ReactNode;
}

export default function BookingModal({ children }: BookingModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <Dialog onOpenChange={(open) => !open && setIsSubmitted(false)}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-secondary border-primary/20 p-0 overflow-hidden">
        {isSubmitted ? (
          <div className="p-12 text-center flex flex-col items-center gap-6">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h3 className="text-3xl font-serif font-bold mb-2">Booking Requested!</h3>
              <p className="text-muted-foreground font-light">
                Our concierge will contact you within 2 hours to confirm your slot. 
                Get ready for an unforgettable journey.
              </p>
            </div>
            <Button 
              className="mt-4 bg-primary text-background font-bold rounded-full px-10"
              onClick={() => window.location.reload()}
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <div className="relative h-32 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-50"
                alt="Safari"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent" />
              <div className="absolute bottom-4 left-6">
                <DialogTitle className="text-3xl font-serif font-bold">Reserve Your Slot</DialogTitle>
                <DialogDescription className="text-primary/80 font-medium uppercase tracking-widest text-[10px]">
                  Limited Availability • Premium Experience
                </DialogDescription>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs uppercase tracking-widest font-bold opacity-70">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required className="bg-background/50 border-white/10" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs uppercase tracking-widest font-bold opacity-70">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="bg-background/50 border-white/10" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-xs uppercase tracking-widest font-bold opacity-70">Preferred Date</Label>
                  <div className="relative">
                    <Input id="date" type="date" required className="bg-background/50 border-white/10 pl-10" />
                    <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-xs uppercase tracking-widest font-bold opacity-70">No. of Guests</Label>
                  <div className="relative">
                    <Input id="guests" type="number" min="1" max="20" placeholder="2" required className="bg-background/50 border-white/10 pl-10" />
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="package" className="text-xs uppercase tracking-widest font-bold opacity-70">Select Package</Label>
                <select id="package" className="w-full h-10 rounded-md bg-background/50 border border-white/10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Explorer Package (₹3,200)</option>
                  <option selected>Premium Package (₹5,500)</option>
                  <option>Elite Experience (₹12,000)</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-xs uppercase tracking-widest font-bold opacity-70">Special Requests / Dietary Needs</Label>
                <Textarea id="notes" placeholder="Any allergies or special occasions?" className="bg-background/50 border-white/10 min-h-[80px]" />
              </div>

              <Button type="submit" className="w-full h-14 bg-primary text-background font-bold text-lg rounded-full hover:bg-primary/90 transition-all">
                Confirm Booking Request
              </Button>

              <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest">
                No immediate payment required. We'll verify and send a payment link.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
