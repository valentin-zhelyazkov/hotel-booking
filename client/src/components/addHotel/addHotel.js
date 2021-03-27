import { React, memo } from 'react';
import db from '../../database/db';
import './addHotel.css'

const AddHotel = memo(({
    history
}) => {
    const onHotelSubmit = (e) => {
        e.preventDefault();

        db.firestore().collection("hotels").add({           
                hotelName: e.target.hotel.value,
                city: e.target.city.value,
                freeRooms: e.target.freeRooms.value,
                imageUrl: e.target.imgUrl.value            
        })
        history.push('/');        
    }


    return (
        <section id="viewAddhotel">
            <h2>Add new hotel</h2>
            <form id="formAddhotel" onSubmit={onHotelSubmit}>
                <label htmlFor="hotel">Hotel name:</label>
                <input type="text" id="hotel" name="hotel" placeholder="Hotel name" />
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" placeholder="City" />
                <label htmlFor="free-rooms">Free rooms:</label>
                <input type="number" id="free-rooms" name="freeRooms" placeholder="Free rooms" />
                <label htmlFor="imgUrl">Image:</label>
                <input type="text" id="imgUrl" name="imgUrl" placeholder="https://" />

                <input type="submit" className="create" value="Add" />
            </form>
        </section>
    );
});

export default AddHotel;
