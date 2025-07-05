import { EmailSignup } from "./EmailSignup";

export function HeroContent() {
  return (
    <div className="flex flex-col gap-5 max-w-[527px]">
      {/* Main heading */}
      <h1 className="text-5xl md:text-6xl font-bold leading-[1] tracking-[-0.02em] text-vet-dark-text">
        Award-Winning Veterinary Care
      </h1>

      {/* Subtitle */}
      <p className="text-lg leading-[1.4] text-vet-dark-text">
        Compassionate, state-of-the-art veterinary care for your beloved pets.
        Our experienced team is dedicated to keeping your furry family members
        healthy, happy, and thriving.
      </p>

      {/* Email signup form */}
      <EmailSignup />
    </div>
  );
}
