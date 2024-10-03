import React, { useState } from "react";
import './Navbar.css';
import { useSelector } from "react-redux";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
function Navbar({ ShowLogin }) {
    const [valu, setValu] = useState("home");
    const state = useSelector(state => state.Foods);
    const Total = state.reduce((acc, curr) => {
        return acc += curr.price * curr.quantity;
    }, 0)
    return (
        <div className="navbar">
            <Link to={'/'}> <span>YumYum</span></Link>
            <ul>
                <Link to={'/'} onClick={() => setValu("home")} className={valu === "home" ? "active" : null}>home</Link>
                <a href="#explore-menu" onClick={() => setValu("menu")} className={valu === "menu" ? "active" : null}>menu</a>
                <a href="#appDownload" onClick={() => setValu("app")} className={valu === "app" ? "active" : null}>mobile app</a>
                <a href="#footer" onClick={() => setValu("contact")} className={valu === "contact" ? "active" : null}>contact us</a>
            </ul>
            <div className="navbar-right">
                <div className="basket">
                    <Link to={'/cart'}><img src={assets.basket_icon} alt="not found" /></Link>
                    <div className={Total > 0 ? "dot" : null}></div>
                </div>
                <div className="signin">
                    <button onClick={() => ShowLogin(prev => prev = true)}>sign in</button>
                </div>
            </div>
        </div>
    )

}
export default Navbar;
