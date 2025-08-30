import { SidebarProvider } from "@/components/ui/sidebar";
import AppHeader from "./AppHeader";
import { AppSidebar } from "./AppSidebar";

function StandardLayout({ children }: { children: React.ReactNode }) {
  return (
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <div className="flex-1 flex flex-col">
            <AppHeader />
            <main className="flex-1 p-4">{children}</main>
          </div>
        </div>
      </SidebarProvider>
  );
}

export default StandardLayout;
