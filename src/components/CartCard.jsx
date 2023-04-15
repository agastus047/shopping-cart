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
        <div className=" w-full grid grid-cols-[1fr_2fr] mt-3 sm:mt-0 sm:pl-14 ">
            <img src={item.image} alt='shoe_image'></img>
            <div className="pl-3 self-center">
                <div className="font-bold sm:text-lg">{item.title}</div>
                
                <div>Total: ₹{item.price*item.count}</div>
                <div className="flex gap-1">
                    <button className="hover:bg-slate-300 text-xs p-1 border border-neutral-600 rounded-[50%] flex justify-center items-center" onClick={handleAddClick}><span className="pi pi-plus"></span></button>
                    <div>{item.count}</div>
                    <button className="hover:bg-slate-300 text-xs p-1 border border-neutral-600 rounded-[50%] flex justify-center items-center" onClick={handleDecrementClick}><span className="pi pi-minus"></span></button>
                    <button className="hover:bg-slate-300 ml-auto sm:ml-32 text-xs p-1 border border-neutral-600 rounded-[50%] flex justify-center items-center" onClick={handleDeleteClick}><span className="pi pi-trash"></span></button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;