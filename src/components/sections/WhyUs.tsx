import { motion } from "motion/react";
import { Map, Shield, Camera, Compass } from "lucide-react";

const features = [
  {
    icon: Map,
    title: "Exclusive Locations",
    description: "Access to private estates and hidden viewpoints far from the tourist crowds."
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Expert guides and well-maintained vehicles ensure a secure adventure for all."
  },
  {
    icon: Camera,
    title: "Instagram-worthy",
    description: "We know the best angles and lighting to help you capture Munnar's soul."
  },
  {
    icon: Compass,
    title: "Guided Expertise",
    description: "Learn about the flora, fauna, and history of Munnar from local experts."
  }
];

export default function WhyUs() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The Aarish Difference</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
            Why We Are <span className="italic text-gradient">Different</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light mb-12 leading-relaxed">
            We don't just provide a ride; we provide a narrative. Aarish Safaris was born 
            from a desire to show the true, untouched beauty of Munnar through a lens of 
            luxury and adventure.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-500">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-background transition-colors" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-2xl overflow-hidden aspect-square">
            <img
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop"
              alt="Safari Experience"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative Background Elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl max-w-[200px] z-20"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Next Slot</p>
            <p className="text-lg font-serif font-bold mb-1">Tomorrow, 6:00 AM</p>
            <p className="text-[10px] text-muted-foreground uppercase">Only 2 seats left</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
