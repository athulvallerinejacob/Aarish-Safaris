import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Travel Blogger",
    content: "The most unique experience I've had in Kerala. The 'Munnar Mist' mojito while watching the sunrise was pure magic.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "David Miller",
    role: "Adventure Enthusiast",
    content: "Professional guides, exclusive locations, and incredible drinks. Aarish Safaris is in a league of its own.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Priya & Rahul",
    role: "Honeymooners",
    content: "The private sunset session was the highlight of our trip. Romantic, luxurious, and perfectly executed.",
    image: "https://images.unsplash.com/photo-1623091423636-097f53997a2c?q=80&w=1974&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Guest Experiences</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">What They <span className="italic text-gradient">Say</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-3xl relative group hover:border-primary/50 transition-all duration-500"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-lg font-light leading-relaxed mb-8 italic">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-serif font-bold text-lg">{t.name}</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
