import ShopCard from "./ShopCard";

const Shop = ({items}) => {

    const renderedCards = items.map(item => (
        <ShopCard key={item.id} item={item} />
    ));

    return(
        <div className="flex-auto p-7 sm:p-20 flex flex-col gap-10 sm:gap-16 sm:grid sm:grid-cols-3">
            {renderedCards}
        </div>
    );
};

export default Shop;