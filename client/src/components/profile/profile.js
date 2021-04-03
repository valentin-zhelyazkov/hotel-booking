import './profile.css';
import profileSrc from '../../images/profile.png';
import db from '../../database/db';
import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom'

const Profile = ({ history }) => {
    let [email, setEmail] = useState('');

    useEffect(() => {
        db.auth().currentUser
            .providerData
            .forEach((element) => {
                setEmail(element.uid);
            });

    }, []);
    const onClickDelete = (e) => {
        e.preventDefault();
        db.auth().currentUser.delete().then(function() {
            localStorage.removeItem('uid');
            history.push('/');
          }).catch(function(error) {
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
                <button className="delete" onClick={onClickDelete}>Delete Profile</button>
            </div>
        </section>
    );
};

export default withRouter(Profile);