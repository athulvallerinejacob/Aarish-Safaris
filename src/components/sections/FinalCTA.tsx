import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight } from "lucide-react";
import BookingButton from "@/components/BookingButton";

export default function FinalCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
          alt="Munnar Landscape"
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-12 md:p-20 rounded-[3rem] border-primary/20"
        >
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            Your Safari Story <span className="italic text-gradient">Starts Here</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
            Don't just visit Munnar. Experience it through the lens of adventure and 
            the art of the perfect pour. Limited slots available for this season.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <BookingButton size="lg" className="h-16 px-12 text-lg bg-primary text-background hover:bg-primary/90 font-bold rounded-full group w-full sm:w-auto">
              Book Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </BookingButton>
            <Button size="lg" variant="outline" className="h-16 px-12 text-lg border-primary/30 text-primary hover:bg-primary/10 rounded-full w-full sm:w-auto gap-2" asChild>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-5 h-5" />
                Talk to Us
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
