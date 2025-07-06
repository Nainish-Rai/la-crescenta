import Image from "next/image";
import { Play, MessageCircle, ChevronRight } from "lucide-react";

export function Testimonials() {
  const testimonial = {
    message:
      "The care and compassion shown by Dr. Black and his team is exceptional. When my cat needed emergency surgery, they explained everything clearly and made sure I felt comfortable throughout the process. The follow-up care was outstanding, and my cat recovered beautifully. I trust them completely with all my pets' health needs.",
    author: "Sarah M.",
    title: "Pet Owner since 2018",
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-center">
          {/* Testimonial Content */}
          <div className="bg-gradient-to-br col-span-3 from-blue-50 to-blue-100 rounded-3xl p-8 lg:p-12 relative">
            {/* Quote Icon */}
            <div className="inline-flex items-center justify-center w-10 h-10 bg-vet-dark-text rounded-xl mb-8">
              <MessageCircle className="w-6 h-6 text-white" strokeWidth={2} />
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl lg:text-2xl font-semibold text-vet-dark-text leading-tight mb-8">
              "{testimonial.message}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-base font-semibold text-vet-dark-text">
                {testimonial.author}
              </span>
              <div className="w-1 h-1 bg-green-600 rounded-full"></div>
              <span className="text-sm text-vet-gray-text">
                {testimonial.title}
              </span>
            </div>

            {/* View Testimonials Button */}
            <button className="inline-flex items-center gap-2 bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
              View Testimonials
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>

          {/* Video Section */}
          <div className="relative col-span-2 group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl aspect-square">
              {/* <Image
                src="/images/testimonials-video-bg.jpg"
                alt="Crescenta Valley Veterinary Hospital - Video Testimonial"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              /> */}
              <video
                src={"/videos/testimonial.mp4"}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-end justify-end p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <Play
                    className="w-6 h-6 text-vet-dark-text ml-1"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                </div>
              </div>

              {/* Overlay for better contrast */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>

            {/* Video Title/Description Overlay */}
            <div className="absolute bottom-10 left-8 right-20">
              <div className="bg-black/60 backdrop-blur-sm max-w-xs p-4 text-white px-4 py-2 rounded-lg text-sm font-medium">
                Watch Our Story
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
