function Item({ item }) {
    return (
        <div className="itemCard" key={item.id}>
            <img src={item.image} className="itemImg" alt=""/>
            <p className="itemTitle">{item.tag}</p>
            <p className="itemPrice">${item.price}</p>
            <span className="stockText">{item.stock > 0 ? `Quedan ${item.stock} unidades en stock` : `No quedan unidades en stock`}</span>
        </div>
    )
}
export default Item;