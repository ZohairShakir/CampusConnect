import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();

  const tabs = [
    { name: "Home", path: "/home" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "Academics", path: "/academics" },
    { name: "Events", path: "/announcements" },
  ];

  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          to={tab.path}
          className={`nav-item ${
            location.pathname === tab.path ? "active" : ""
          }`}
        >
          {tab.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
