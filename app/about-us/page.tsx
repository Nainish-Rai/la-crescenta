import { AboutHero } from "@/components/AboutHero";
import { Footer } from "../../components/Footer";
import { AboutStory } from "@/components/AboutStory";
import { AboutValues } from "@/components/AboutValues";
import { AboutTeam } from "@/components/AboutTeam";
import { AboutAccreditations } from "@/components/AboutAccreditations";

export default function AboutPage() {
  return (
    <div className="">
      <AboutHero />
      <AboutStory />
      {/* <AboutValues /> */}
      {/* <AboutTeam /> */}
      {/* <AboutAccreditations /> */}
      <Footer />
    </div>
  );
}
