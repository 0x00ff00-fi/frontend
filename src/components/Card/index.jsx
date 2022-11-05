import React from "react";
import "./styles.css";

export default function({ post }) {
  return (
    <div className="card">
      {post?.name && (
        <div className="card-header">
          <div className="header-icon">
            <div className="icon-bg">
              <img loading="lazy" src={`/${post.icon}.svg`}></img>
            </div>
            <span>{post?.name}</span>
          </div>
          <div className="card-date">
            {post?.created_at &&
              new Intl.DateTimeFormat("fi-FI", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour12: false,
              }).format(new Date(post.created_at))}
          </div>
        </div>
      )}
      <div className="card-body">
        {post?.media && <img loading="lazy" src={post?.media} className="image-container" />}
        <div>{post?.content}</div>
      </div>
    </div>
  );
}
