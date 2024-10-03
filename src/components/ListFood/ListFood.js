import React from "react";
import "./ListFood.css";
import ItemFood from "../ItemFood/ItemFood";
import { food_list } from "../../assets/assets";
const ListFood = ({ category_List }) => {

    return (
        <div className="food_display">
            <h2>Top dishes near you</h2>
            <div className="list_food">
                {
                    food_list.map((item) => {
                        return (
                            <>

                                {category_List === "All" ?
                                    <ItemFood key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} description={item.description} />
                                    : category_List === item.category &&
                                    <ItemFood key={item.key} id={item.id} name={item.name} image={item.image}
                                        price={item.price} description={item.description} />

                                }
                            </>
                        );
                    })
                }
            </div>
        </div>
    )
}
export default ListFood;