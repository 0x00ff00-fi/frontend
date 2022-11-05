import React from "react";
import "./styles.css";
import "../Nav/styles.css"

export default function Footer(props) {
    const {user} = props
    return (
        <footer className="footer">
            <input
                className="nav_srch"
                type="text"
                name=""
                id=""
                placeholder="share your post"
                style={{height: '16px'}}
            />
            <div>{user?.icon && user.icon}</div>
        </footer>
    );
}
