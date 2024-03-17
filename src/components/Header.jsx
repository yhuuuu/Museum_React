import { Link } from "react-router-dom";
import logo from "../images/logo.png"


function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <Link to={`/`}><img src={logo} alt="logo"/></Link>
                <ul>
                    <Link to={`/artworks/`}><li>The Collections</li></Link>
                    <Link to={`/events/`}><li>Event</li></Link>
                   
                </ul>
            </nav>
        </header>
    )
}

export default Header;
