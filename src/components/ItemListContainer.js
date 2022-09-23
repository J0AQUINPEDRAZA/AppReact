import React, { useEffect } from 'react';
import { useState } from "react";
import { firestoreFech } from '../utils/firebaseConfig';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';


function ItemListContainer() {
    const [datos, setDatos] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            firestoreFech()
                .then(res => setDatos(res.filter(item => item.categoryId === id)))
                .catch(err => console.log(err))
        } else {
            firestoreFech()
                .then(res => setDatos(res))
                .catch(err => console.log(err))
        }

    }, [id])
    return (
        <>{<main className='App-Main'>
            <section className='sectionMain'>
                <ItemList item={datos} />
            </section>
        </main>
        }</>
    )
}
export default ItemListContainer;