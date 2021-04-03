import './home.css';
import img from '../../images/hotel.jpg';
import db from '../../database/db';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';


const Home = () => {
    const [hotels, setHotels] = useState([]);
    const [fetchedHotels, setFetchedHotels] = useState(false);

    const fetchHotels = async () => {
        const response = db.firestore().collection('hotels');
        const data = await response.get();

        setHotels(data.docs.map(hotel => ({
            id: hotel.id,
            ...hotel.data()
        })));
        setFetchedHotels(true);
    }

    useEffect(() => {
        fetchHotels();
    }, []);

    return (
        <section id="viewCatalog" className="background-img">
            <div className="added-hotels">
                {hotels.length ? hotels.map((hotel, index) => (
                    <Link to={`/details/${hotel.id}`} key={index} className="added-hotel">
                        <img src={hotel.imageUrl} alt="" className="picture-added-hotel" />
                        <h3>{hotel.city}</h3>
                        <span>Free rooms: {hotel.freeRooms}</span>
                    </Link>
                )) :
                    <div className="guest">
                        { !fetchedHotels ? "Loading..." : "There are no Hotels found..." }
                    </div>
                }
            </div>
        </section>
    );
}

export default Home;

