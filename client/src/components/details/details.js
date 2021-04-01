import { useEffect, useState } from 'react';
import './details.css';
import { Link } from "react-router-dom";
import db from '../../database/db';

const Details = (match) => {
    const hotelId = match.match.params.hotelId;
    let [hotel, setHotel] = useState({});

    useEffect(() => {
        db.firestore()
            .collection('hotels')
            .doc(hotelId)
            .get()
            .then(curHotel => {
                setHotel({ ...curHotel.data() });
            });
    }, []);
    
    const onDelete = (e) => {
        e.preventDefault();
        db.firestore()
        .collection('hotels')
        .doc(hotelId)
        .delete();
    }
    return (
        <section id="viewhotelDetails">
            <h2>Details</h2>
            <div className="hotel-ticket">
                <div className="hotel-left">
                    <img src={hotel.imageUrl} alt="" />
                </div>
                <div className="hotel-right">
                    <div>
                        <h3>{hotel.hotelName}</h3>
                    </div>
                    <div>{hotel.city}</div>
                    <p><span >Free rooms: {hotel.freeRooms}</span> </p>
                    <p><span className="green">You already have booked a room</span> </p>
                    <Link to="/book" className="book">Book</Link>
                    <Link to={`/edit/${hotelId}`} className="edit">Edit</Link>
                    <button className="button, remove" onClick={onDelete}>Delete</button>
                </div>
            </div>
        </section>
    );
}

export default Details;
