import Home from "@/pages/home";
import { createBrowserRouter } from "react-router";
import AdminLayout from "@/layouts/AdminLayout";
import AlertPage from "@/pages/@kirakit/components/alert";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AdminLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "components/alert",
        Component: AlertPage,
      },
    ],
  },
]);
