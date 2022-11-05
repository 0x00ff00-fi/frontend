import React, { useEffect } from "react";
import "./styles.css";

export default function ({ post }) {
  return (
    <div className="card">
      {post?.name && (
        <div className="card-header">
          <div className="header-icon">
            <div>{post?.icon}</div>
            <span>{post?.name}</span>
          </div>
          <div>
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
        {post?.media && <img src={post?.media} className="image-container" />}
        <div>{post?.content}</div>
      </div>
    </div>
  );
}
