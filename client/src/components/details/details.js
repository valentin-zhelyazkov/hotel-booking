import './details.css';

const details = () => {
    return (
        <section id="viewhotelDetails">
            <h2>Details</h2>
            <div className="hotel-ticket">
                <div className="hotel-left">
                    <img src="https://image.freepik.com/free-vector/flat-hotel-building-town_52683-10040.jpg"
                        alt=""/>
                </div>
                <div className="hotel-right">
                    <div>
                        <h3>Auckland Inn</h3>
                    </div>
                    <div>
                        Auckland
                    </div>
                    <p><span >Free rooms: 43</span> </p>
                    <p><span className="green">You already have booked a room</span> </p>

                    <a href="" className="book">Book</a>
                    <a href="" className="edit">Edit</a>
                    <a href="" className="remove">Delete</a>
                </div>

            </div>
        </section>
    );
}

export default details;
