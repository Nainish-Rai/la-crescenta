export function AboutAccreditations() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 bg-blue-50/30">
      {/* Title Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-vet-dark-text mb-6 tracking-tight">
          Awards & Accreditations
        </h2>
        <p className="text-lg text-vet-gray-text max-w-2xl mx-auto">
          Our commitment to excellence is recognized through prestigious
          certifications and continuous community recognition.
        </p>
      </div>

      {/* Main accreditations grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* AAHA Accreditation */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-vet-border">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-3xl">🏥</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-vet-dark-text">
                AAHA Accredited
              </h3>
              <p className="text-vet-gray-text">Since 2001</p>
            </div>
          </div>
          <p className="text-vet-gray-text leading-relaxed mb-6">
            The American Animal Hospital Association (AAHA) accreditation
            represents the gold standard in veterinary care. Only 12-15% of
            veterinary practices in North America meet AAHA's rigorous standards
            for quality care.
          </p>
          <div className="bg-blue-50 rounded-xl p-4">
            <p className="text-sm text-vet-dark-text font-medium">
              "AAHA accreditation means we voluntarily submit to comprehensive
              evaluations of our medical care standards, from pain management to
              surgical protocols."
            </p>
          </div>
        </div>

        {/* Cat Friendly Practice */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-vet-border">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-3xl">🐱</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-vet-dark-text">
                Cat Friendly Practice
              </h3>
              <p className="text-vet-gray-text">Certified by AAFP</p>
            </div>
          </div>
          <p className="text-vet-gray-text leading-relaxed mb-6">
            Certified by the American Association of Feline Practitioners, this
            designation recognizes our specialized knowledge in feline medicine
            and our cat-friendly facilities and protocols.
          </p>
          <div className="bg-green-50 rounded-xl p-4">
            <p className="text-sm text-vet-dark-text font-medium">
              "Our cat-friendly approach reduces stress for feline patients
              through specialized handling techniques and dedicated cat
              examination rooms."
            </p>
          </div>
        </div>
      </div>

      {/* Community Recognition */}
      <div className="bg-white rounded-[2.5rem] p-12 shadow-sm border border-vet-border mb-12">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-semibold text-vet-dark-text mb-4">
            Community Recognition
          </h3>
          <p className="text-vet-gray-text">
            Trusted by our community for over two decades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Best of Glendale */}
          <div className="text-center">
            <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🏆</span>
            </div>
            <h4 className="text-xl font-semibold text-vet-dark-text mb-2">
              Best of Glendale
            </h4>
            <p className="text-vet-gray-text">Winner every year since 2001</p>
          </div>

          {/* Best of Foothills */}
          <div className="text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🥇</span>
            </div>
            <h4 className="text-xl font-semibold text-vet-dark-text mb-2">
              Best of the Foothills
            </h4>
            <p className="text-vet-gray-text">Consecutive awards since 2001</p>
          </div>

          {/* Community Trust */}
          <div className="text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">❤️</span>
            </div>
            <h4 className="text-xl font-semibold text-vet-dark-text mb-2">
              Community Trust
            </h4>
            <p className="text-vet-gray-text">25+ years of faithful service</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="bg-primary rounded-[2rem] p-8 text-white max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">
            Experience Award-Winning Care
          </h3>
          <p className="text-lg mb-6 opacity-95">
            Join thousands of families who trust Crescenta Valley Veterinary
            Hospital with their pets' health and happiness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors">
              Schedule Your Visit
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-6 py-3 rounded-lg transition-colors">
              Call (818) 249-0022
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
