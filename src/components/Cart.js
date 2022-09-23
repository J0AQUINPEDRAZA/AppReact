import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


const Cart = () => {
    const test = useContext(CartContext)
    const clearCart = () => {
        test.cartClear()
    }
    return (
        <>
            <main className='App-Main'>
                <div className="cardCartContainer">
                    {test.items.length >= 1
                        ? <>
                            <Link to='/' className='hiperVinculo'><button onClick={clearCart} className='btnCartClear'>Limpiar Carrito</button></Link>
                            {test.items.map(item =>
                                <div className="cartBox" key={item.id}>
                                    <div className="itemCardCart" >
                                        <img src={item.image} className="itemImg" alt="" />
                                        <p className="itemTitle">{item.tag}</p>
                                        <p className="itemPrice">${item.price} por unidad</p>
                                        <span className="stockText">{item.qty > 1 ? `${item.qty} Unidades` : `${item.qty} Unidad`}</span>
                                    </div>
                                    <div className="buyBox">
                                        <div>
                                            <p className="totalText">Total</p>
                                            <p className="priceText">${item.price * item.qty}</p>
                                            <button onClick={() => test.removeItem(item.id)} className='btnItemClear'>Quitar producto</button>
                                        </div>
                                    </div>
                                </div>
                            )}<div className="totalBox">
                                <p className="totalText">Total: ${test.totalS}</p>
                                <button className='btnItemBuy'>Comprar</button>
                            </div>
                        </> : <div>
                            <h1 className="tituloCart">No hay productos en el carrito</h1>
                            <Link to='/' className='hiperVinculo'><button className='btnGoToHome'>Empezar a comprar</button></Link>
                        </div>
                    }
                </div>
            </main>
        </>
    )
}
export default Cart;