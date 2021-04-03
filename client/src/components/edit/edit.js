import { useEffect, useState, } from 'react';
import { withRouter } from 'react-router-dom';
import './edit.css';
import EditError from '../editError/editError';
import db from '../../database/db';

const Edit = ({
    match,
    history
}) => {
    const hotelId = match.params.hotelId;
    let [hotel, setHotel] = useState({});
    const [error, setError] = useState('');
    useEffect(() => {
        db.firestore()
            .collection('hotels')
            .doc(hotelId)
            .get()
            .then(curHotel => {
                setHotel({ ...curHotel.data() });
            });
    }, [hotelId]);

    const onSubmitChange = (e) => {
        e.preventDefault();
        const hotelName = e.target.hotel.value;
        const city = e.target.city.value;
        const freeRooms = e.target.freeRooms.value;
        const imageUrl = e.target.imgUrl.value;
        if (hotelName.length === 0) {
            setError('Hotel name must be atlest 1 char long');
            return;
        } else if (city.length === 0) {
            setError('City must be atlest 1 char long');
            return;
        } else if (Number(freeRooms) <= 0 ) {
            setError('Free rooms must be atleast 1');
            return;
        } else if (imageUrl.length === 0) {
            setError('ImageUrl must be atlest 1 char');
            return;
        }
        
        db.firestore()
            .collection('hotels')
            .doc(hotelId)
            .update({
                hotelName: e.target.hotel.value,
                city: e.target.city.value,
                freeRooms: e.target.freeRooms.value,
                imageUrl: e.target.imgUrl.value,
            })
        history.push(`/details/${hotelId}`);
    }

    return (
        <section id="viewAddhotel">
            <h2>Edit existing hotel</h2>
            <form id="formAddhotel" onSubmit={onSubmitChange}>
                <label htmlFor="hotel">Hotel name:</label>
                <input type="text" id="hotel" name="hotel" defaultValue={hotel.hotelName} />
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" defaultValue={hotel.city} />
                <label htmlFor="free-rooms">Free rooms:</label>
                <input type="number" id="free-rooms" name="freeRooms" defaultValue={hotel.freeRooms} />
                <label htmlFor="imgUrl">Image:</label>
                <input type="text" id="imgUrl" name="imgUrl" defaultValue={hotel.imageUrl} />
                <EditError className="input-error">{error}</EditError>
                <input type="submit" className="edit" value="Add" />
            </form>
        </section>
    );
};

export default withRouter(Edit);
