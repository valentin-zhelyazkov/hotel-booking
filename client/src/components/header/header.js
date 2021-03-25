import './header.css';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <nav>
            <div className="left-container">
                <ul>
                    <li><Link to="/" className="nav-btn">Home</Link></li>
                    <li><Link to="/add" className="nav-btn">Add Hotel</Link></li>
                </ul>
            </div>
            <div className="right-container">
                <Link href="/profile" className="nav-btn">username</Link>
                <Link href="" className="nav-btn">Logout</Link>
            </div>
        </nav>
    );
};
export default header;