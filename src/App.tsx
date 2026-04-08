/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import ExperienceShowcase from "@/components/sections/ExperienceShowcase";
import SignatureDrinks from "@/components/sections/SignatureDrinks";
import WhyUs from "@/components/sections/WhyUs";
import Story from "@/components/sections/Story";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import Pricing from "@/components/sections/Pricing";
import Urgency from "@/components/sections/Urgency";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import BookingModal from "@/components/BookingModal";

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-background">
      <Navbar />
      
      <main>
        <Hero />
        <SocialProof />
        <ExperienceShowcase />
        <SignatureDrinks />
        <WhyUs />
        <Story />
        <Testimonials />
        <Gallery />
        <Pricing />
        <Urgency />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

