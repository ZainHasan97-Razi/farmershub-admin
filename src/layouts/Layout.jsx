import { Outlet } from 'react-router-dom';

const Layout = ({ isLogout }) => (
  <div>
    {isLogout ? null : <div>hello</div>}
    <Outlet />
  </div>
);

export default Layout;
