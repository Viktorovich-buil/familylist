import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "./style.css";

const Header = () => {

    return (
        <header className="header">
            <div className="h_logo">
                <img src={logo} alt="logo_alef" />
            </div>
            <nav className="h_nav">
                <Link className="h_link" to="/">
                    Форма
                </Link>
                <Link className="h_link" to="preview">
                    Превью
                </Link>
            </nav>
        </header>
    );
};

export default Header;
