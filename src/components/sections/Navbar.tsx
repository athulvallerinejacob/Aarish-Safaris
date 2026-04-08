import { motion } from "motion/react";
import BookingButton from "@/components/BookingButton";
import { MessageSquare, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg py-4 border-b border-white/5" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-background font-serif font-bold text-xl">A</span>
          </div>
          <span className="text-xl font-serif font-bold tracking-wider uppercase">Aarish Safaris</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Experiences", "Drinks", "Story", "Pricing", "FAQ"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="gap-2 text-primary hover:text-primary hover:bg-primary/10" asChild>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </a>
          </Button>
          <BookingButton className="bg-primary text-background hover:bg-primary/90 font-bold px-6">
            Book Now
          </BookingButton>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-background border-b border-white/5 px-6 py-8 flex flex-col gap-6"
        >
          {["Experiences", "Drinks", "Story", "Pricing", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-serif font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex flex-col gap-4 pt-4 border-t border-white/5">
            <Button variant="outline" className="w-full gap-2 border-primary text-primary" asChild>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
            <BookingButton className="w-full bg-primary text-background font-bold">
              Book Your Safari
            </BookingButton>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
