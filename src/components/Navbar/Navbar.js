import './navbar.css';
import logo from '../../icons/logo.png';

export default function Navbar() {
    return (
        <nav className="nav">
            <img className="nav--logo" src={logo} alt=""/>
            <p className="nav--text">my travel journal.</p>
        </nav>
    )
}