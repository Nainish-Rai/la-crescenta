import { HeroContent } from "./HeroContent";
import { FeaturesList } from "./FeaturesList";

export function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto w-full  bg-white">
      {/* Background decorative images */}
      <div className="absolute inset-0">
        {/* Main background image */}
        <div className="absolute inset-0 bg-[url('/images/bg-hero.png')] bg-cover bg-center w-full  rounded-[40px] bg-gradient-to-br from-green-50 to-primary" />
      </div>
      {/* gradient overlay */}
      {/*
      <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-black via-black to-transparent opacity-30" /> */}

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full">
        <div className="flex flex-col justify-center h-full">
          {/* Main hero content */}
          <div className="ml-[100px] mt-[106px]">
            <HeroContent />
          </div>

          {/* Features section */}
          <div className="bg-background mt-32 mb-6 rounded-3xl">
            <div className="ml-[98px] p-4 ">
              <FeaturesList />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
