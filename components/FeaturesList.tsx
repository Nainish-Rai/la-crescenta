import { FeatureItem } from "./FeatureItem";

const features = [
  {
    icon: "diamond",
    title: "Award-Winning Care",
    description: "Voted Best of Glendale since 2001",
  },
  {
    icon: "discount",
    title: "Comprehensive Services",
    description: "Medical, dental, surgical & wellness",
  },
  {
    icon: "shield-check",
    title: "Certified & Accredited",
    description: "AAHA & Cat Friendly Practice certified",
  },
  {
    icon: "coins",
    title: "Modern Facility",
    description: "State-of-the-art technology & equipment",
  },
  {
    icon: "message-circle",
    title: "Community Trusted",
    description: "Serving La Crescenta since 1999",
  },
];

export function FeaturesList() {
  return (
    <div className="flex items-center justify-center gap-[70px] w-[1104px]">
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}
