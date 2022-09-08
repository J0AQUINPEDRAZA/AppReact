import ItemDetail from "./ItemDetail";
import Task from "../utils/Task";
import React, { useEffect } from 'react';
import { useState } from "react";
import DataHogar from "../libs/DataHogar";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    useEffect(() => {
        Task(DataHogar.find(item => item.id === parseInt(id)))
            .then(res => setProduct(res))
            .catch(err => console.log(err))

    }, [id])
    return (
        <>{<main className='App-Main'>
            <ItemDetail item={product} />
        </main>
        }</>
    )
}
export default ItemDetailContainer;