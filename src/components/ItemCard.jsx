import { useParams } from "react-router-dom";
const ItemCard = ({items,handleAddToCart}) => {

    const {id} = useParams();
    const itemId = +id;

    const handleClick = () => {
        handleAddToCart(itemId);
    };

    const selectedItem = items.find(item => item.id === itemId);
    
    return(
        <div className="flex-auto bg-[rgb(245,245,245)] p-7 sm:px-24 flex flex-col items-center">
            <img src={selectedItem.image} alt="shoe_image" className="h-56 sm:h-72"></img>
            <div className="font-extrabold text-xl">{selectedItem.title}</div>
            <div className="text-lg py-3">MRP: ₹{selectedItem.price}</div>
            <div className="text-slate-600 pb-3">{selectedItem.description}</div>
            <button className="btn btn-border-4" onClick={handleClick}>Add to Cart</button>
        </div>
    );
};

export default ItemCard;