import { Outlet } from "react-router";
import KAdminSidebar from "../components/KAdminSidebar";

export default function AdminLayout() {
  return (
    <KSidebarProvider>
      <KAdminSidebar />
      <KSidebarInset className="overflow-hidden px-4 md:px-6 lg:px-8">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex flex-1 items-center gap-2 px-3">
            <KSidebarTrigger className="-ms-4" />
            <KSeparator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 lg:gap-6 py-4 lg:py-6">
          <Outlet />
        </div>
      </KSidebarInset>
    </KSidebarProvider>
  );
}
