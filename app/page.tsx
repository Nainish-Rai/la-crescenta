import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Services } from "@/components/Services";
import { Blog } from "@/components/Blog";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Features />
      <Services />
      <Blog />
      <Testimonials />
      {/* <FAQ />
      <Footer /> */}
    </div>
  );
}
