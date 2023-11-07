import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <section>
      <nav>
        <div className="logo">
          <Link to="/">MERN-CRUD-APP</Link>
        </div>
        <div className="links">
          <ul>
            <li className="adduser">
              <Link to="/adduser">Add User</Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
