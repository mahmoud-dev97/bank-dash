import { SidebarProvider } from "@/components/ui/sidebar";
import AppHeader from "./AppHeader";
import { AppSidebar } from "./AppSidebar";
import ProtectedRoute from "../auth/ProtectRoute";

function StandardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <div className="flex-1 flex flex-col">
            <AppHeader />
            <main className="flex-1 p-4">{children}</main>
          </div>
        </div>
      </SidebarProvider>
    </ProtectedRoute>
  );
}

export default StandardLayout;
