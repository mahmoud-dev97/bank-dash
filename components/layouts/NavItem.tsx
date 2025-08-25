"use client";
import Link from "next/link";
import { links } from "@/lib/nav-items";
import { usePathname } from "next/navigation";

interface NavItemProps {
  item: (typeof links)[number];
  sidebar?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ item, sidebar }) => {
  const pathname = usePathname();
  const isActive = pathname === item.url;
  const Icon = item.icon;
  const baseClasses = "flex items-center gap-3 rounded-lg px-3 py-2 transition";

  if (item.disabled) {
    return (
      <div className={`${baseClasses} text-[#B1B1B1] cursor-not-allowed`}>
        <Icon size={sidebar ? 25 : 18} color="#B1B1B1" />
        <span className="text-[18px] font-[500]">{item.name}</span>
      </div>
    );
  }

  return (
    <Link
      rel="canonical"
      href={item.url}
      className={`${baseClasses} ${
        isActive ? "text-[#2D60FF]" : "text-[#B1B1B1]"
      }`}
    >
      <Icon size={sidebar ? 25 : 18} color={isActive ? "#2D60FF" : "#B1B1B1"} />
      <span className="text-[18px] font-[500]">{item.name}</span>
    </Link>
  );
};

export default NavItem;
