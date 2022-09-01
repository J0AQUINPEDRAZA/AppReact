import { useState } from "react"

function ItemConunt({ stock, initial, }) {
    const [rate, setRate] = useState(initial);
    const rateHandlerPlus = () => {
        rate < stock ? setRate(rate + 1) : setRate(rate)
    }
    const rateHandlerMinus = () => {
        rate > 1 ? setRate(rate - 1) : setRate(rate)
    }
    let [cart, setCart] = useState(0)
    const onAdd = () => {
        cart < stock ? cart = cart + rate : setCart(rate)
        setCart(cart)
        cart === 1 ? console.log(`Se agrego ${cart} objeto al carrito`) : console.log(`Se agregaron ${cart} objetos al carrito`)

    }
    return (
        <div className="itemCountContainer">
            <span className="stockText">Quedan {stock} en stock</span>
            <div className="countBox">
                <button className="btnMinus" onClick={rateHandlerMinus} disabled={rate === initial}><i className="fa-solid fa-minus"></i></button>
                <p className="countNumber">{rate}</p>
                <button className="btnPlus" onClick={rateHandlerPlus} disabled={cart >= stock}><i className="fa-solid fa-plus"></i></button>
            </div>
            <button className="btnAddToCart" onClick={onAdd} disabled={cart >= stock}>Agregar al carrito</button>
        </div>
    )
}
export default ItemConunt;
