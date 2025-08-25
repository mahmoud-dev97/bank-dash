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
        <DrawerTrigger className="p-2 border rounded-lg">
          <Menu size={22} />
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
                alt="settings"
                width={40}
                height={40}
              />
              <Image
                src="/notifications.png"
                alt="notifications"
                width={40}
                height={40}
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
