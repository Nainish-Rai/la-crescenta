import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import Link from "next/link";

export function ServicesPreview() {
  const services = [
    {
      id: 1,
      title: "Urgent Care",
      description: "Immediate attention for unexpected illnesses or injuries.",
      image: "/images/service1.png",
      href: "/services",
    },
    {
      id: 2,
      title: "Wellness Exams",
      description: "Regular check-ups for a long, healthy life for your pet.",
      image: "/images/service2.png",
      href: "/services",
    },
    {
      id: 3,
      title: "On-Site Pharmacy",
      description: "Convenient access to your pet's medications.",
      image: "/images/hospital.png",
      href: "/services",
    },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-semibold text-vet-dark-text">
            Our Services
          </h2>
          <Link
            href="/services"
            className="text-sm font-semibold text-vet-dark-text hover:text-vet-primary transition-colors"
          >
            View all
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link href={service.href} key={service.id} passHref>
              <article className="group cursor-pointer">
                <div className="space-y-5">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <h3 className="text-2xl font-semibold text-vet-dark-text leading-tight group-hover:text-vet-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-vet-light-gray">
                          {service.description}
                        </p>
                      </div>

                      {/* Arrow Icon */}
                      <div className="flex-shrink-0 w-6 h-6 text-vet-light-gray group-hover:text-vet-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200">
                        <ArrowUpRight size={24} strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
