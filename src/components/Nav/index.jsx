import React from "react";
import "./styles.css";

export default function Nav(props) {
  return (
    <nav className="nav-bar">
      <a href="#" className="nav_logo">
        0x00ff00
      </a>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props?.search(document.getElementById("search-field")?.value);
        }}
      >
        <input
          className="nav_srch"
          type="text"
          name="search-field"
          id="search-field"
          placeholder="Search..." />
      </form>
      <div className="nav_user">{props?.user?.name}</div>
    </nav>
  );
}
