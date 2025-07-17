export function AboutValues() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 bg-blue-50/30">
      {/* Title Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-vet-dark-text mb-6 tracking-tight">
          Why Choose Crescenta Valley Veterinary Hospital?
        </h2>
        <p className="text-lg text-vet-gray-text max-w-2xl mx-auto">
          Our passionate team treats your pets like family, delivering care with
          warmth and expertise. We empower pet owners with the knowledge to
          create a quality lifestyle for their pets.
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Trusted for Over Two Decades */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-vet-border">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <span className="text-2xl">🏆</span>
          </div>
          <h3 className="text-xl font-semibold text-vet-dark-text mb-4">
            Trusted for Over Two Decades
          </h3>
          <p className="text-vet-gray-text leading-relaxed">
            Community-voted "Best Vet" every year since 2001. We've been your
            trusted partner in La Crescenta for keeping pets healthy, happy, and
            thriving.
          </p>
        </div>

        {/* Comprehensive Care */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-vet-border">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <span className="text-2xl">🐾</span>
          </div>
          <h3 className="text-xl font-semibold text-vet-dark-text mb-4">
            Every Pet Type Welcome
          </h3>
          <p className="text-vet-gray-text leading-relaxed">
            From furry, feathered, to scaly family members - we care for dogs,
            cats, birds, rabbits, reptiles, small mammals, and other exotic pets
            with specialized expertise.
          </p>
        </div>

        {/* Education-Focused */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-vet-border">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <span className="text-2xl">📚</span>
          </div>
          <h3 className="text-xl font-semibold text-vet-dark-text mb-4">
            Education-Focused Care
          </h3>
          <p className="text-vet-gray-text leading-relaxed">
            We empower pet owners with knowledge to create a quality lifestyle
            for their pets, providing guidance through every stage of your pet's
            life.
          </p>
        </div>

        {/* State-of-the-Art Technology */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-vet-border">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <span className="text-2xl">⚕️</span>
          </div>
          <h3 className="text-xl font-semibold text-vet-dark-text mb-4">
            Advanced Diagnostics & Surgery
          </h3>
          <p className="text-vet-gray-text leading-relaxed">
            Our state-of-the-art facility offers digital radiography, dental
            care, and advanced surgical procedures with cutting-edge technology
            for precise diagnosis and treatment.
          </p>
        </div>

        {/* Emergency Services */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-vet-border">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <span className="text-2xl">🚑</span>
          </div>
          <h3 className="text-xl font-semibold text-vet-dark-text mb-4">
            Emergency Services
          </h3>
          <p className="text-vet-gray-text leading-relaxed">
            When the unexpected happens, we're here. Our team provides prompt,
            compassionate emergency care to stabilize and treat your pet when it
            matters most.
          </p>
        </div>

        {/* Convenient & Accessible */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-vet-border">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <span className="text-2xl">📍</span>
          </div>
          <h3 className="text-xl font-semibold text-vet-dark-text mb-4">
            Convenient & Accessible
          </h3>
          <p className="text-vet-gray-text leading-relaxed">
            Located at 3254 Foothill Boulevard, La Crescenta. Open Monday to
            Friday, 8:30 a.m. to 5 p.m. Call (818) 249-0022 to book your
            appointment.
          </p>
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="mt-16">
        <div className="bg-primary rounded-[2rem] p-12 text-white max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-lg mb-4 opacity-95">
                "Best vet ever anywhere."
              </p>
              <p className="text-sm opacity-80">- Michael D.</p>
            </div>
            <div className="text-center">
              <p className="text-lg mb-4 opacity-95">
                "You folks are the best, thanks for taking such good care of our
                4-legged children."
              </p>
              <p className="text-sm opacity-80">- Helen L.</p>
            </div>
            <div className="text-center">
              <p className="text-lg mb-4 opacity-95">
                "CVVH not only provides the best medical care but educates pet
                owners on creating a quality lifestyle for their pets."
              </p>
              <p className="text-sm opacity-80">- John C.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
