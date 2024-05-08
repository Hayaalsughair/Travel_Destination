import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar(props) {
    return(
    <nav className="navbar">
        <h1>Tour-Destination</h1>
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>

        </div>
    </nav>
)    

}
export default Navbar;