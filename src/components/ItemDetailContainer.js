import ItemDetail from "./ItemDetail";
import Task from "../utils/Task";
import React, { useEffect } from 'react';
import { useState } from "react";
import DataHogar from "../libs/DataHogar";
const ItemDetailContainer = () =>{
    const [product, setProduct] = useState([]);
    useEffect(() => {

        Task(DataHogar[1])
            .then(res => setProduct(res))
            .catch(err => console.log(err))

    }, [])
    return (
        <>{
        <ItemDetail item={product} />
        }</>
    )
}
export default ItemDetailContainer;