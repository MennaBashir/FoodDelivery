import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, RemoveFromCart } from "./../../Redux/ReduxFood";
import "./ItemFood.css";
import solid from "./../../assets/star-solid.svg";
import regular from "./../../assets/star-regular.svg";
import { assets, food_list } from "../../assets/assets";

const ItemFood = ({ id, name, image, price, description }) => {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const IconRemove = (e) => {
        setCount(count - 1);
        const ele = food_list.find((a) => {
            return a.id === e;
        });
        dispatch(RemoveFromCart(ele));
    }
    const IconAdd = (e) => {
        setCount(count + 1);
        const ele = food_list.find((a) => {
            return a.id === e;
        });
        dispatch(AddToCart(ele));
    }
    return (
        <div className="item_food" id={id}>
            <div className="item_imag">
                <img src={image} alt="not found" className="big_img" />
                {count > 0 ?
                    <div className="counter">
                        <img src={assets.remove_icon_red} className="minus" onClick={() => IconRemove(id)} alt="not found" />
                        <span>{count}</span>
                        <img src={assets.add_icon_green} className="blus_green" onClick={() => IconAdd(id)} alt="not found" />
                    </div>
                    : <img src={assets.add_icon_white} className="blus_white" onClick={() => IconAdd(id)} alt="not found" />
                }

            </div>

            <div className="info">
                <div className="head">
                    <p>{name}</p>
                    <div className="rate">
                        <img src={solid} alt="not found" />
                        <img src={solid} alt="not found" />
                        <img src={solid} alt="not found" />
                        <img src={solid} alt="not found" />
                        <img src={regular} alt="not found" />

                    </div>
                </div>
                <p>{description}</p>
                <h3>${price}</h3>
            </div>
        </div>
    )
}
export default ItemFood;