import Image from "next/image";
import { Phone, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  const navigationItems = ["Home", "Services", "About Us", "Blog", "Contact"];

  return (
    <footer className="bg-background border-t border-vet-border py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 relative">
              <Image
                src="/images/logo.png"
                alt="Crescenta Valley Veterinary Hospital Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-lg font-medium text-vet-dark-text">
              Crescenta Valley Vet
            </span>
            {/* Navigation Menu */}
            <nav className="flex ml-8 flex-wrap items-center justify-center gap-5">
              {navigationItems.map((item, index) => (
                <div key={item} className="flex items-center gap-5">
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm font-medium text-vet-dark-text hover:text-vet-primary transition-colors"
                  >
                    {item}
                  </a>
                  {index < navigationItems.length - 1 && (
                    <div className="w-0.5 h-0.5 bg-vet-gray-text rounded-full"></div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="flex items-center gap-10">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-600" strokeWidth={2} />
              <a
                href="tel:+18182490022"
                className="text-sm font-semibold text-vet-dark-text hover:text-vet-primary transition-colors"
              >
                (818) 249-0022
              </a>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-5">
              <a
                href="#"
                className="text-vet-dark-text hover:text-vet-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-vet-dark-text hover:text-vet-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-vet-dark-text hover:text-vet-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
