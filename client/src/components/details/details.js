import { useEffect } from 'react';
import './details.css';
import { Link } from "react-router-dom";
import db from '../../database/db';

const Details = ( match ) => {
    useEffect(() => {
        console.log('details');
        db.firestore().collection('hotels').get().then(x => {
            x.docs.forEach(a => {
                console.log(a.id);
            })
        });
    }, []);
    
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
                    <Link to="/book" className="book">Book</Link>
                    <Link to="/edit/:hotelId" className="edit">Edit</Link>
                    <Link to="" className="remove/:hotelId">Delete</Link>
                </div>
            </div>
        </section>
    );
}

export default Details;
