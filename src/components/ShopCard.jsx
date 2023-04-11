import { Link } from "react-router-dom";

const ShopCard = ({item}) => {

    return(
        <div>
            <div>{item.title}</div>
            <div>{item.price}</div>
            <Link to={`/shop/${item.id}`}>Open</Link>
        </div>
    );
};

export default ShopCard;