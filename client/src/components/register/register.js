import './register.css'
import db from '../../database/db';
import { withRouter } from 'react-router-dom';

const Register = ({
    history
}) => {
    const onRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const repeatPassword = e.target.rePassword.value;
        if (password !== repeatPassword) {
            return;
        }
        db.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const uid = userCredential.user.uid;
                localStorage.setItem('uid', uid);
                history.push('/');
            })
            .catch((error) => {
                console.error(error);
            });
    };


    return (
        <section id="viewRegister">
            <h2>Create your account:</h2>
            <form id="formRegister" onSubmit={onRegister}>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="Email" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Password" />
                <label htmlFor="rePassword">Repeat Password:</label>
                <input type="password" id="rePassword" name="rePassword" placeholder="Repeat Password" />
                <input type="submit" className="register" value="Register" />
            </form>
        </section>
    );
}

export default withRouter(Register);
