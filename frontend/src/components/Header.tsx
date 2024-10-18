import React from "react";
import "./Header.css"; // Optional: If you're applying external CSS styles

const Header: React.FC = () => {
  return (
    <header>
      <nav className="navigation-bar">
        <ul className="nav-list">
          <li>
            <a href="index.html">Musa Jalloh</a>
          </li>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="project.html">Project</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
          <li>
            <a href="resume.html">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
