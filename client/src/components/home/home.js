import './home.css';

const home = () => {
    return (
        <section id="viewCatalog" className="background-img">
            <div className="added-hotels">
                <a href="" className="added-hotel">
                    <img src="https://image.freepik.com/free-vector/flat-hotel-building_23-2148162501.jpg" alt=""
                    className="picture-added-hotel"/>
                    <h3>Hilton Toronto</h3>
                    <span>Free rooms: 42</span>
                </a>
                <a href="" className="added-hotel">
                    <img src="https://image.freepik.com/free-vector/flat-hotel-building-town_52683-10040.jpg"
                        alt="" className="picture-added-hotel"/>
                    <h3>Auckland Inn</h3>
                    <span>Free rooms: 35</span>
                </a>
                <a href="" className="added-hotel">
                    <img src="https://image.freepik.com/free-vector/showplace-illustration-with-all-famous-buildings-linear-banner_1416-984.jpg"
                        alt="" className="picture-added-hotel"/>
                    <h3>Hotel Berlin</h3>
                    <span>Free rooms: 15</span>
                </a>
            </div>
        </section>
    );
}

export default home;