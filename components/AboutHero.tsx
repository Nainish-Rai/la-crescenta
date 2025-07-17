export function AboutHero() {
  return (
    <section className="relative max-w-7xl mx-auto w-full bg-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hospital.png"
          alt="Crescenta Valley Veterinary Hospital"
          className="absolute inset-0 w-full h-full object-cover sm:rounded-[40px]"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 sm:rounded-[40px]"></div>

      {/* Content container */}
      <div className="relative mt-2 z-10 max-w-7xl mx-auto px-4 h-full min-h-[600px]">
        <div className="flex flex-col justify-center h-full">
          {/* Main hero content */}
          <div className="sm:ml-[100px] mt-[106px] mb-[106px]">
            <div className="flex flex-col gap-5 max-w-[600px]">
              {/* Main heading */}
              <h1 className="text-4xl md:text-6xl font-bold leading-[1] tracking-[-0.02em] text-gray-50">
                More Than Just a Vet We're Family
              </h1>

              {/* Subtitle */}
              <p className="text-lg leading-[1.4] text-gray-50">
                At Crescenta Valley Veterinary Hospital, we're not just about
                treating pets—we're about giving your furry, feathered, or scaly
                family members the top-tier care they deserve. Voted Best of
                Glendale/Best of the Foothills every year since 2001.
              </p>

              {/* Call to action */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold px-6 py-3 rounded-lg transition-colors">
                  Schedule an Appointment
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-sm font-semibold px-6 py-3 rounded-lg transition-colors">
                  Call (818) 249-0022
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
