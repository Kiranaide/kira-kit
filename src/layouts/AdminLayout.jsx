import { Outlet } from "react-router";
import KAdminSidebar from "../components/KAdminSidebar";
import { KToggleMode } from "../components/KToggleMode";

export default function AdminLayout() {
  return (
    <KSidebarProvider>
      <KAdminSidebar />
      <KSidebarInset className="overflow-hidden px-4 md:px-6 lg:px-8">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex flex-1 items-center gap-2 px-3">
            <KSidebarTrigger className="-ms-4" />
            <KToggleMode />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 lg:gap-6 py-4 lg:py-6">
          <Outlet />
        </div>
      </KSidebarInset>
    </KSidebarProvider>
  );
}
