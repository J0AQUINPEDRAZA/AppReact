
import Item from "./Item";
import { Link } from "react-router-dom";


function ItemList({item}) {
    return (
        <>{ item.length > 0
            ? item.map(item=>
            <div className="itemContainer" key={item.id} >
                <Item item={item} />
                <Link to={`item/${item.id}`} className="btnDetalle"><p>Detalle</p></Link>
            </div>)
            : <p>cargando...</p> 
        }</>
    )




}
export default ItemList;