import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const storySteps = [
  {
    time: "05:30 AM",
    title: "The Awakening",
    description: "The journey begins as the mist lifts over the tea gardens. Freshly brewed local coffee is served as we depart.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
  },
  {
    time: "08:00 AM",
    title: "Into the Wild",
    description: "Deep in the jungle, we track the movements of local wildlife. The air is crisp, and the adventure is real.",
    image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=1974&auto=format&fit=crop"
  },
  {
    time: "11:00 AM",
    title: "The Secret Pour",
    description: "We stop at a hidden waterfall. Our mixologist prepares the signature 'Munnar Mist' as you soak in the views.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1974&auto=format&fit=crop"
  },
  {
    time: "06:00 PM",
    title: "Golden Hour",
    description: "The day concludes on a high ridge. Premium sundowners are served as the sun dips below the Western Ghats.",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="story" ref={containerRef} className="section-padding bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Immersive Narrative</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">A Day with <span className="italic text-gradient">Aarish</span></h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-32">
            {storySteps.map((step, i) => (
              <div key={step.title} className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="md:w-1/2"
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-video group">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="md:w-1/2 text-center md:text-left"
                >
                  <span className="text-primary font-serif italic text-2xl mb-2 block">{step.time}</span>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" style={{ top: `${(i * 100) / storySteps.length}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
