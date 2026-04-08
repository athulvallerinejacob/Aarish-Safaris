import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Leaf, Sparkles } from "lucide-react";

const drinks = [
  {
    name: "Munnar Mist Mojito",
    ingredients: "Wild Mint, Local Honey, Fresh Lime, Sparkling Spring Water",
    description: "A refreshing blend inspired by the morning dew on tea leaves.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Highland Spice Brew",
    ingredients: "Cardamom, Cinnamon, Dark Roast, Artisanal Syrup",
    description: "A warm, complex beverage that captures the essence of Munnar's spice plantations.",
    image: "https://images.unsplash.com/photo-1544145945-f904253d0c71?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Wild Berry Infusion",
    ingredients: "Handpicked Berries, Hibiscus, Rosehip, Botanical Gin (Optional)",
    description: "Vibrant and floral, using berries found only in the higher altitudes.",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=2072&auto=format&fit=crop"
  }
];

export default function SignatureDrinks() {
  return (
    <section id="drinks" className="section-padding bg-secondary/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The Art of the Pour</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Signature <span className="italic text-gradient">Botanicals</span></h2>
          <p className="text-muted-foreground text-lg font-light">
            Our drinks are more than just beverages; they are liquid stories crafted from 
            the very landscape you explore. Handcrafted, local, and utterly unique.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {drinks.map((drink, i) => (
            <motion.div
              key={drink.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-8">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                   <p className="text-sm italic text-primary mb-2">{drink.ingredients}</p>
                   <p className="text-white/80 text-sm font-light leading-relaxed">{drink.description}</p>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-primary transition-colors text-center">
                {drink.name}
              </h3>
              <div className="w-12 h-1 bg-primary/30 mx-auto group-hover:w-24 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button size="lg" variant="outline" className="rounded-full px-10 border-primary/30 hover:bg-primary/10 text-primary group">
            Discover the Full Menu
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 pt-24 border-t border-white/5">
          {[
            { icon: Leaf, title: "Locally Sourced", desc: "Ingredients handpicked from Munnar's plantations." },
            { icon: Droplets, title: "Pure Spring Water", desc: "Filtered through the ancient rocks of the Western Ghats." },
            { icon: Sparkles, title: "Handcrafted", desc: "Every drink is made to order by our expert mixologists." }
          ].map((item, i) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
