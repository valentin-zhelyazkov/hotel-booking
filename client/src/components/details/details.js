import { useEffect, useState, Fragment } from 'react';
import './details.css';
import { Link, withRouter } from "react-router-dom";
import db from '../../database/db';

const Details = ({
    match,
    history
}) => {
    const hotelId = match.params.hotelId;
    let [hotel, setHotel] = useState({});
    const [booked, setIsBooked] = useState(false);
    
    useEffect(() => {
        db.firestore()
            .collection('hotels')
            .doc(hotelId)
            .get()
            .then(curHotel => {
                setHotel({ ...curHotel.data() });
            });
    }, [hotelId]);

    const onDelete = (e) => {
        e.preventDefault();
        db.firestore()
            .collection('hotels')
            .doc(hotelId)
            .delete();

        history.push('/');
    }

    const onBookHotel = (e) => {
        e.preventDefault();
        db.firestore().collection('hotels')
            .doc(hotelId)
            .get()
            .then(curHotel => {
                db.firestore()
                    .collection('hotels')
                    .doc(hotelId)
                    .update({
                        userWhoBookedHotel: [
                            ...curHotel.data().userWhoBookedHotel,
                            localStorage.getItem('uid')
                        ]
                    })
            }) 
    };

    useEffect(() => {
       db.firestore()
            .collection('hotels')
            .doc(hotelId)
            .get()
            .then(curHotel => {
                if(curHotel.data().userWhoBookedHotel.includes(localStorage.getItem('uid'))){
                    setIsBooked(true);
                } else {
                    setIsBooked(false);
                }
                
            })
    },[booked]);

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

                    {hotel.userId == localStorage.getItem('uid') ?
                        <Fragment>
                            <Link to={`/edit/${hotelId}`} className="edit">Edit</Link>
                            <button className="button, remove" onClick={onDelete}>Delete</button>
                        </Fragment> :
                        <Fragment>
                        {booked ? 
                            <p><span className="green">You already have booked a room</span> </p> :
                            <Link to="/book" className="book" onClick={onBookHotel}>Book</Link>
                        }     
                        </Fragment>
                    }
                </div>
            </div>
        </section>
    );
}

export default withRouter(Details);
