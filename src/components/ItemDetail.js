import { useState } from "react";
import { Link } from "react-router-dom";
import ItemConunt from "./ItemCount";
function ItemDetail({ item }) {
    const initialRate = 0;
    const [rate, setRate] = useState(initialRate);
    const rateHandlerPlus = () => {
        rate < item.stock ? setRate(rate + 1) : setRate(rate)
    }
    const rateHandlerMinus = () => {
        rate > 1 ? setRate(rate - 1) : setRate(rate)
    }
    let [cart, setCart] = useState(0)
    const onAdd = () => {
        cart < item.stock ? cart = cart + rate : setCart(0)
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
                    <p className="itemDetailPrice">${item.price}</p>
                    {
                        cart < 1
                            ? <ItemConunt stock={item.stock} item={item} initial={initialRate} onAdd={onAdd} cart={cart} rate={rate} rateHandlerMinus={rateHandlerMinus} rateHandlerPlus={rateHandlerPlus} />
                            : <Link to='/cart' className="btnAddToCart"><p className="btnGoToCart">Go to cart</p></Link>
                    }
                </div>
            </div>
            : <p>cargando...</p>
        }</>
    )
}
export default ItemDetail;