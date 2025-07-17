export function AboutStory() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Story content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-vet-dark-text mb-6 tracking-tight">
            Our Story: Every Paw, Claw, and Tail Covered
          </h2>

          <div className="space-y-4 text-vet-gray-text leading-relaxed">
            <p className="text-lg">
              Established in 1999, Crescenta Valley Veterinary Hospital has been
              your trusted partner in La Crescenta for keeping pets healthy,
              happy, and thriving. From routine checkups to emergency care,
              we've got every paw, claw, and tail covered with expertise and
              heart.
            </p>

            <p>
              What started as a vision to provide top-tier veterinary care has
              grown into an award-winning practice that treats your furry,
              feathered, or scaly family members like our own. We're one of the
              few clinics in La Crescenta equipped to care for dogs, cats,
              birds, rabbits, reptiles, small mammals, and other exotic pets.
            </p>

            <p>
              Today, we're proudly AAHA-accredited and certified as a Cat
              Friendly Practice by the American Association of Feline
              Practitioners. Our passionate team delivers care with warmth and
              expertise, empowering pet owners with the knowledge to create a
              quality lifestyle for their pets.
            </p>
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-vet-border">
            <div>
              <div className="text-3xl font-semibold text-primary">25+</div>
              <div className="text-sm text-vet-gray-text">Years Trusted</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-primary">24</div>
              <div className="text-sm text-vet-gray-text">Best Vet Awards</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-primary">All</div>
              <div className="text-sm text-vet-gray-text">
                Pet Types Welcome
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative rounded-[2.5rem] overflow-hidden">
            <img
              src="/images/hospital.png"
              alt="Crescenta Valley Veterinary Hospital Interior"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-lg max-w-[280px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">★</span>
              </div>
              <div>
                <div className="font-semibold text-vet-dark-text">
                  "Best Vet Ever"
                </div>
                <div className="text-sm text-vet-gray-text">- Michael D.</div>
              </div>
            </div>
            <p className="text-sm text-vet-gray-text">
              "Best vet ever anywhere. You folks are the best, thanks for taking
              such good care of our 4-legged children."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
