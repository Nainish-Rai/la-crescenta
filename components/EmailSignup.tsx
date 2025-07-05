"use client";

import { useState } from "react";

export function EmailSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email signup logic here
    console.log("Email submitted:", email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-[5px]">
      {/* Email input */}
      <div className="relative w-[310px] h-[50px]">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your personal e-mail"
          className="w-full h-full px-[15px] py-[14px] bg-white border border-vet-border rounded-xl text-vet-gray-text placeholder:text-vet-gray-text focus:outline-none focus:ring-2 focus:ring-vet-primary focus:border-transparent"
          required
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="flex items-center justify-center gap-[5px] px-5 py-[10px] h-[50px] bg-vet-primary text-white font-semibold rounded-xl hover:bg-blue-400 cursor-pointer transition-colors duration-200"
      >
        Get supported
      </button>
    </form>
  );
}
