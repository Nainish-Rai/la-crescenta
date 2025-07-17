import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about-us" },
    // { label: "Blog", href: "/blog" },
    // { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <nav className="bg-white h-20 w-full max-w-7xl mx-auto flex items-center justify-between px-4">
      {/* Logo */}
      <div className="flex items-center ml-4">
        <Image
          src="/images/logo.png"
          alt="Pet Care Logo"
          width={40}
          height={40}
          className="w-16 h-16"
        />
      </div>

      {/* Navigation Links */}
      <div className=" items-center hidden md:flex gap-10">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-base font-semibold text-gray-700 hover:text-blue-700 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2.5 mr-4">
        {/* Sign in Button */}

        {/* Book a Service Button */}
        <Link href="/contact-us">
          <button className="flex items-center justify-center px-2.5 py-2.5 rounded-lg bg-vet-primary hover:bg-vet-primary  cursor-pointer transition-colors">
            <span
              className="text-sm font-semibold text-white"
              // style={{ fontSize: "0.75rem" }}
            >
              Contact Us
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );
}
