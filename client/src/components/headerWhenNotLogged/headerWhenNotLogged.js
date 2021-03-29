import { Link } from 'react-router-dom';
import './headerWhenNotLogged.css'

const HeaderWhenNotLogged = () => {
    return (
        <nav>
            <div className="left-container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="Login">Login</Link></li>
                    <li><Link to="/Register">Register</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default HeaderWhenNotLogged;