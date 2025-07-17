// New Services page in app/services/page.tsx
import { Footer } from "@/components/Footer";
import { ServicesSection } from "@/components/ServicesComponent";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-vet-primary mb-4">
          Crescenta Valley Veterinary Hospital
        </h1>

        {/* Intro copy */}
        <div className="max-w-4xl">
          <p className="text-base text-vet-gray-text mb-6">
            Crescenta Valley Veterinary Hospital provides comprehensive,
            compassionate care for dogs, cats, birds, rabbits, reptiles, small
            mammals, and exotic pets. Our AAHA-accredited, Cat Friendly Practice
            is dedicated to high-quality medicine, surgery, and client education
            in a modern, state-of-the-art facility.
          </p>
          <p className="text-base text-vet-gray-text mb-12">
            Since 1999, our friendly and professional team has been committed to
            memorable service and the highest ethical standards. Voted 'Best of
            Glendale/Best of the Foothills' every year since 2001, we proudly
            serve La Crescenta and surrounding communities with a focus on
            proactive, personalized pet care.
          </p>
        </div>

        {/* Services Component */}
        <ServicesSection />

        {/* Contact & CTA */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center bg-blue-50 p-8 rounded-lg">
          <div>
            <p className="font-semibold mb-1">Call us at (818) 249-0022</p>
            <p className="text-vet-gray-text">
              3254 Foothill Boulevard, La Crescenta, CA 91214
            </p>
            <p className="text-vet-gray-text">
              Email: cvvethospital@gmail.com / info@cvvet.com
            </p>
            <p className="text-vet-gray-text">Mon–Fri: 8:30 AM–5:00 PM</p>
          </div>
          <a
            href="https://www.cvvet.com"
            target="_blank"
            rel="noopener"
            className="mt-4 md:mt-0 bg-vet-primary text-white px-6 py-3 rounded-lg font-semibold"
          >
            Book Your Pet's Appointment Now
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}
