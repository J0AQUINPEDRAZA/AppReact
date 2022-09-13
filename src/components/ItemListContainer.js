import React, { useEffect } from 'react';
import { useState } from "react";
import DataHogar from "../libs/DataHogar";
import Task from '../utils/Task';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import CategoryName from './CategoryName';


function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            Task(DataHogar.filter(item => item.categoryId === parseInt(id)))
                .then(res => setProducts(res))
                .catch(err => console.log(err))
        } else {
            Task(DataHogar)
                .then(res => setProducts(res))
                .catch(err => console.log(err))
        }
    }, [id])
    return (
        <>{<main className='App-Main'>
            {/* <CategoryName item={products[1]}/> */}
            <section className='sectionMain'>
                <ItemList item={products} />
            </section>
        </main>
        }</>
    )
}
export default ItemListContainer;