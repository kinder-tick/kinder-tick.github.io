import { ShieldCheck, Heart, CircleCheckBig } from "lucide-react";

const items = [
  { Icon: ShieldCheck, label: "Safe & Secure" },
  { Icon: Heart, label: "Made with Love" },
  { Icon: CircleCheckBig, label: "Trusted by Parents" },
];

const PerformanceFooter = () => (
  <footer className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap">
    {items.map(({ Icon, label }) => (
      <div key={label} className="flex items-center gap-2 text-muted-foreground">
        <Icon size={20} strokeWidth={2.2} />
        <span className="text-sm font-medium">{label}</span>
      </div>
    ))}
  </footer>
);

export default PerformanceFooter;
