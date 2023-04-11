import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <div>HOME PAGE</div>
            <button><Link to="/shop">Shop Now!</Link></button>
        </div>
    );
};

export default Home;