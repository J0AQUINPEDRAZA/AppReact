import { useState } from "react"
import ItemConunt from "./ItemCount";
import ItemProduct from "./ItemProduct"

function ItemListContainer(props) {
    
    return (
        <>
        { 
        props.items.map(item => (
        <div className="itemContainer">
            <ItemProduct title={item.tag} image={item.image} price={item.price} />
            <ItemConunt stock={item.stock} initial={1} />
        </div> 
        ))
       }
        </> 
    )
}
export default ItemListContainer;