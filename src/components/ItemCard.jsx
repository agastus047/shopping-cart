const ItemCard = ({item, handleAddToCart}) => {

    const handleClick = () => {
        handleAddToCart(item.id);
    };

    return(
        <div>
            <div>{item.title}</div>
            <div>{item.price}</div>
            <button onClick={handleClick}>Add to cart</button>
        </div>
    );
};

export default ItemCard;