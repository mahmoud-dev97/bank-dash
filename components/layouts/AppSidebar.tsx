'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { links } from "@/lib/nav-items";
import NavItem from "./NavItem";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-white">
        <div className="h-[101px] flex items-center justify-center">
          <Image src="/logo.png" alt="logo" width={183} height={36} priority />
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-[24px]">
              {links.map((item) => {
                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild className="gap-[24px]">
                      <NavItem item={item} sidebar={true} />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
