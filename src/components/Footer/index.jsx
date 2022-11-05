import React from "react";
import "./styles.css";
import "../Nav/styles.css";

export default function Footer({ user }) {
  async function uploadPhoto(image) {
    const formData = new FormData()
    formData.append("image", image)

    return fetch("https://upload-img-rzl3b4juua-lz.a.run.app", {
      method: "POST",
      headers: {
        "Accept": "application/json",
      },
      body: formData
    })
  }

  async function createPost(post) {
    return fetch("https://green-api.kendaganio.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post)
    })
  }

  function onSubmit(e) {
    e.preventDefault();

    let post = {
      icon: user.icon,
      name: user.name,
      content: document.getElementById("uploader")?.value,
      media: ""
    }

    const fileInput = document.getElementById("image")
    if (fileInput.files.length > 0) {
      uploadPhoto(fileInput.files[0])
        .then(r => r.json())
        .then(json =>
          createPost({
            ...post,
            media: json[0]
          })
        )
        .then(() => location.reload())
    } else {
      createPost(post)
        .then(() => location.reload())
    }
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
        <input type="file" name="image" id="image" />
      </form>
      <div className="icon-bg">
        <img loading="lazy" src={`/${user.icon}.svg`}></img>
      </div>
    </footer>
  );
}
