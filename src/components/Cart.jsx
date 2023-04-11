import CartCard from "./CartCard";

const Cart = ({cartContents,handleAddToCart,handleDeleteFromCart,handleDecrementCount}) => {

    const renderedCards = cartContents.map(item => (
        <CartCard key={item.id} item={item} handleAddToCart={handleAddToCart} handleDeleteFromCart={handleDeleteFromCart} handleDecrementCount={handleDecrementCount}/>
    )); 

    return(
        <div>
            {renderedCards}
        </div>
    );
};

export default Cart;