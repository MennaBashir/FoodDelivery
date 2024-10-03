import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";
const AppDownload = () => {
    return (
        <div className="appDownload" id="appDownload">
            <p>For Better Experience Download <br /> YumYum App</p>
            <div className="apps">
                <img src={assets.play_store} alt="not found" />
                <img src={assets.app_store} alt="not found" />
            </div>
        </div>
    )
}
export default AppDownload;