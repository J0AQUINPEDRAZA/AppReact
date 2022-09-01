import React, { useEffect } from 'react'
import ItemConunt from "./ItemCount";
import Item from "./Item";
import { useState } from "react";
import dataHogar from "../libs/DataHogar";
import task from '../utils/task';


function ItemList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {

        task(dataHogar)
            .then(res => setProducts(res))
            .catch(err => console.log(err))

    }, [])
    return (
        <>{
            products.map(item =>
                <div className="itemContainer" key={item.id}>
                    <Item title={item.tag} image={item.image} price={item.price} />
                    <ItemConunt stock={item.stock} initial={1} />
                </div>)
        }</>
    )




}
export default ItemList;