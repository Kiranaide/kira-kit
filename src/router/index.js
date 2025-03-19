import Home from "@/pages/home";
import { createBrowserRouter } from "react-router";
import AdminLayout from "@/layouts/AdminLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AdminLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
