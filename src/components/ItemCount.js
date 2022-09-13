

function ItemConunt({ item, initial, onAdd, qtyHandlerMinus, qtyHandlerPlus, cart, qty}) {
    return (
        <div className="itemCountContainer">
            <span className="stockText">{item.stock > 0 ? `Quedan ${item.stock} en stock` : `No quedan unidades en stock`}</span>
            <div className="countBox">
                <button className="btnMinus" onClick={qtyHandlerMinus} disabled={qty === initial}><i className="fa-solid fa-minus"></i></button>
                <p className="countNumber">{qty}</p>
                <button className="btnPlus" onClick={qtyHandlerPlus} disabled={cart >= item.stock || item.stock === 0}><i className="fa-solid fa-plus"></i></button>
            </div>
            <button className="btnAddToCart" onClick={onAdd} disabled={cart >= item.stock || qty === 0}>Agregar al carrito</button>
        </div>
    )
}
export default ItemConunt;
