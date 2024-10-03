import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="content">
                <div className="left">
                    <p className="logo">YumYum</p>
                    <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ratione! Velit ab beatae maxime illum quo nostrum minus nulla blanditiis delectus molestiae explicabo architecto rem, doloribus excepturi ad enim at.</p>
                    <div className="imag">
                    <img src={assets.facebook_icon} alt="not" />
                    <img src={assets.twitter_icon} alt="not" />
                    <img src={assets.linkedin_icon} alt="not" />
                    </div>
                </div>
                <div className="center">
                    <p>COMPANY</p>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Deliviery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="right">
                    <p>GET IN TOUCH</p>
                    <ul>
                        <li>+20 012349608</li>
                        <li>contac@yumyum.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="copy_right">
                Copyright 2024 YumYum.com - All Right Reserved.
        </p>
        </div>
    )
}
export default Footer;