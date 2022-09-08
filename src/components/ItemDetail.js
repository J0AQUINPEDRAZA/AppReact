import ItemConunt from "./ItemCount";
function ItemDetail({ item }) {
    return (
        <>{ item.price > 0
            ? <div className="itemDetailBox">
                <div className="cardDetail">
                    <img src={item.image} className="itemDetailImg" alt="" />
                    <p className="itemDetailTag">{item.tag}</p>
                </div>
                <div className="itemDetailcard">
                    <p className="itemDetailDescription">{item.desciption}</p>
                    <p className="itemDetailPrice">${item.price}</p>
                    <ItemConunt stock={item.stock} item={item} initial={1} />
                </div>
            </div>
            : <p>cargando...</p>
        }</>
    )
}
export default ItemDetail;