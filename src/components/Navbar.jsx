import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                Inscript
            </Link>

            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/catalogue">Catalogue</Link>
            </div>
        </nav>
    );
}

export default Navbar;