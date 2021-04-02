import './profile.css';
import profileSrc from '../../images/profile.png';
import db from '../../database/db';
import { useEffect, useState, } from 'react';

const Profile = () => {
    let [email, setEmail] = useState('');

    useEffect(() => {
        db.auth().currentUser
        .providerData
        .forEach((element) => {
            setEmail(element.uid);
        });

    }, []);
    
    //const onProfile = (e) => {
    //    e.preventDefault();
    //    
    //}
    return (
        <section id="viewhotelDetails">
            <div className="profile">
                <img src={profileSrc} alt="default user"/>
                <h3>User Info:</h3>
                <div className="flex">
                    <p>Email: </p>
                    <p>{email}</p>
                </div>
                <div className="flex">
                    <p>Reservations: </p>
                    <p>
                        <span>Hilton Toronto, </span>
                        <span>Auckland Inn, </span>
                        <span>Hotel Berlin, </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Profile;