import ItemCard from "./ItemCard";

const Shop = ({items,handleAddToCart}) => {

    const renderedCards = items.map(item => {
        <ItemCard item={item} handleAddToCart={handleAddToCart}/>
    });

    return(
        <div>
            {renderedCards}
        </div>
    );
};

export default Shop;