import './header.css';

const header = () => {
    return (
        <nav>
            <div className="left-container">
                <ul>
                    <li><a href="" className="nav-btn">Home</a></li>
                    <li><a href="" className="nav-btn">Add +</a></li>
                </ul>
            </div>
            <div className="right-container">
                <a href="" className="nav-btn">username</a>
                <a href="" className="nav-btn">Logout</a>
            </div>
        </nav>
    );
};
export default header;