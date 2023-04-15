import { Link } from "react-router-dom";

const ShopCard = ({item}) => {

    return(
        <Link to={`/shop/${item.id}`} className="flex flex-col items-center shadow-xl">
            <img src={item.image} alt="shoe_image" className="object-center object-cover h-48 sm:h-56 w-full"></img>
            <div className="pt-3 font-extrabold text-lg">{item.title}</div>
            <div className="pb-3">MRP: ₹{item.price}</div>
        </Link>
    );
};

export default ShopCard;