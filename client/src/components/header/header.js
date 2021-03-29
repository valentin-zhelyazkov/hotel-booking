import './header.css';
import { Link } from 'react-router-dom';
import db from '../../database/db';

const Header = () => {
    const logout = (e) => {
        e.preventDefault();
        console.log("nice");
        db.auth().signOut().then(() => {
            localStorage.removeItem('uid');
          }).catch((error) => {
            console.error(error);
          });
        
    }
    return (
        <nav>
            <div className="left-container">
                <ul>
                    <li><Link to="/" className="nav-btn">Home</Link></li>
                    <li><Link to="/add" className="nav-btn">Add Hotel</Link></li>
                </ul>
            </div>
            <div className="right-container">
                <Link to="/profile" className="nav-btn">username</Link>
                <Link to="/logout" className="nav-btn" onClick={logout}>Logout</Link>
            </div>
        </nav>
    );
};
export default Header;