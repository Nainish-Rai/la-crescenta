import Image from "next/image";
import { ChevronRight } from "lucide-react";

export function Navbar() {
  const navLinks = ["Home", "Services", "About Us", "Blog", "Contact"];

  return (
    <nav className="bg-white h-20 w-full max-w-7xl mx-auto flex items-center justify-between px-4">
      {/* Logo */}
      <div className="flex items-center ml-4">
        <Image
          src="/images/logo.png"
          alt="Pet Care Logo"
          width={40}
          height={40}
          className="w-10 h-10"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-10">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href="#"
            className="text-sm font-semibold text-gray-700 hover:text-blue-700 transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2.5 mr-4">
        {/* Sign in Button */}

        {/* Book a Service Button */}
        <button className="flex items-center justify-center px-2.5 py-2.5 rounded-lg bg-vet-primary hover:bg-vet-primary  cursor-pointer transition-colors">
          <span
            className="text-sm font-semibold text-white"
            style={{ fontSize: "0.75rem" }}
          >
            Book a Service
          </span>
        </button>
      </div>
    </nav>
  );
}
