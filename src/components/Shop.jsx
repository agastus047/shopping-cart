import ShopCard from "./ShopCard";

const Shop = ({items}) => {

    const renderedCards = items.map(item => (
        <ShopCard key={item.id} item={item} />
    ));

    return(
        <div className="flex-auto p-7 flex flex-col gap-6">
            {renderedCards}
        </div>
    );
};

export default Shop;