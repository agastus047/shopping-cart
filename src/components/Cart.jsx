import CartCard from "./CartCard";

const Cart = ({cartContents,handleAddToCart,handleDeleteFromCart,handleDecrementCount}) => {

    const renderedCards = cartContents.map(item => (
        <CartCard key={item.id} item={item} handleAddToCart={handleAddToCart} handleDeleteFromCart={handleDeleteFromCart} handleDecrementCount={handleDecrementCount}/>
    )); 
    
    const totalSum = cartContents.reduce((accumulator,item) => {
        return accumulator + (item.price*item.count);
    },0);

    return(
        <div className="flex-auto flex flex-col p-7 sm:p-20 items-center sm:grid grid-cols-[2fr_1fr] sm:gap-20 sm:items-start">
            {cartContents.length>0 ?
                <div className="bg-neutral-100 p-3 rounded-xl">{renderedCards}</div> :
                <div className="text-4xl text-center mt-20 font-bold text-gray-400 sm:text-end">Your cart is empty</div>
            }
            {cartContents.length>0 &&
            <div className="mt-10 p-6 bg-neutral-100 rounded-xl w-full">
                <div className="flex justify-between mb-2"><span>Subtotal: </span><span>₹{totalSum}</span></div>
                <hr className="border-neutral-300"></hr>
                <div className="flex justify-between my-2"><span>Delivery: </span><span>Free</span></div>
                <hr className="border-neutral-300"></hr>
                <div className="flex justify-between my-2"><span>Total: </span><span>₹{totalSum}</span></div>
                <div className="flex justify-center mt-3"><button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">CHECKOUT</button></div>
            </div>}
        </div>
    );
};

export default Cart;