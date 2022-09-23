import { createContext, useState } from "react";


export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const [items, setItems] = useState([])
    const [total, setTotal] = useState([])
    const [totalS, setTotalS] = useState(0)

    const isInCart = (id) => {
        const found = items.find(item => item.id === id);
        return found
    }
    
    const addItem = (item, qty) => { 

        setTotal([...total, item.price *qty])
        const totalScores = total.reduce(
                (previousScore, currentScore,)=>previousScore+currentScore, item.price *qty);
                setTotalS(totalScores)

        isInCart(item.id)
            ?
            setItems(items.map((prod) => {
               if(prod.id === item.id){
                prod.qty += qty
               }
                return prod
            }))
            :
            setItems([...items, {id: item.id, name: item.name , image: item.image, price: item.price, qty: qty }])
    }


const cartClear = () => {
    setItems([])
}
const removeItem = (id) => {
    let newCartList = items.filter(item => item.id !== id)
    setItems(newCartList)
}

return (
    <CartContext.Provider value={{ items, addItem, cartClear, removeItem, totalS }}>
        {children}
    </CartContext.Provider>
)
}

export default CartContextProvider;