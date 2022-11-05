import React from "react";
import "./styles.css";

export default function Nav(props) {
  return (
    <nav className="nav-bar">
      <a href="#" className="nav_logo">
        0x00ff00
      </a>
      <input
        className="nav_srch"
        type="text"
        name=""
        id=""
        placeholder="search something"
      />
      <div className="nav_user">Human</div>
    </nav>
  );
}
