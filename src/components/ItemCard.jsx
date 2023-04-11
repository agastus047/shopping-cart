import { useParams } from "react-router-dom";
const ItemCard = ({items,handleAddToCart}) => {

    const {id} = useParams();
    const itemId = +id;

    const handleClick = () => {
        handleAddToCart(itemId);
    };

    const selectedItem = items.find(item => item.id === itemId);
    
    return(
        <div>
            <div>{selectedItem.title}</div>
            <div>{selectedItem.price}</div>
            <button onClick={handleClick}>Add to cart</button>
        </div>
    );
};

export default ItemCard;