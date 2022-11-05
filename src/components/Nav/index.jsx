import React from "react";
import "./styles.css";

export default function Nav(props) {

	console.log(document.getElementById("search-field").value)

  return (
    <nav className="nav-bar">
      <a href="#" className="nav_logo">
        0x00ff00
      </a>
      <form /* onSubmit={props?.search(document.getElementById("search-field").value)} */>
        <input
          className="nav_srch"
          type="text"
          name=""
          id="search-field"
          placeholder="search something"
        />
      </form>
      <div className="nav_user">{props?.user?.name}</div>
    </nav>
  );
}
