import React, { useState } from "react";
import "./ExploreMenu.css";
import { menu_list } from "./../../assets/assets";
const ExploreMenu = ({ category_menu, setCategory_menu }) => {

    return (
        <div className="explore-menu" id="explore-menu">
            <h1>Explore our menu</h1>
            <p>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your
           cravings and elevate your dining experience, one delicious meal at a time.</p>
            <div className="explore-menu-list">
                {
                    menu_list.map((item, index) => {
                        return (
                            <div key={index} onClick={() => setCategory_menu((prev) => prev === item.menu_name ? "All" : item.menu_name)} className="explore-menu-item">
                                <img src={item.menu_image} className={category_menu === item.menu_name ? "active" : null} alt="not found" />
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <hr />
        </div>
    )
}
export default ExploreMenu;