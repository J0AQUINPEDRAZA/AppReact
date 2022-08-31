function ItemProduct({image, title, price, id}) {
    return (
        <div className="itemCard">
            <img src={image} className="itemImg"/>
            <p className="itemTitle">{title}</p>
            <p className="itemPrice">${price}</p>
        </div> 
    )
}
export default ItemProduct;
