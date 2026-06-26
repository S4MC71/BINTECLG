interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "green" | "red" | "gray";
  size?: "sm" | "md";
}

const variantClasses = {
  gold:  "bg-[#fdf8ee] text-[#B8912A] border border-[#D4A820]/40",
  green: "bg-[#e8f5ee] text-[#006B3C] border border-[#006B3C]/30",
  red:   "bg-red-50 text-[#9B1515] border border-[#C41E1E]/30",
  gray:  "bg-gray-100 text-gray-600 border border-gray-200",
};

const sizeClasses = {
  sm: "text-[10px] px-2 py-0.5",
  md: "text-xs px-2.5 py-1",
};

export default function Badge({
  children,
  variant = "green",
  size = "md",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center font-semibold rounded-full tracking-wide ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      {children}
    </span>
  );
}
