import React, { useState } from "react";
import "./Login.css";
import { assets } from "./../../assets/assets";
const Login = ({ changeShow }) => {
    const [signup, setSignup] = useState(false);
    return (
        <div className="allLogin">
            <div className="login">
                <div className="header_login">
                    <p> {signup ? 'Sign Up' : 'Login'}</p>
                    <img src={assets.cross_icon} onClick={() => changeShow(prev => prev = false)} alt="not" />
                </div>
                <div className="form">
                    <form >
                        {signup && <div className="name">
                            <input type="text" name="name" placeholder="Your name" required />
                        </div>}
                        <div className="email" >
                            <input type="email" name="email" placeholder="Your email" required />

                        </div>
                        <div className="password">
                            <input type="password" name="password" placeholder="Password" required />
                        </div>
                        {!signup ?
                            <input type="submit" value="Login" /> :
                            <input type="submit" value="Create account" />
                        }
                        <div className="privacy">
                            <input type="checkbox" required />
                            <p>By continuing. I agree to the terms of use & privacy policy </p>
                        </div>
                    </form>
                </div>
                <div className="footer_login">
                    {signup ?
                        <p>Already have an account? <span onClick={() => setSignup(false)}>Login here</span></p> :
                        <p>Create a new account? <span onClick={() => setSignup(true)}>Click here</span></p>}
                </div>
            </div>
        </div>
    )
}
export default Login;