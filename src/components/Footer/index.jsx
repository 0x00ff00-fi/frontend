import React from "react";
import "./styles.css";
import "../Nav/styles.css";

export default function Footer(props) {
  const { user } = props;

  function onSubmit(e) {
    e.preventDefault();
    fetch("http://35.228.77.154/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        icon: props?.userIcon,
        name: user.name,
        content: document.getElementById("uploader")?.value,
      }),
    });
		location.reload()
  }

  return (
    <footer className="footer">
      <form onSubmit={onSubmit}>
        <input
          className="nav_srch"
          type="text"
          name="uploader"
          id="uploader"
          placeholder="share your post"
        />
      </form>
      <div>{user?.icon && user.icon}</div>
    </footer>
  );
}
