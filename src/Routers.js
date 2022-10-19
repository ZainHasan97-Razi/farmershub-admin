import { useLocation, useRoutes } from 'react-router-dom';
import Layout from './layouts/Layout';
import LoginPage from './pages/auth/LoginPage';
import DashboardPage from './pages/dashboard/DashboardPage';

const Routers = () => {
  const location = useLocation();

  const isLogout = location.pathname === '/';

  const routes = [
    {
      path: '/',
      element: <Layout isLogout={isLogout} />,
      children: [
        { path: '/', element: <LoginPage /> },
        { path: 'dashboard', element: <DashboardPage /> },
        { path: '*', element: <div>hello</div> },
      ],
    },
  ];
  let element = useRoutes(routes);

  return element;
};

export default Routers;
