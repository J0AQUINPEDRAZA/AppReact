import { useState } from "react";
import { Link } from "react-router-dom";
import ItemConunt from "./ItemCount";
function ItemDetail({ item }) {
    const initialQty = 0;
    const [qty, setQty] = useState(initialQty);
    const qtyHandlerPlus = () => {
        qty < item.stock ? setQty(qty + 1) : setQty(qty)
    }
    const qtyHandlerMinus = () => {
        qty > 1 ? setQty(qty - 1) : setQty(qty)
    }
    let [cart, setCart] = useState(0)
    const onAdd = () => {
        cart < item.stock ? cart = cart + qty : setCart(0)
        cart === 1 ? console.log(`Se agrego ${cart} objeto al carrito`) : console.log(`Se agregaron ${cart} objetos al carrito`)
        setCart(cart)
    }
    return (
        <>{item.price > 0
            ? <div className="itemDetailBox">
                <div className="cardDetail">
                    <img src={item.image} className="itemDetailImg" alt="" />
                    <p className="itemDetailTag">{item.tag}</p>
                </div>
                <div className="itemDetailcard">
                    <p className="itemDetailDescription">{item.desciption}</p>
                    {
                        cart < 1
                            ? <><p className="itemDetailPrice">${item.price}</p>
                                <ItemConunt stock={item.stock} item={item} initial={initialQty} onAdd={onAdd} cart={cart} qty={qty} qtyHandlerMinus={qtyHandlerMinus} qtyHandlerPlus={qtyHandlerPlus} /></>
                            : <Link to='/cart' className="btnAddToCart"><p className="btnGoToCart">Go to cart</p></Link>
                    }
                </div>
            </div>
            : <p>cargando...</p>
        }</>
    )
}
export default ItemDetail;