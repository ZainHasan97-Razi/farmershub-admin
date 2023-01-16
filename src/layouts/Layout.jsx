import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ isLogout }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="min-vh-100 d-lg-flex">
      {isLogout ? null : <Sidebar show={show} onHide={handleClose} />}
      <div className="d-flex flex-column flex-fill">
        {isLogout ? null : <Header onShow={handleShow} />}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
