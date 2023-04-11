import CartCard from "./CartCard";

const Cart = ({cartContents,handleAddToCart,handleDeleteFromCart,handleDecrementCount}) => {

    const renderedCards = cartContents.map(item => (
        <CartCard key={item.id} item={item} handleAddToCart={handleAddToCart} handleDeleteFromCart={handleDeleteFromCart} handleDecrementCount={handleDecrementCount}/>
    )); 
    
    const totalSum = cartContents.reduce((accumulator,item) => {
        return accumulator + (item.price*item.count);
    },0);

    return(
        <div>
            {renderedCards}
            <div>
                <div>Total Amount: {totalSum}</div>
                <button>CHECKOUT</button>
            </div>
        </div>
    );
};

export default Cart;