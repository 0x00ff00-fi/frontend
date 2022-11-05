import React from "react";
import "./styles.css"

export default function(props) {
    const {user, children, ...rest} = props
    return <div className="card" {...rest}>
        <div className="card-header">
            <div className="card-icon">{user?.icon}</div>
            <span>{user?.name}</span>
        </div>
        <div>{children}</div>
    </div>
}

