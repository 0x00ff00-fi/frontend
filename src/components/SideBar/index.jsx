import React, { useState } from "react";
import "./styles.css";

export default function SideBar(props) {
  const [sbIsOpen, setSbIsOpen] = useState(false)

  return sbIsOpen ?
    <aside className="side-bar">
      <div className="side_header">
        <img className="side_icon" src="/close.svg" onClick={() => setSbIsOpen(false)} />
      </div>
      <ul className="side_menu">
        <li className="side_itm"><a href="" className="side_link">#explore</a></li>
        <li className="side_itm"><a href="" className="side_link">settings</a></li>
      </ul>
    </aside>
    : <aside className="side-bar closed">
      <div className="closed-side_header">
        <img className="side_icon" src="/hamburger.svg" onClick={() => setSbIsOpen(true)} />
      </div>
    </aside>
}
