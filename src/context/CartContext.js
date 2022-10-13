import { createContext, useState } from "react";


export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    const isInCart = (id) =>{
        return items.find(prod => prod.id === id)?true:false;
    }

    const addItem = (item, qty, total) =>{
        total = qty * item.price;
        isInCart(item.id)
            ?
            setItems(items.map((prod) => {
               if(prod.id === item.id){
                prod.qty += qty
                prod.total = prod.qty * prod.price;
               }
                return prod
            }))
            :
            setItems([...items, {id: item.id, name: item.name, image: item.image , price: item.price, qty: qty, total: total}])
    }

    const removeItem = (id) =>{
        let newCartList = items.filter(item => item.id !== id);
        const nuevoTotal = newCartList.map(item => item.cantidad * item.price);
        let sum = 0;
        for(let i = 0; i < nuevoTotal.length; i++){
            sum += nuevoTotal[i];
        }
        setItems(newCartList);
        setTotal(sum);
    }

const cartClear = () => {
    setItems([])
    setTotal([0])
}



return (
    <CartContext.Provider value={{ items, addItem, cartClear, removeItem, total }}>
        {children}
    </CartContext.Provider>
)
}

export default CartContextProvider;