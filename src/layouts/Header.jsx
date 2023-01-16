import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  AdsIcon,
  DashboardIcon,
  LogoutIcon,
  MenuIcon,
  UserIcon,
  UsersIcon,
  VetIcon,
} from "../components/icons/icons";
import Logo from "../components/logos/Logo";
import { apiRoutes } from "../lib/contants";
import { storeLocalData } from "../lib/helper/localStorage";
import { postRequest } from "../services/axios/axiosMethods";

const Header = ({ onShow }) => {
  const navigate = useNavigate();
  const links = [
    {
      icon: <DashboardIcon size="1.125rem" />,
      name: "Dashboard",
      to: "/",
    },
    {
      icon: <UserIcon size="1.125rem" />,
      name: "User Management",
      to: "/user-management",
    },
    {
      icon: <AdsIcon size="1.125rem" />,
      name: "Ads Management",
      to: "/ads-management",
      notification: 3,
    },
    {
      icon: <VetIcon size="1.125rem" />,
      name: "Vet Management",
      to: "/vet-management",
    },
    {
      icon: <UsersIcon size="1.125rem" />,
      name: "Community Management",
      to: "/community-management",
    },
  ];

  const logOutAdmin = async () => {
    try {
      await postRequest(apiRoutes.logout);
      navigate("/login");
      storeLocalData("login", false);
    } catch (error) {
      storeLocalData("login", true);
    }
  };

  return (
    <header
      className="bg-white px-4 py-2 position-sticky top-0 shadow-sm"
      style={{ zIndex: 3 }}
    >
      <div>
        {/* big view */}
        <nav className="d-none d-md-flex align-items-baseline">
          <div className="d-flex align-items-center d-lg-none me-2">
            <button
              type="button"
              onClick={onShow}
              className="btn btn-sm btn-outline-primary me-2"
            >
              <MenuIcon size="1rem" />
            </button>
            <Link
              href="/dashboard"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
            >
              <Logo />
            </Link>
          </div>
          <h6 className="mb-0 fs-7 fw-500 me-auto">
            Pakistan's online cattle and livestock marketplace
          </h6>
          <div className="d-flex align-items-center gap-3">
            <h6 className="mb-0 fw-500">
              <span className="text-body text-opacity-50">Hello,</span> Hamza
            </h6>
            <Dropdown>
              <Dropdown.Toggle
                className="p-0 d-flex align-items-center"
                style={{ height: "2.5rem", minWidth: "2.5rem" }}
                variant=".."
              >
                <img
                  className="d-block h-100 w-100"
                  src="/assets/user.png"
                  alt="..."
                />
              </Dropdown.Toggle>

              <Dropdown.Menu variant="light" className="p-0">
                {links.map((link) => (
                  <Dropdown.Item
                    key={link.name}
                    className="py-2"
                    as={NavLink}
                    end
                    to={link.to}
                  >
                    <span className="me-2">{link.icon}</span>
                    <span className="fs-7">{link.name}</span>
                  </Dropdown.Item>
                ))}

                <Dropdown.Divider className="m-0" />
                <Dropdown.Item
                  className="py-2"
                  as={NavLink}
                  onClick={logOutAdmin}
                >
                  <span className="me-2">
                    <LogoutIcon size="1.125rem" />
                  </span>
                  <span className="fs-7">Logout</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </nav>

        {/* small view */}
        <nav className="d-md-none">
          <div className="d-flex align-items-center justify-content-between gap-3">
            <div>
              <button
                type="button"
                onClick={onShow}
                className="btn btn-sm btn-outline-primary"
              >
                <MenuIcon size="1rem" />
              </button>
            </div>
            <div>
              <Link
                href="/dashboard"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
              >
                <Logo />
              </Link>
            </div>
            <Dropdown>
              <Dropdown.Toggle
                className="p-0 d-flex align-items-center"
                style={{ height: "2.2rem", minWidth: "2.2rem" }}
                variant=".."
              >
                <img
                  className="d-block h-100 w-100"
                  src="/assets/user.png"
                  alt="..."
                />
              </Dropdown.Toggle>

              <Dropdown.Menu variant="light" className="p-0">
                {links.map((link) => (
                  <Dropdown.Item
                    key={link.name}
                    className="py-2"
                    as={NavLink}
                    end
                    to={link.to}
                  >
                    <span className="me-2">{link.icon}</span>
                    <span className="fs-7">{link.name}</span>
                  </Dropdown.Item>
                ))}
                <Dropdown.Divider className="m-0" />
                <Dropdown.Item
                  className="py-2"
                  as={NavLink}
                  onClick={logOutAdmin}
                >
                  <span className="me-2">
                    <LogoutIcon size="1.125rem" />
                  </span>
                  <span className="fs-7">Logout</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <h6 className="mb-0 fs-7 fw-500 text-center">
              Pakistan's online cattle and livestock marketplace
            </h6>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
