function Item({ image, title, price, }) {
    return (
        <div className="itemCard">
            <img src={image} className="itemImg" />
            <p className="itemTitle">{title}</p>
            <p className="itemPrice">${price}</p>
        </div>
    )
}
export default Item;