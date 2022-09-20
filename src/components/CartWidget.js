import { useContext } from "react";
import { CartContext } from "./CartContext";

function CartWidget() {
    const { items } = useContext(CartContext)
    let itemsInCart = 0;
    items.map((item) => 
      itemsInCart = itemsInCart + item.qty
    )
    return (
        <div className="cartContainer">
            <i className="iconoCarrito fa-solid fa-cart-shopping"></i>
            {
            itemsInCart > 0
                ?<p className="numberCart">{itemsInCart}</p>
                :<p className="numberCartDisabled"></p>
            }
        </div>
    )
}
export default CartWidget;