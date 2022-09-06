import ItemConunt from "./ItemCount";
function ItemDetail({ item }) {
    return (
        <div className="itemDetailBox">
            <div>
            <img src={item.image} className="itemDetailImg" />
            <p className="itemDetailTag">{item.tag}</p>
            </div>
            <div className="itemDetailcard">
            <p className="itemDetailDescription">{item.desciption}</p>
            <p className="itemDetailPrice">${item.price}</p>
            <ItemConunt stock={item.stock} initial={1} />
            </div>
        </div>
    )
}
export default ItemDetail;