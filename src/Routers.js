import { useRoutes } from "react-router-dom";
import Layout from "./layouts/Layout";
import { getLocalData, LOCAL_STORAGE_KEYS } from "./lib/helper/localStorage";
import AdsManagementPage from "./pages/ads-management/AdsManagementPage";
import ErrorPage from "./pages/auth/ErrorPage";
import LoginPage from "./pages/auth/LoginPage";
import CommunityManagementPage from "./pages/community-management/CommunityManagementPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import FeaturedAdsPage from "./pages/featured-ads/FeaturedAds";
import UserManagementPage from "./pages/user-management/UserManagementPage";
import VetManagementPage from "./pages/vet-management/VetManagementPage";
import ProtectedRoute from "./Protected";
import UserVerificationPage from "./pages/user-document-verification/UserVerificationPage";

const Routers = () => {
  const isLoggedIn = getLocalData(LOCAL_STORAGE_KEYS.login);

  const routes = [
    {
      path: "/",
      element: <Layout isLogout={!isLoggedIn} />,
      children: [
        {
          path: "/",
          element: (
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "login",
          element: (
            <ProtectedRoute>
              <LoginPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "user-management",
          element: (
            <ProtectedRoute>
              <UserManagementPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "ads-management",
          element: (
            <ProtectedRoute>
              <AdsManagementPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "vet-management",
          element: (
            <ProtectedRoute>
              <VetManagementPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "community-management",
          element: (
            <ProtectedRoute>
              <CommunityManagementPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "featured-ads",
          element: (
            <ProtectedRoute>
              <FeaturedAdsPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "user-verification/:id",
          element: (
            <ProtectedRoute>
              <UserVerificationPage />
            </ProtectedRoute>
          ),
        },
        { path: "*", element: <ErrorPage /> },
      ],
    },
  ];
  let element = useRoutes(routes);

  return element;
};

export default Routers;
