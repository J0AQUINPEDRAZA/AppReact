function ItemConunt({ item, initial, onAdd, countHandlerMinus, countHandlerPlus, qty, count}) {
    return (
        <div className="itemCountContainer">
            <span className="stockText">{item.stock > 0 ? `Quedan ${item.stock} en stock` : `No quedan unidades en stock`}</span>
            <div className="countBox">
                <button className="btnMinus" onClick={countHandlerMinus} disabled={count === initial}><i className="fa-solid fa-minus"></i></button>
                <p className="countNumber">{count}</p>
                <button className="btnPlus" onClick={countHandlerPlus} disabled={qty >= item.stock || item.stock === 0}><i className="fa-solid fa-plus"></i></button>
            </div>
            <button className="btnAddToCart" onClick={onAdd} disabled={qty >= item.stock || count === 0}>Agregar al carrito</button>
        </div>
    )
}
export default ItemConunt;
