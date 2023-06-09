import React, { useState } from "react";
import "./UserSideNavigation.css";

const UserSideNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar">
      <button className="toggle-button" onClick={toggleSidebar}>
        ☰
      </button>
      <nav className={`sidebar-nav ${isOpen ? "open" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default UserSideNavigation;
