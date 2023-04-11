import ShopCard from "./ShopCard";

const Shop = ({items}) => {

    const renderedCards = items.map(item => (
        <ShopCard key={item.id} item={item} />
    ));

    return(
        <div>
            {renderedCards}
        </div>
    );
};

export default Shop;