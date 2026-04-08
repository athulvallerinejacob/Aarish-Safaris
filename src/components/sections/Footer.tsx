import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import BookingButton from "@/components/BookingButton";

export default function Footer() {
  return (
    <footer className="bg-secondary/20 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-background font-serif font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-serif font-bold tracking-wider uppercase">Aarish Safaris</span>
            </div>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Elevating the Munnar safari experience through premium beverage culture 
              and exclusive nature explorations.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Experiences", "Drinks", "Our Story", "Pricing", "FAQ"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                Aarish Estate, Near Tea Museum, Munnar, Kerala 685612
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground font-light">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground font-light">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                hello@aarishsafaris.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Instagram Feed</h4>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square rounded-md overflow-hidden bg-white/5">
                  <img
                    src={`https://picsum.photos/seed/safari${i}/200/200`}
                    alt="Instagram"
                    className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
            © 2026 Aarish Safaris. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden">
        <div className="flex gap-3">
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex-1 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center gap-2 font-bold shadow-lg">
            <MessageSquare className="w-5 h-5" />
            WhatsApp
          </a>
          <BookingButton className="flex-[1.5] h-14 bg-primary text-background rounded-full flex items-center justify-center gap-2 font-bold shadow-lg uppercase tracking-widest text-xs">
            Book Now
          </BookingButton>
        </div>
      </div>
    </footer>
  );
}
