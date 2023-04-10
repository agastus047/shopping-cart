import ItemCard from "./ItemCard";

const Shop = ({items,handleAddToCart}) => {

    const renderedCards = items.map(item => (
        <ItemCard key={item.id} item={item} handleAddToCart={handleAddToCart}/>
    ));

    return(
        <div>
            {renderedCards}
        </div>
    );
};

export default Shop;