const CartCard = ({item,handleAddToCart,handleDeleteFromCart,handleDecrementCount}) => {

    const handleAddClick = () => {
        handleAddToCart(item.id);
    };

    const handleDecrementClick = () => {
        handleDecrementCount(item.id);
    };

    const handleDeleteClick = () => {
        handleDeleteFromCart(item.id);
    };

    return(
        <div>
            <div>{item.title}</div>
            <div>{item.price}</div>
            <div>{item.count}</div>
            <div>Total Amount: {item.price*item.count}</div>
            <button onClick={handleAddClick}>...+...</button>
            <button onClick={handleDecrementClick}>...-...</button>
            <button onClick={handleDeleteClick}>remove</button>
        </div>
    );
};

export default CartCard;