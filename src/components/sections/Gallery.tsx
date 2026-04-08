import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import BookingButton from "@/components/BookingButton";

const galleryItems = {
  safaris: [
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
  ],
  drinks: [
    "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544145945-f904253d0c71?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=2072&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
  ],
  people: [
    "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1623091423636-097f53997a2c?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
  ]
};

export default function Gallery() {
  return (
    <section className="section-padding bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Visual Stories</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Aspirational <span className="italic text-gradient">Moments</span></h2>
        </div>

        <Tabs defaultValue="safaris" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-secondary/50 border border-white/5 p-1 rounded-full h-auto">
              <TabsTrigger value="safaris" className="rounded-full px-8 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-background uppercase text-[10px] font-bold tracking-widest transition-all">Safaris</TabsTrigger>
              <TabsTrigger value="drinks" className="rounded-full px-8 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-background uppercase text-[10px] font-bold tracking-widest transition-all">Drinks</TabsTrigger>
              <TabsTrigger value="people" className="rounded-full px-8 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-background uppercase text-[10px] font-bold tracking-widest transition-all">Experience</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(galleryItems).map(([key, images]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((src, i) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={src}
                      alt={`Gallery ${key} ${i}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Camera className="w-8 h-8 text-background" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <BookingButton size="lg" className="bg-primary text-background hover:bg-primary/90 rounded-full px-12 font-bold">
            Be Part of This
          </BookingButton>
        </div>
      </div>
    </section>
  );
}
