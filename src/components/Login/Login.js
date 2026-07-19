import React, { useState } from "react";
import "./Login.css";
import { assets } from "./../../assets/assets";
const Login = ({ changeShow }) => {
    const [signup, setSignup] = useState(false);
    const closeModal = () => changeShow(false);
    return (
        <div className="allLogin" onClick={closeModal}>
            <div className="login" onClick={(e) => e.stopPropagation()}>
                <div className="header_login">
                    <p>{signup ? 'Sign Up' : 'Login'}</p>
                    <img src={assets.cross_icon} onClick={closeModal} alt="close" />
                </div>
                <p className="subtitle_login">
                    {signup ? 'Create an account to get started.' : 'Welcome back! Please enter your details.'}
                </p>
                <div className="form">
                    <form onSubmit={(e) => e.preventDefault()}>
                        {signup && <div className="name">
                            <input type="text" name="name" placeholder="Your name" required />
                        </div>}
                        <div className="email">
                            <input type="email" name="email" placeholder="Your email" required />
                        </div>
                        <div className="password">
                            <input type="password" name="password" placeholder="Password" required />
                        </div>
                        <input type="submit" value={signup ? 'Create account' : 'Login'} />
                        <div className="privacy">
                            <input type="checkbox" required />
                            <p>By continuing, I agree to the terms of use & privacy policy.</p>
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