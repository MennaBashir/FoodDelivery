import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { RemoveEnd } from "../../Redux/ReduxFood";
import { useNavigate } from "react-router-dom";
const Cart = () => {
    const navigate = useNavigate();
    const state = useSelector(state => state.Foods);
    const dispatch = useDispatch();
  const Total =state.reduce((acc, curr) => {
       return acc += curr.price * curr.quantity;
}, 0)

    return (
        <div>
            <div className="cart">
                <table>
                    <thead>
                        <tr>
                            <th>Items</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.map((el, index) => {
                                return (
                                    <>
                                        <tr key={index}>
                                            <td><img src={el.image} alt="not found" /></td>
                                            <td>{el.category}</td>
                                            <td>${el.price}</td>
                                            <td>{el.quantity}</td>
                                            <td>${el.quantity * el.price}</td>
                                            <td onClick={() => dispatch(RemoveEnd(el))} className="cross">x</td>
                                        </tr>

                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="cart-botom">
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
                    <button className="checkout" onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="promo-code">
                    <div>
                        <p>If you have a promo code, Enter it here</p>
                        <div className="promocode-input">
                            <input type="text" placeholder="promo code" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Cart;