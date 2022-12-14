import { useLocation, useRoutes } from "react-router-dom";
import Layout from "./layouts/Layout";
import AdsManagementPage from "./pages/ads-management/AdsManagementPage";
import ErrorPage from "./pages/auth/ErrorPage";
import LoginPage from "./pages/auth/LoginPage";
import CommunityManagementPage from "./pages/community-management/CommunityManagementPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import UserManagementPage from "./pages/user-management/UserManagementPage";
import VetManagementPage from "./pages/vet-management/VetManagementPage";

const Routers = () => {
  const location = useLocation();
  const isLogout = location.pathname === "/";

  const routes = [
    {
      path: "/",
      element: <Layout isLogout={isLogout} />,
      children: [
        { path: "/", element: <LoginPage /> },
        { path: "dashboard", element: <DashboardPage /> },
        { path: "user-management", element: <UserManagementPage /> },
        { path: "ads-management", element: <AdsManagementPage /> },
        { path: "vet-management", element: <VetManagementPage /> },
        { path: "community-management", element: <CommunityManagementPage /> },
        { path: "*", element: <ErrorPage /> },
      ],
    },
  ];
  let element = useRoutes(routes);

  return element;
};

export default Routers;
