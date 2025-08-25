import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { Input } from "../ui/input";
import Image from "next/image";
import NavItem from "./NavItem";
import { links } from "@/lib/nav-items";
import LogoutButton from "../login/LogoutButton";

const AppDrawer: React.FC = () => {
  return (
    <div className="md:hidden flex items-center gap-3">
      <Drawer direction="left">
        <DrawerTrigger
          className="p-2 border rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          aria-label="Open navigation menu"
        >
          <Menu size={22} aria-hidden="true" />
          <span className="sr-only">Open navigation menu</span>
        </DrawerTrigger>

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-lg font-semibold">Menu</DrawerTitle>
          </DrawerHeader>

          <nav className="flex flex-col gap-2 p-4">
            {links.map((item, idx) => (
              <NavItem key={idx} item={item} />
            ))}
          </nav>

          <div className="border-t mt-4 p-4 flex flex-col gap-3">
            <Input
              placeholder="Search for something..."
              className="rounded-full h-[45px]"
            />
            <div className="flex gap-4">
              <Image
                src="/settings.png"
                alt="Settings"
                width={40}
                height={40}
                aria-label="Settings"
              />
              <Image
                src="/notifications.png"
                alt="Notifications"
                width={40}
                height={40}
                aria-label="Notifications"
              />
              <LogoutButton />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default AppDrawer;
