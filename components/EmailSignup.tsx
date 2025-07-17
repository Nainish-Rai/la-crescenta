"use client";

import Link from "next/link";
import { useState } from "react";

export function EmailSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email signup logic here
    console.log("Email submitted:", email);
  };

  return (
    <div className="flex items-center gap-4">
      {/* Email input */}
      <div className="flex flex-col">
        <Link href="mailto:cvvethospital@gmail.com" target="_blank">
          <div className="relative text-white">
            {/* <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your personal e-mail"
          className="w-full h-full px-[15px] py-[14px] bg-white border border-vet-border rounded-xl text-vet-gray-text placeholder:text-vet-gray-text focus:outline-none focus:ring-2 focus:ring-vet-primary focus:border-transparent"
          required
        /> */}
            cvvethospital@gmail.com
          </div>
        </Link>
        <Link href="tel:8182490022" className="text-white">
          {" "}
          (818) 249-0022
        </Link>
      </div>

      {/* Submit button */}
      <Link href="mailto:cvvethospital@gmail.com" target="_blank">
        <button
          type="submit"
          className="flex items-center justify-center gap-[5px] px-5 py-[5px] h-[42px] bg-vet-primary text-white font-semibold rounded-xl hover:bg-blue-400 cursor-pointer transition-colors duration-200"
        >
          Get supported
        </button>
      </Link>
    </div>
  );
}
