import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const test = useContext(CartContext)
    console.log(test)
    const clearCart = () => {
        test.cartClear()
    }
    return (
        <>
            <main className='App-Main'>
                <div className="cardCartContainer">
                    {test.items.length >= 1
                        ? <>
                            <button onClick={clearCart} className='btnCartClear'>Limpiar Carrito</button>
                            {test.items.map(item =>
                                <div className="cartBox" key={item.id}>
                                    <div className="itemCardCart" >
                                        <img src={item.image} className="itemImg" alt="" />
                                        <p className="itemTitle">{item.tag}</p>
                                        <p className="itemPrice">${item.price}</p>
                                        <span className="stockText">{item.cart > 1 ? `${item.qty} Unidades` : `${item.qty} Unidad`}</span>
                                    </div>
                                    <div className="btnsItemContainer">
                                    <button onClick={() => test.removeItem(item.id)} className='btnItemClear'>Quitar producto</button>
                                    <button  className='btnItemBuy'>Comprar</button>
                                    </div>
                                </div>
                            )}
                        </> : <h1>Cargando...</h1>
                    }
                </div>
            </main>
        </>
    )
}
export default Cart;