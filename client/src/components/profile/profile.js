import './profile.css';

const profile = () => {
    return (
        <section id="viewhotelDetails">
                <div className="profile">
                    <h3>User Info:</h3>
                    <div className="flex">
                        <p>Username: </p>
                        <p>Johny</p>
                    </div>
                    <div className="flex">
                        <p>Email: </p>
                        <p>john.doe@gmail.com</p>
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

export default profile;