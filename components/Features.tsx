interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-6 h-6 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold text-vet-dark-text mt-2">{title}</h3>
      <p className="text-sm text-vet-gray-text leading-relaxed">
        {description}
      </p>
    </div>
  );
}

// Service Icons Components
function PetSittingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-full h-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="M16.71 13.88l.7.71-2.82 2.82" />
    </svg>
  );
}

function GroomingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-full h-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
      <circle cx="12" cy="11" r="2" fill="currentColor" />
    </svg>
  );
}

function VetVisitsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-full h-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 15h.01" />
      <path d="M12 15h2" />
    </svg>
  );
}

function DogWalkingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-full h-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function BoardingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-full h-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function MedicationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-full h-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9 9h.01" />
      <path d="M15 15h.01" />
      <path d="M15 9l-6 6" />
    </svg>
  );
}

function CustomerAvatars() {
  return (
    <div className="flex items-center -space-x-2">
      <img
        src="https://i.pravatar.cc/400?img=44"
        alt="Customer avatar"
        className="w-12 h-12 rounded-full border-2 border-white object-cover"
      />
      <img
        src="https://i.pravatar.cc/400?img=32"
        alt="Customer avatar"
        className="w-12 h-12 rounded-full border-2 border-white object-cover"
      />
      <img
        src="https://i.pravatar.cc/400?img=68"
        alt="Customer avatar"
        className="w-12 h-12 rounded-full border-2 border-white object-cover"
      />
      <img
        src="https://i.pravatar.cc/400?img=15"
        alt="Customer avatar"
        className="w-12 h-12 rounded-full border-2 border-white object-cover"
      />
      <img
        src="https://i.pravatar.cc/400?img=10"
        alt="Customer avatar"
        className="w-12 h-12 rounded-full border-2 border-white object-cover"
      />
      <div className="w-12 h-12 rounded-full bg-primary border-2 border-white flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      </div>
    </div>
  );
}

export function Features() {
  const services = [
    {
      icon: <PetSittingIcon />,
      title: "Comprehensive Care",
      description:
        "Complete veterinary services for dogs, cats, birds, rabbits, reptiles, and exotic pets with compassionate, professional attention.",
    },
    {
      icon: <GroomingIcon />,
      title: "Preventive Wellness",
      description:
        "Proactive health maintenance including wellness exams, vaccinations, and client education to keep your pet healthy.",
    },
    {
      icon: <VetVisitsIcon />,
      title: "Medical & Surgical",
      description:
        "Advanced medical treatments and surgical procedures using state-of-the-art equipment and modern techniques.",
    },
    {
      icon: <DogWalkingIcon />,
      title: "AAHA Accredited",
      description:
        "Accredited by the American Animal Hospital Association, ensuring the highest standards of veterinary excellence.",
    },
    {
      icon: <BoardingIcon />,
      title: "Cat Friendly Practice",
      description:
        "Certified by the American Association of Feline Practitioners for specialized feline care and comfort.",
    },
    {
      icon: <MedicationIcon />,
      title: "Emergency Support",
      description:
        "Urgent care and medical support when your pet needs immediate attention from our experienced team.",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Header Section */}
        <div className="lg:col-span-1 flex flex-col justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl max-w-md font-semibold text-vet-dark-text mb-3 tracking-tight">
              Try our services and see for yourself
            </h2>
          </div>

          {/* Customer Testimonials */}
          <div className="mt-12 space-y-5">
            <p className="text-base text-vet-gray-text max-w-md">
              These people have already
              <br />
              tried our services
            </p>
            <CustomerAvatars />
          </div>
        </div>

        {/* Services Grid */}
        <div className="lg:col-span-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <FeatureCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
