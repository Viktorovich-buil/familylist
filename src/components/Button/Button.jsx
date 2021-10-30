import React from "react";
import './style.css'

const Button = ({ children, styleType, ...props }) => {
    return <button className={`button ${styleType}`} {...props}>{children}</button>;
};

export default Button;
