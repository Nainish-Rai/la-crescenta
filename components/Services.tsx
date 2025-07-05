export function Services() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Title Section */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-vet-dark-text mb-3 tracking-tight">
          We optimize your time
        </h2>
        <p className="text-base text-vet-gray-text max-w-md">
          We are proud of our clients and partners who have been with us for
          over two decades of exceptional veterinary care
        </p>

        {/* All Services Link */}
        <div className="mt-8 flex justify-end">
          <button className="text-sm font-semibold text-vet-dark-text hover:text-vet-primary transition-colors">
            All services →
          </button>
        </div>
      </div>

      {/* Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Trusted Caregivers */}
        <div className="relative bg-gradient-to-b from-blue-50 to-blue-100 rounded-[2.5rem] p-8 h-80 flex flex-col justify-between overflow-hidden">
          {/* Background overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 rounded-[2.5rem]"></div>
          {/* background image */}
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/6560385/pexels-photo-6560385.jpeg"
              alt="Trusted Caregivers"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Trusted Caregivers
            </h3>
          </div>

          <div className="relative z-10">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors">
              Call Us Now
            </button>
          </div>
        </div>

        {/* Card 2: Customer Satisfaction */}
        <div className="bg-blue-100 rounded-[2.5rem] p-8 h-80 flex flex-col justify-between border-b border-border">
          <div>
            <p className="text-lg font-semibold text-vet-dark-text leading-relaxed">
              Our AAHA-accredited team is experienced, trained, and passionate
              about providing exceptional pet care.
            </p>
          </div>

          <div className="border-t border-border pt-6">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-semibold text-primary">98%</span>
              <span className="text-xs font-semibold text-primary">
                Customer Satisfaction Rate 🌟
              </span>
            </div>
          </div>
        </div>

        {/* Card 3: Flexible Plans */}
        <div className="relative bg-gradient-to-b from-secondary to-accent rounded-[2.5rem] p-8 h-80 flex flex-col justify-between overflow-hidden">
          {/* Background overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 rounded-[2.5rem]"></div>
          {/* background image */}
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg"
              alt="Trusted Caregivers"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Flexible Plans
            </h3>
          </div>

          <div className="relative z-10">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors">
              Visit us
            </button>
          </div>
        </div>

        {/* Card 4: 24/7 Emergency Support */}
        <div className="bg-lime-100 rounded-[2.5rem] p-8 h-80 flex flex-col justify-between border-b border-border">
          <div>
            <p className="text-lg font-semibold text-vet-dark-text leading-relaxed">
              Comprehensive care with emergency support for your pet's unique
              needs and urgent situations.
            </p>
          </div>

          <div className="border-t border-border pt-6">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-semibold text-primary">24/7</span>
              <span className="text-xs font-semibold text-primary">
                Emergency Support Available 🚑
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
