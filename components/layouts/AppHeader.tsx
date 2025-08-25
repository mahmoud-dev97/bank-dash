"use client";
import { Input } from "../ui/input";
import Image from "next/image";
import { usePathname } from "next/navigation";
import AppDrawer from "./AppDrawer";
import LogoutButton from "../login/LogoutButton";

function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-6 py-3">
      <AppDrawer />
      <h1 className="text-[#343C6A] font-[600] text-[22px] md:text-[28px]">
        {pathname === "/dashboard" ? "Overview" : "Accounts"}
      </h1>
      <Image
        src="/avatar.png"
        alt="User profile"
        width={45}
        height={45}
        className="md:hidden"
        aria-label="User profile"
      />
      <div className="hidden md:flex items-center gap-4">
        <Input
          placeholder="Search for something..."
          className="rounded-full h-[50px]"
        />
        <Image
          src="/settings.png"
          alt="Settings"
          width={50}
          height={50}
          aria-label="Settings"
        />
        <Image
          src="/notifications.png"
          alt="Notifications"
          width={50}
          height={50}
          aria-label="Notifications"
        />
        <LogoutButton />
        <Image
          src="/avatar.png"
          alt="User profile"
          width={60}
          height={60}
          className="rounded-full"
          aria-label="User profile"
        />
      </div>
    </header>
  );
}

export default AppHeader;
