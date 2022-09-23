import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

import ItemConunt from "./ItemCount";
function ItemDetail({ item }) {
    const test = useContext(CartContext)
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const countHandlerPlus = () => {
        count < item.stock ? setCount(count + 1) : setCount(count)
    }
    const countHandlerMinus = () => {
        count > 1 ? setCount(count - 1) : setCount(count)
    }
    let [qty, setQty] = useState(0)
    const onAdd = () => {
        qty < item.stock ? qty = qty + count : setQty(0)
        setQty(qty)
        test.addItem(item, qty)
        
        
    }
    return (
        <>{item.price > 0
            ? <div className="itemDetailBox">
                <div className="cardDetail">
                    <img src={item.image} className="itemDetailImg" alt="" />
                    <p className="itemDetailTag">{item.name}</p>
                </div>
                <div className="itemDetailcard">
                    <p className="itemDetailDescription">{item.description}</p>
                    {
                        qty < 1
                            ? <><p className="itemDetailPrice">${item.price}</p>
                                <ItemConunt stock={item.stock} item={item} initial={initialCount} onAdd={onAdd} count={count} countHandlerMinus={countHandlerMinus} countHandlerPlus={countHandlerPlus} /></>
                            : <Link to='/cart' className="btnAddToCart" ><p className="btnGoToCart">Go to cart</p></Link>
                    }
                </div>
            </div>
            : <span className="spinner"></span> 
        }</>
    )
}
export default ItemDetail;