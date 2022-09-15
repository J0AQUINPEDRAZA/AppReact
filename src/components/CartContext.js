import { createContext, useState } from "react";


export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const [items, setItems] = useState([])


    const isInCart = (id) => {
        const found = items.find(item => item.id === id);
        return found
    }

    const addItem = (item, qty) => {
        isInCart(item.id)
            ?
            setItems(items.map((prod) => {
               if(prod.id === item.id){
                prod.qty += qty
               }
                return prod
            }))
            :
            setItems([...items, {id: item.id, tag: item.tag , image: item.image, price: item.price, qty: qty }])
    }


const cartClear = () => {
    setItems([])
}
const removeItem = (id) => {
    let newCartList = items.filter(item => item.id !== id)
    setItems(newCartList)
}

return (
    <CartContext.Provider value={{ items, addItem, cartClear, removeItem, }}>
        {children}
    </CartContext.Provider>
)
}

export default CartContextProvider;