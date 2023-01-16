import React from "react";
import { Offcanvas } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import {
  AdsIcon,
  DashboardIcon,
  UserIcon,
  UsersIcon,
  VetIcon,
} from "../components/icons/icons";
import Logo from "../components/logos/Logo";

const Sidebar = ({ show, onHide }) => {
  const links = [
    {
      icon: <DashboardIcon size="1.5rem" />,
      name: "Dashboard",
      to: "/",
    },
    {
      icon: <UserIcon size="1.5rem" />,
      name: "User Management",
      to: "/user-management",
    },
    {
      icon: <AdsIcon size="1.5rem" />,
      name: "Ads Management",
      to: "/ads-management",
    },
    {
      icon: <AdsIcon size="1.5rem" />,
      name: "Featured Ads Management",
      to: "/featured-ads",
    },
    {
      icon: <VetIcon size="1.5rem" />,
      name: "Vet Management",
      to: "/vet-management",
    },
    {
      icon: <UsersIcon size="1.5rem" />,
      name: "Community Management",
      to: "/community-management",
    },
  ];

  return (
    <>
      <aside
        className="sidebar d-none d-lg-flex flex-column flex-shrink-0 p-3 bg-white position-relative shadow-sm border-end"
        style={{ width: "17.5rem" }}
      >
        <div className="position-sticky" style={{ top: "1.25rem" }}>
          <div className="mb-4">
            <Link
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
            >
              <Logo />
            </Link>
          </div>

          <ul className="nav nav-pills flex-column gap-2 mb-auto">
            {links.map((link) => (
              <li key={link.name} className="nav-item">
                <NavLink
                  to={link.to}
                  end
                  className="sidebar-link d-flex align-items-center"
                >
                  <span className="me-2">{link.icon}</span>
                  <span>{link.name}</span>
                  {link.notification && (
                    <span className="ms-2 badge rounded-circle bg-danger text-white">
                      {link.notification}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* small view */}
      <Offcanvas show={show} onHide={onHide}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Link
              href="/"
              onClick={onHide}
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
            >
              <Logo />
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="nav nav-pills flex-column gap-2 mb-auto">
            {links.map((link) => (
              <li key={link.name} className="nav-item">
                <NavLink
                  to={link.to}
                  end
                  className="sidebar-link d-flex align-items-center"
                  onClick={onHide}
                >
                  <span className="me-2">{link.icon}</span>
                  <span>{link.name}</span>
                  {link.notification && (
                    <span className="ms-2 badge rounded-circle bg-danger text-white">
                      {link.notification}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
