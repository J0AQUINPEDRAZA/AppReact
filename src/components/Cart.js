import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { db } from '../utils/firebaseConfig';
import { useReactToPrint } from "react-to-print";

const Cart = () => {
    const test = useContext(CartContext)
    const [total, setTotal] = useState(0);
    const [ticket, setTicket] = useState();

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
    })
    

    useEffect(() => {
    const sumaTotal = () =>{
        let totales = test.items.map(item => item.total)
        const sumaTotales = totales.reduce((anterior, actual) => anterior + actual, 0);
        setTotal(sumaTotales);
    }
    sumaTotal()
    }, [test])
 
    const clearCart = () => {
        test.cartClear()
    }
    const createOrder = () => {
        let usuarioName = 'joaquin Pedraza'
        let usuarioEmail = 'joaquin@gmail'
        let usuarioPhone = '3535678901'
        let itemsByOrder = test.items.map(item => ({
            id: item.id,
            name: item.name,
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
            total: total
        }}
        const createOrderOnDb = async () => {
            const newOrderRef = doc(collection(db, "orders"));
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
                    setTicket(
                        <div className="ticketContainer">
                        <p className="totalText">Resumen de tu compra</p>
                        <p>Id: {res.id}</p>
                        <p>Nombre: {order.orderShop.buyer.name}</p>
                        <p>Email: {order.orderShop.buyer.email}</p>
                        <p>Tel: {order.orderShop.buyer.phone}</p>
                        <p>Total ${order.orderShop.total}</p>
                        <p>{res.date}</p>
                        <button className='btnItemBuy' onClick={handlePrint}>Imprimir / Guardar</button>
                        <button className='btnItemBuy' onClick={(clearCart)}>Listo</button>
                        </div>)
                });
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
                                <p className="totalText">Total: ${total}</p>
                                <button className='btnItemBuy' onClick={(createOrder)}>Comprar</button>
                            </div>
                            <>
                            <div ref={componentRef}>
                                {ticket}
                            </div>
                            </>
                        </> : <div>
                            <h1 className="tituloCart">No hay productos en el carrito</h1>
                            <Link to='/' ><button className='btnGoToHome'>Empezar a comprar</button></Link>
                        </div>
                    }
                </div>
            </main>
        </>
    )
}
export default Cart;