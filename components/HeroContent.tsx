import { EmailSignup } from "./EmailSignup";

export function HeroContent() {
  return (
    <div className="flex flex-col gap-5 max-w-[527px]">
      {/* Main heading */}
      <h1 className="text-4xl md:text-6xl font-bold leading-[1] tracking-[-0.02em] text-gray-50">
        Crescenta Valley Veterinary Hospital
      </h1>

      {/* Subtitle */}
      <p className="text-lg leading-[1.4] text-gray-50">
        Passionate Veterinary Care for Dogs, Cats in La Crescenta & the
        Foothills
      </p>

      {/* Email signup form */}
      <EmailSignup />
    </div>
  );
}
