"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "What types of pets do you care for?",
    answer:
      "We provide comprehensive veterinary care for dogs, cats, birds, rabbits, reptiles, small mammals, and other exotic pets. Our experienced team is equipped to handle the unique needs of each species.",
  },
  {
    question: "How do I book a service?",
    answer:
      "You can book an appointment by calling us at (818) 249-0022 during our business hours (Monday-Friday, 8:30 AM – 5:00 PM), or by visiting our clinic at 3254 Foothill Boulevard, La Crescenta, CA 91214.",
  },
  {
    question: "Will I receive updates about my pet?",
    answer:
      "Yes, we believe in keeping pet owners informed throughout their pet's care. Our team will provide updates during treatments and procedures, and we're always available to answer your questions.",
  },
  {
    question: "Are your veterinarians trained and certified?",
    answer:
      "Absolutely. Our veterinary hospital is AAHA-accredited since 2001 and certified as a Cat Friendly Practice by the American Association of Feline Practitioners. Our team maintains the highest professional standards.",
  },
  {
    question: "What if my pet has special needs or requires medication?",
    answer:
      "We specialize in comprehensive care for pets with special needs. Our experienced veterinarians can manage complex medical conditions and provide detailed medication management plans tailored to your pet's specific requirements.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24  bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl max-w-md font-semibold text-vet-dark-text mb-3 tracking-tight">
                FAQ
              </h2>
              <p className="text-base text-vet-dark-text">
                Answers to popular questions
              </p>
            </div>

            <div className="space-y-6 pt-8">
              <p className="text-sm text-vet-light-gray leading-relaxed">
                If you don't find answers to your questions, please contact us
              </p>

              <button className="inline-flex items-center justify-center gap-2 bg-vet-primary hover:bg-vet-primary/90 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors cursor-pointer">
                Contact us
              </button>
            </div>
          </div>

          {/* Right FAQ Panel */}
          <div className="bg-white rounded-3xl border border-vet-border overflow-hidden">
            {faqData.map((faq, index) => (
              <div key={index} className="relative">
                {/* Question Row */}
                <div
                  className="flex items-center justify-between p-6 lg:p-8 cursor-pointer hover:bg-gray-50/50 transition-colors"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-lg font-semibold text-vet-dark-text pr-4 leading-snug">
                    {faq.question}
                  </h3>

                  <button
                    className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      openIndex === index ? "bg-gray-100" : "bg-blue-50"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus
                        className="w-5 h-5 text-gray-600"
                        strokeWidth={2}
                      />
                    ) : (
                      <Plus className="w-5 h-5 text-blue-700" strokeWidth={2} />
                    )}
                  </button>
                </div>

                {/* Answer Panel */}
                {openIndex === index && (
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                    <p className="text-sm text-vet-dark-text leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}

                {/* Separator Line */}
                {index < faqData.length - 1 && (
                  <div className="mx-6 lg:mx-8 border-b border-vet-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
