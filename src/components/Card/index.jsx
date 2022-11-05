import React, { useEffect } from "react";
import "./styles.css";

export default function (props) {
    const { post, children, ...rest } = props;

    return (
        <div className="card" {...rest}>
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
                            }).format(post.created_at)}
                    </div>
                </div>
            )}
            <div className="card-body">
                {post?.media && <div>{post?.body?.media}</div>}
                <div>{post?.text}</div>
            </div>
        </div>
    );
}
