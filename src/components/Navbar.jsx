import { Link } from "react-router-dom";

const Navbar = ({cartContents}) => {
    return(
        <div className="flex h-24 xl:h-28 px-9 xl:px-14 items-center gap-6 text-lg bg-slate-900 text-slate-50">
            <div className="font-extrabold text-3xl">LOGO</div>
            <Link to="/" className="ml-auto hover:text-purple-500">Home</Link>
            <Link to="/shop" className="hover:text-purple-500">Shop</Link>
            <Link to="/cart">
                <div className="relative text-xl text-purple-500">
                    <span className="pi pi-shopping-cart"></span>
                    <span className="absolute left-3 text-white bg-red-500 text-xs rounded-[50%] w-3 h-4 text-center">{cartContents.length}</span>
                </div>
            </Link>
        </div>
    );
};

export default Navbar;