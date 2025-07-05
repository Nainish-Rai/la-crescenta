interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

export function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-[10px]">
      {/* Icon container */}
      <div className="w-6 h-6 flex-shrink-0">
        <FeatureIcon type={icon} />
      </div>

      {/* Text content */}
      <div className="flex flex-col">
        <h3 className="text-base font-semibold text-vet-dark-text leading-[1.4]">
          {title}
        </h3>
        <p className="text-xs text-vet-light-gray leading-[1.4]">
          {description}
        </p>
      </div>
    </div>
  );
}

function FeatureIcon({ type }: { type: string }) {
  const iconClasses = "w-full h-full stroke-vet-primary stroke-2 fill-none";

  switch (type) {
    case "diamond":
      return (
        <svg viewBox="0 0 24 24" className={iconClasses}>
          <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
          <path d="M12 22V9" />
        </svg>
      );
    case "discount":
      return (
        <svg viewBox="0 0 24 24" className={iconClasses}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9 9h.01" />
          <path d="M15 15h.01" />
          <path d="M15 9l-6 6" />
        </svg>
      );
    case "shield-check":
      return (
        <svg viewBox="0 0 24 24" className={iconClasses}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" className="fill-vet-primary" />
        </svg>
      );
    case "coins":
      return (
        <svg viewBox="0 0 24 24" className={iconClasses}>
          <circle cx="8" cy="8" r="6" />
          <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
          <path d="M7 6h1v4" />
          <path d="M16.71 13.88l.7.71-2.82 2.82" />
        </svg>
      );
    case "message-circle":
      return (
        <svg viewBox="0 0 24 24" className={iconClasses}>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      );
    default:
      return null;
  }
}
