import { motion } from "motion/react";
import { AlertCircle, Clock, ShieldCheck } from "lucide-react";

export default function Urgency() {
  return (
    <section className="py-12 bg-primary/5 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary">Limited Availability</p>
              <p className="text-xs text-muted-foreground">Only 4 slots per day to ensure exclusivity.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary">Book in Advance</p>
              <p className="text-xs text-muted-foreground">Average booking time is 7 days prior.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-end">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary">Flexible Refunds</p>
              <p className="text-xs text-muted-foreground">100% refund for weather-related cancellations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
