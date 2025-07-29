"use client";

import {
  Clock,
  Heart,
  Pill,
  Shield,
  Sparkles,
  Scissors,
  FlowerIcon,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    title: "Urgent Care",
    description:
      "When your pet needs immediate attention, we're here to help. Our urgent care service provides quick, compassionate care for unexpected illnesses or injuries",
    icon: Clock,
    alt: "Dog Receiving Care",
  },
  {
    title: "Wellness Exams",
    description:
      "Regular check-ups are the key to a long, healthy life for your furry friend. Our thorough wellness exams help prevent issues and catch any concerns early.",
    icon: Stethoscope,
    alt: "Pet Wellness Exam",
  },
  {
    title: "On-Site Pharmacy",
    description:
      "Convenience meets care with our fully-stocked pharmacy. Get your pet's medications right away, with expert guidance from our team.",
    icon: Pill,
    alt: "On-Site Pharmacy",
  },

  {
    title: "Vaccinations",
    description:
      "Protect your pet from preventable diseases with our tailored vaccination plans. We'll work with you to ensure your companion stays healthy and happy.",
    icon: Shield,
    alt: "Vaccinations",
  },
  {
    title: "Dental Cleanings",
    description:
      "A healthy mouth means a healthier pet. Our gentle dental cleanings help prevent pain and serious health issues down the road.",
    icon: Sparkles,
    alt: "Dental Cleanings",
  },
  {
    title: "Surgeries",
    description:
      "From routine procedures to complex operations, our skilled veterinary surgeons provide top-notch care in a safe, modern facility.",
    icon: Scissors,
    alt: "Surgeries",
  },

  {
    title: "End-Of-Life Care",
    description:
      "When it's time to say goodbye, we're here to support you and your pet with compassion and dignity. Our team ensures comfort and peace during this difficult transition.",
    icon: FlowerIcon,
    alt: "End-Of-Life Care",
  },
  {
    title: "Sick Visits",
    description:
      "If your pet isn't feeling their best, don't wait. Our caring team is ready to diagnose and treat illnesses, getting your furry friend back to their happy, healthy self.",
    icon: Heart,
    alt: "Sick Visits",
  },
];

const ServicesSection = () => {
  return (
    <section className="">
      <div className="container">
        <div className="mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 space-y-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div className="block group" rel="noopener" key={index}>
                <div className="mb-6 h-20 w-20 rounded-2xl bg-gradient-to-br from-vet-primary/10 to-vet-primary/20 flex items-center justify-center transition group-hover:from-vet-primary/20 group-hover:to-vet-primary/30">
                  <IconComponent className="h-8 w-8 text-vet-primary" />
                </div>
                <h6 className="mb-1 text-lg font-semibold text-vet-primary">
                  {service.title}
                </h6>
                <p className="text-gray-900 text-sm ">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { ServicesSection };
