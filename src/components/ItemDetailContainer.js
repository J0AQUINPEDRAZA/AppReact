import ItemDetail from "./ItemDetail";
import React, { useEffect } from 'react';
import { useState } from "react";
import { useParams } from "react-router-dom";
import { db } from '../utils/firebaseConfig';
import { doc, getDoc } from "firebase/firestore";
const ItemDetailContainer = () => {
    const [datos, setDatos] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const q = doc(db, 'products', id);
        getDoc(q)
            .then(res => setDatos({
                id: res.id,
                ...res.data()
            }))
    }, [id])
    return (
        <>{<main className='App-Main'>
            <ItemDetail item={datos} />
        </main>
        }</>
    )
}
export default ItemDetailContainer;