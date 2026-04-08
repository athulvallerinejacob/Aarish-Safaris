import { motion } from "motion/react";
import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BookingButton from "@/components/BookingButton";

const packages = [
  {
    name: "Explorer",
    price: "₹3,200",
    duration: "3 Hours",
    features: [
      "Standard Safari Route",
      "2 Signature Drinks",
      "Local Snacks",
      "Expert Guide",
      "Group Experience"
    ],
    popular: false
  },
  {
    name: "Premium",
    price: "₹5,500",
    duration: "5 Hours",
    features: [
      "Extended Safari Route",
      "Unlimited Signature Drinks",
      "Gourmet Appetizers",
      "Private Viewpoint Access",
      "Photography Support"
    ],
    popular: true
  },
  {
    name: "Elite",
    price: "₹12,000",
    duration: "Full Day",
    features: [
      "Custom Safari Route",
      "Private Mixologist",
      "Full Course Jungle Lunch",
      "Exclusive Estate Access",
      "Luxury Vehicle Upgrade"
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Transparent Value</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Choose Your <span className="italic text-gradient">Package</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className={`relative h-full bg-secondary/20 border-white/5 flex flex-col transition-all duration-500 hover:border-primary/50 ${pkg.popular ? 'ring-2 ring-primary scale-105 z-10' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <CardHeader className="p-8 text-center border-b border-white/5">
                  <CardTitle className="text-2xl font-serif mb-2">{pkg.name}</CardTitle>
                  <div className="text-4xl font-serif font-bold text-primary mb-1">{pkg.price}</div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{pkg.duration}</p>
                </CardHeader>
                <CardContent className="p-8 flex-grow">
                  <ul className="space-y-4 mb-10">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm font-light">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <BookingButton className={`w-full h-14 rounded-full font-bold uppercase tracking-widest text-xs ${pkg.popular ? 'bg-primary text-background hover:bg-primary/90' : 'bg-white/5 hover:bg-white/10'}`}>
                    Book Now
                  </BookingButton>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 glass p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Info className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground font-light">
              Need a custom package for a large group or corporate event? 
              <span className="text-primary font-medium ml-1">Contact our concierge.</span>
            </p>
          </div>
          <Button variant="outline" className="rounded-full border-primary/30 text-primary" asChild>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              Talk to Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
