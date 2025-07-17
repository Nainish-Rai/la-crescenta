import { HeroContent } from "./HeroContent";
import { FeaturesList } from "./FeaturesList";

export function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto w-full  bg-white">
      {/* Background decorative images */}
      <div className="absolute inset-0">
        {/* Main background video */}
        <video
          src="/videos/bg-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover sm:rounded-[40px]"
        />
      </div>
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent sm:rounded-[40px] opacity-40"></div>

      {/* Content container */}
      <div className="relative mt-2 z-10 max-w-7xl mx-auto px-4 h-full">
        <div className="flex flex-col justify-center h-full">
          {/* Main hero content */}
          <div className="sm:ml-[100px] mt-[106px]">
            <HeroContent />
          </div>

          {/* Features section */}
          <div className="bg-background backdrop-blur-2xl mt-32 mb-4 rounded-4xl">
            {/* <div className="px-8 sm:px-16 p-8 sm:p-4 ">
              <FeaturesList />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
