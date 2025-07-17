import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Services } from "@/components/Services";
import { ServicesPreview } from "@/components/ServicesPreview";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Features />
      <Services />
      <ServicesPreview />
      <Testimonials />
      {/* <FAQ /> */}
      <Footer />
    </div>
  );
}
