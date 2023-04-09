import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <div>Shopping Cart</div>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
        </div>
    );
};

export default Navbar;