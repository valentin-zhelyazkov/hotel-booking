import './home.css';
import img from '../../images/hotel.jpg';
import db from '../../database/db';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';


const Home = () => {
    const [hotels, setHotels] = useState([]);

    const fetchHotels = async () => {
        const response = db.firestore().collection('hotels');
        const data = await response.get();

        
        setHotels([
            ...hotels,
            ...data.docs.map(hotel => hotel.data())
        ]);
    }

    useEffect(() => {
        fetchHotels();
    }, []);

    console.log('render2');
    return (
        <section id="viewCatalog" className="background-img">
            <div className="added-hotels">
            {hotels.map((x, index) => (          
                <Link to="/details" key={index} className="added-hotel">
                    <img src={x.imageUrl} alt="" className="picture-added-hotel" />
                    <h3>{x.city}</h3>
                    <span>Free rooms: {x.freeRooms}</span>                   
                </Link>
            ))}         
            </div>
        </section>
    );
}

export default Home;