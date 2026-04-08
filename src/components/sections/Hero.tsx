import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import BookingButton from "@/components/BookingButton";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video Placeholder / Cinematic Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop"
          alt="Munnar Hills"
          className="w-full h-full object-cover scale-110 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.3em] uppercase border border-primary/30 rounded-full bg-primary/10 text-primary backdrop-blur-sm">
            The Ultimate Munnar Experience
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 leading-[0.9] tracking-tighter">
            Sip the <span className="text-gradient italic">Wild</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Premium safari experiences with signature drinks in the heart of Munnar. 
            Where adventure meets the art of the perfect pour.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <BookingButton size="lg" className="h-16 px-10 text-lg bg-primary text-background hover:bg-primary/90 font-bold rounded-full group">
              Book Your Safari
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </BookingButton>
            <Button size="lg" variant="outline" className="h-16 px-10 text-lg border-white/20 hover:bg-white/5 rounded-full backdrop-blur-sm">
              <Play className="mr-2 w-4 h-4 fill-current" />
              Watch Experience
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
