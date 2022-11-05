import React, {useEffect} from "react";
import "./styles.css";

export default function (props) {
    const { post, children, ...rest } = props;

    return (
        <div className="card" {...rest}>
            {post?.user && (
                <div className="card-header">
                    <div className="header-icon">
                        <div className="card-icon">{post?.user?.icon}</div>
                        <span>{post?.user?.name}</span>
                    </div>
                    <div>{""+post?.dateTime}</div>
                </div>
            )}
            <div className="card-body">
                {post?.body?.media && <div>{post?.body?.media}</div>}
                <div>{post?.body?.text}</div>
            </div>
        </div>
    );
}
