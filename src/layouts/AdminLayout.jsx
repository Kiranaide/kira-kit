import { Outlet } from "react-router";
import KAdminSidebar from "../components/KAdminSidebar";

export default function AdminLayout() {
  return (
    <KSidebarProvider>
      <KAdminSidebar />
      <KSidebarInset className="px-4 md:px-6 lg:px-8">
        <Outlet />
      </KSidebarInset>
    </KSidebarProvider>
  );
}
