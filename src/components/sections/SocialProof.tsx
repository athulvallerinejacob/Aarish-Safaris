import { motion } from "motion/react";
import { Star, Users, Award, MapPin } from "lucide-react";

export default function SocialProof() {
  const stats = [
    { icon: Users, label: "Experiences Delivered", value: "1,000+" },
    { icon: Star, label: "Google Rating", value: "4.9/5" },
    { icon: Award, label: "Premium Partners", value: "12+" },
    { icon: MapPin, label: "Secret Locations", value: "08" },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-serif font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
