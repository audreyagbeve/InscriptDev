import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <h2>inScript</h2>

            <div>
                <Link to="/">Home</Link>
                <Link to="/catalogue">Catalogue</Link>
            </div>
        </nav>
    );
}

export default Navbar;