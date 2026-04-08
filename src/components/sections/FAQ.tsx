import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I book a safari?",
    answer: "You can book directly through our website by selecting a package and date. Alternatively, you can message us on WhatsApp for a quick booking."
  },
  {
    question: "Is it safe for children?",
    answer: "Yes, our safaris are family-friendly. We provide child-safe seating and our guides are trained to handle all age groups safely."
  },
  {
    question: "What happens if it rains?",
    answer: "Munnar weather can be unpredictable. If weather conditions make the safari unsafe, we offer a full refund or a reschedule to the next available slot."
  },
  {
    question: "Can I customize the drink menu?",
    answer: "Absolutely! For our Private and Elite packages, you can consult with our mixologist to tailor the beverage experience to your preferences."
  },
  {
    question: "What should I wear?",
    answer: "We recommend comfortable, layered clothing and sturdy shoes. It can get chilly in the early mornings and evenings."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Common Queries</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Frequently Asked <span className="italic text-gradient">Questions</span></h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-white/5 bg-secondary/10 rounded-2xl px-6">
              <AccordionTrigger className="text-lg font-serif font-bold hover:text-primary transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
