import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { db } from '../utils/firebaseConfig';
const Cart = () => {
    const test = useContext(CartContext)
    const clearCart = () => {
        test.cartClear()
    }
    const createOrder = () => {
        let usuarioName = 'joaquin'
        let usuarioEmail = 'joaquin@gmail'
        let usuarioPhone = '3535678901'
        let itemsByOrder = test.items.map(item => ({
            id: item.id,
            title: item.name,
            price: item.price,
            qty: item.qty
        }))
        let order = {
            orderShop: {
                buyer: {
                    name: `${usuarioName}`,
                    email: `${usuarioEmail}`,
                    phone: `${usuarioPhone}`
                },
                date: serverTimestamp(),
                items: itemsByOrder,
                total: test.totalS
            }
        }
        const createOrderOnDb = async () => {
            const newOrderRef = doc(collection(db, 'orders'))
            await setDoc(newOrderRef, order)
            return newOrderRef
        }
        createOrderOnDb()
            .then(res =>{ 
                test.items.forEach(async (item) => {
                    const itemRef = doc(db, "products", item.id);
                    await updateDoc(itemRef, {
                        stock: increment(-item.qty)
                    });
                });
                alert(`Tu id de compra es: ID:${res.id}`)
                clearCart()
                })
            .catch(err => console.log(err))
        
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
                                        <p className="itemTitle">{item.name}</p>
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
                                <button className='btnItemBuy' onClick={createOrder}>Comprar</button>
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