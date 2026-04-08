import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Clock, Users } from "lucide-react";
import BookingButton from "@/components/BookingButton";

const experiences = [
  {
    title: "Jungle Safari + Drinks",
    description: "Deep dive into the Munnar wilderness followed by a curated mixology session in a hidden clearing.",
    image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=1974&auto=format&fit=crop",
    duration: "4 Hours",
    capacity: "2-6 People",
    price: "From ₹4,500",
    tag: "Most Popular"
  },
  {
    title: "Sunset Chill Sessions",
    description: "A relaxed evening safari ending at a panoramic viewpoint with premium sundowners and appetizers.",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop",
    duration: "3 Hours",
    capacity: "2-10 People",
    price: "From ₹3,200",
    tag: "Romantic"
  },
  {
    title: "Private Safari Experience",
    description: "Tailored exclusively for you. Choose your route, your drinks, and your pace. The ultimate luxury.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    duration: "Full Day",
    capacity: "Private",
    price: "Custom Pricing",
    tag: "Exclusive"
  },
  {
    title: "Group Adventure Packages",
    description: "Perfect for friends or corporate retreats. High-energy safaris with craft beverages and team activities.",
    image: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=2070&auto=format&fit=crop",
    duration: "5 Hours",
    capacity: "10+ People",
    price: "From ₹2,800 pp",
    tag: "Best for Groups"
  }
];

export default function ExperienceShowcase() {
  return (
    <section id="experiences" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Curated Journeys</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              Choose Your <span className="italic text-gradient">Adventure</span>
            </h2>
          </div>
          <Button variant="link" className="text-primary p-0 h-auto text-lg font-serif italic group">
            Explore all packages
            <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="group overflow-hidden bg-secondary/20 border-white/5 hover:border-primary/30 transition-all duration-500">
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-background text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {exp.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-6 mb-4 text-xs text-muted-foreground font-medium uppercase tracking-widest">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-primary" />
                      {exp.capacity}
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-2 font-light leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <span className="text-xl font-serif font-bold text-primary">{exp.price}</span>
                    <BookingButton className="rounded-full bg-white/5 hover:bg-primary hover:text-background transition-all">
                      View Details
                    </BookingButton>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
