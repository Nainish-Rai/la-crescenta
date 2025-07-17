"use client";

const services = [
  {
    title: "Urgent Care",
    description:
      "When your pet needs immediate attention, we're here to help. Our urgent care service provides quick, compassionate care for unexpected illnesses or injuries",
    image: "/images/service1.png",
    alt: "Dog Receiving Care",
  },
  {
    title: "Wellness Exams",
    description:
      "Regular check-ups are the key to a long, healthy life for your furry friend. Our thorough wellness exams help prevent issues and catch any concerns early.",
    image: "/images/service2.png",
    alt: "Pet Wellness Exam",
  },
  {
    title: "On-Site Pharmacy",
    description:
      "Convenience meets care with our fully-stocked pharmacy. Get your pet's medications right away, with expert guidance from our team.",
    image: "/images/hospital.png",
    alt: "On-Site Pharmacy",
  },
  {
    title: "Diagnostics",
    description:
      "Using state-of-the-art equipment, we can quickly and accurately diagnose your pet's condition. From blood work to imaging, we've got the tools to get answers.",
    image:
      "https://images.pexels.com/photos/33000545/pexels-photo-33000545.jpeg",
    alt: "On-Site Pharmacy",
  },
  {
    title: "Vaccinations",
    description:
      "Protect your pet from preventable diseases with our tailored vaccination plans. We'll work with you to ensure your companion stays healthy and happy.",
    image: "/images/hospital.png",
    alt: "On-Site Pharmacy",
  },
  {
    title: "Dental Cleanings",
    description:
      "A healthy mouth means a healthier pet. Our gentle dental cleanings help prevent pain and serious health issues down the road.",
    image: "https://images.pexels.com/photos/6235238/pexels-photo-6235238.jpeg",
    alt: "On-Site Pharmacy",
  },
  {
    title: "Surgeries",
    description:
      "From routine procedures to complex operations, our skilled veterinary surgeons provide top-notch care in a safe, modern facility.",
    image: "https://images.pexels.com/photos/6235113/pexels-photo-6235113.jpeg",
    alt: "On-Site Pharmacy",
  },
  {
    title: "Spays & Neuters",
    description:
      "These important procedures help control pet populations and can have health benefits for your furry family member. We'll guide you through the process with care and expertise.",
    image:
      "https://images.pexels.com/photos/10559203/pexels-photo-10559203.jpeg",
    alt: "On-Site Pharmacy",
  },
  {
    title: "End-Of-Life Care",
    description:
      "When it's time to say goodbye, we're here to support you and your pet with compassion and dignity. Our team ensures comfort and peace during this difficult transition.",
    image: "https://images.pexels.com/photos/7008099/pexels-photo-7008099.jpeg",
    alt: "On-Site Pharmacy",
  },
  {
    title: "Sick Visits",
    description:
      "If your pet isn't feeling their best, don't wait. Our caring team is ready to diagnose and treat illnesses, getting your furry friend back to their happy, healthy self.",
    image: "https://images.pexels.com/photos/7474852/pexels-photo-7474852.jpeg",
    alt: "On-Site Pharmacy",
  },
  {
    title: "Puppy & Kitten Care",
    description:
      "Give your new family member the best start in life. Our puppy and kitten care programs cover all the essentials for a healthy, happy beginning.",
    image: "https://images.pexels.com/photos/1350591/pexels-photo-1350591.jpeg",
    alt: "On-Site Pharmacy",
  },
];

const ServicesSection = () => {
  return (
    <section className="">
      <div className="container">
        <div className="mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 space-y-8">
          {services.map((service, index) => (
            <div className="block group" rel="noopener" key={index}>
              <img
                src={service.image}
                alt={service.alt}
                className="mb-6 h-80 w-full rounded-2xl object-cover transition group-hover:brightness-90"
              />
              <h6 className="mb-1 text-lg font-semibold text-vet-primary">
                {service.title}
              </h6>
              <p className="text-gray-900 text-sm ">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ServicesSection };
