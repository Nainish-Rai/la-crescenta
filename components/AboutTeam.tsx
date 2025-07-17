export function AboutTeam() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Title Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-vet-dark-text mb-6 tracking-tight">
          Our Passionate Team: Care with Warmth & Expertise
        </h2>
        <p className="text-lg text-vet-gray-text max-w-2xl mx-auto">
          Our veterinarians and staff treat your pets like family, delivering
          specialized care for every type of companion from playful pups and
          curious cats to exotic birds, rabbits, and reptiles.
        </p>
      </div>

      {/* Services highlights grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Cat Friendly Practice */}
        <div className="relative bg-gradient-to-br from-blue-100 to-blue-200 rounded-[2.5rem] p-8 h-80 flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 rounded-[2.5rem]"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🐱</span>
            </div>
            <h3 className="text-2xl font-semibold text-vet-dark-text mb-4">
              Cat Friendly Practice
            </h3>
            <p className="text-vet-gray-text">
              As a Cat Friendly Practice certified by AAFP, we know cats aren't
              just small dogs. Stress-free handling and expert feline care.
            </p>
          </div>
        </div>

        {/* Exotic Pet Expertise */}
        <div className="relative bg-gradient-to-br from-green-100 to-green-200 rounded-[2.5rem] p-8 h-80 flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 rounded-[2.5rem]"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🦎</span>
            </div>
            <h3 className="text-2xl font-semibold text-vet-dark-text mb-4">
              Exotic Pet Expertise
            </h3>
            <p className="text-vet-gray-text">
              One of the few clinics in La Crescenta equipped to care for birds,
              rabbits, reptiles, and small mammals with specialized knowledge.
            </p>
          </div>
        </div>

        {/* Pediatric & Senior Care */}
        <div className="relative bg-gradient-to-br from-purple-100 to-purple-200 rounded-[2.5rem] p-8 h-80 flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 rounded-[2.5rem]"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🐕</span>
            </div>
            <h3 className="text-2xl font-semibold text-vet-dark-text mb-4">
              Pediatric & Senior Care
            </h3>
            <p className="text-vet-gray-text">
              From rambunctious puppies and kittens to wise senior pets, we
              offer age-specific care for every life stage.
            </p>
          </div>
        </div>
      </div>

      {/* Comprehensive Services */}
      <div className="bg-white rounded-[2.5rem] p-12 shadow-sm border border-vet-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-semibold text-vet-dark-text mb-6">
              Comprehensive Services: Tailored Care for Every Pet
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-vet-dark-text mb-2">
                    Wellness & Preventative Care
                  </h4>
                  <p className="text-vet-gray-text">
                    Comprehensive wellness exams, vaccinations, parasite
                    control, and personalized nutrition advice to keep your pet
                    in peak condition.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-vet-dark-text mb-2">
                    Advanced Diagnostics & Surgery
                  </h4>
                  <p className="text-vet-gray-text">
                    Digital radiography, dental care, and advanced surgical
                    procedures from routine spays to complex emergencies.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-vet-dark-text mb-2">
                    Flea & Tick Prevention
                  </h4>
                  <p className="text-vet-gray-text">
                    Effective treatments to protect your pet and home from pesky
                    parasites, keeping your pet itch-free and healthy
                    year-round.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-[2rem] p-8 text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h4 className="text-xl font-semibold text-vet-dark-text mb-4">
                AAHA Accredited Excellence
              </h4>
              <p className="text-vet-gray-text mb-6">
                Our state-of-the-art facility uses cutting-edge technology to
                diagnose and treat your pet with precision and care, meeting the
                highest veterinary standards.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-semibold text-primary">25+</div>
                  <div className="text-sm text-vet-gray-text">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-primary">All</div>
                  <div className="text-sm text-vet-gray-text">Pet Types</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
