import React from 'react';
import "./Header.css";
import Logo from "../../images/logo.png";
import Search from "../../images/ic.search.png"

function Header(){
    return (
        <>
        <div className="upper-header">
            <img src={Logo} alt="Logo intibiome" className="logo"/>
            <form className="search">
                <button className="search-button">
                    <img src={Search} alt = "Search button"/>
                </button>
                <input type="text"/>
            </form>
        </div>

        <header className="main-header">
            <nav>
                <ul>
                <li><a href="#">about us</a></li>
                <li><a href="#">our products</a></li>
                <li><a href="#">intimate health</a></li>
                <li><a href="#">contact</a></li>
                </ul>
            </nav>
        </header>
        </>
    );
}

export default Header