import React from "react";
import { useSelector } from "react-redux";
import "./PlaceOrder.css";
const PlaceOrder = () => {
    const state = useSelector(state => state.Foods);
    const Total = state.reduce((acc, curr) => {
        return acc += curr.price * curr.quantity;
    }, 0)

    return (
        <form className="place-order">
            <div className="left-order">
                <p className="title">Delivery Information</p>
                <div className="fields">
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                </div>
                <input type="email" placeholder="Email address" />
                <input type="text" placeholder="Street" />
                <div className="fields">
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="State" />
                </div>
                <div className="fields">
                    <input type="text" placeholder="Zip code" />
                    <input type="text" placeholder="Country" />
                </div>
                <input type="text" placeholder="Phone" />
            </div>
            <div className="right-order cart-botom">
                <div className="total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="details-total">
                            <p>Sub Total</p>
                            <p>${Total}</p>
                        </div>
                        <hr />
                        <div className="details-total">
                            <p>Delivery Fee</p>
                            <p>${Total === 0 ? 0 : 5}</p>
                        </div>
                        <hr />
                        <div className="details-total">
                            <h4>Total</h4>
                            <h4>{Total === 0 ? 0 : Total + 5}</h4>
                        </div>
                    </div>
                    <button className="checkout">PROCEED TO PAYMENT</button>
                </div>
            </div>

        </form>

    )
}
export default PlaceOrder;