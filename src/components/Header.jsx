import { Link } from "react-router-dom";


function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <h3> LOGO</h3>
                <ul>
                    <Link to={`/artworks/`}><li>The Collections</li></Link>
                    <li>Event</li>
                    <li>Shop</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
