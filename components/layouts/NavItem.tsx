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
      <div 
        className={`${baseClasses} text-[#B1B1B1] cursor-not-allowed`}
        aria-disabled="true"
      >
        <Icon 
          size={sidebar ? 25 : 18} 
          color="#B1B1B1" 
          aria-hidden="true"
        />
        <span className="text-[18px] font-[500]">
          {item.name}
          <span className="sr-only"> (unavailable)</span>
        </span>
      </div>
    );
  }

  return (
    <Link
      href={item.url}
      className={`${baseClasses} ${
        isActive 
          ? "text-[#2D60FF] bg-blue-50" 
          : "text-[#B1B1B1] hover:bg-gray-50"
      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg`}
      aria-current={isActive ? "page" : undefined}
      title={item.name}
    >
      <Icon 
        size={sidebar ? 25 : 18} 
        color={isActive ? "#2D60FF" : "#B1B1B1"} 
        aria-hidden="true"
      />
      <span className="text-[18px] font-[500]">
        {item.name}
        {isActive && <span className="sr-only">(current page)</span>}
      </span>
    </Link>
  );
};

export default NavItem;
