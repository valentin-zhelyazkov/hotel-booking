import './profile.css';
import profileSrc from '../../images/profile.png';
import db from '../../database/db';
import { useEffect, useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import LoggedContext from '../../contexts/logged-context';

const Profile = ({ history }) => {
    let [email, setEmail] = useState('');
    let [bookedHotels, setBookedHotels] = useState([]);
    const { setIsLogged } = useContext(LoggedContext);
    useEffect(() => {
        db.auth().currentUser
            .providerData
            .forEach((element) => {
                setEmail(element.uid);
            });

    }, []);
    useEffect(() => {
        db.firestore().collection('hotels').get().then((hotels) => {
            hotels.forEach(hotel => {
                if (hotel.data().userWhoBookedHotel.includes(localStorage.getItem('uid'))) {
                    setBookedHotels({
                        hotelName: hotel.data().hotelName,
                    });
                }

            })
        })
    }, []);

    const onClickDelete = (e) => {
        e.preventDefault();
        db.auth().currentUser.delete().then(function () {
            localStorage.removeItem('uid');
            history.push('/');
            setIsLogged(false);
        }).catch(function (error) {
            console.error(error);
        });
    }

    return (
        <section id="viewhotelDetails">
            <div className="profile">
                <img src={profileSrc} alt="default user" />
                <h3>User Info:</h3>
                <div className="flex">
                    <p>Email: </p>
                    <p>{email}</p>
                </div>
                <div class="flex">
                    <p>Reservations: </p>
                    <p>{Object.values(bookedHotels).map(hotel => {
                        <span>{hotel}</span>
                    })}
                    </p>
                </div>
                <button className="delete" onClick={onClickDelete}>Delete Profile</button>
            </div>
        </section>
    );
};

export default withRouter(Profile);