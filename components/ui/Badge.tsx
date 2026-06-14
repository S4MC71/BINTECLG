interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "navy" | "green" | "red" | "gray";
  size?: "sm" | "md";
}

const variantClasses = {
  gold: "bg-[#fdf8ee] text-[#9e6900] border border-[#e0cc96]",
  navy: "bg-[#f0f5fb] text-[#0A1628] border border-[#a3bfe5]",
  green: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  red: "bg-red-50 text-red-700 border border-red-200",
  gray: "bg-gray-100 text-gray-600 border border-gray-200",
};

const sizeClasses = {
  sm: "text-[10px] px-2 py-0.5",
  md: "text-xs px-2.5 py-1",
};

export default function Badge({
  children,
  variant = "navy",
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
