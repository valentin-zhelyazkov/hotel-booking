import './login.css'
import db from '../../database/db';
import { withRouter } from 'react-router-dom';
import { useState } from 'react';
import LoginError from '../loginError/loginError';

const Login = ({
    history
}) => {
    const [error, setError] = useState('');
    const onLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        db.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const uid = userCredential.user.uid;
                localStorage.setItem('uid', uid);
                console.log(userCredential.user);
                history.push('/');
            })
            .catch((error) => {
                console.error(error);
            });
            if(!localStorage.getItem('uid')){
                setError('Wrong username or password!!!');
                return;
            }
    }

    return (
        <section id="viewLogin">
            <h2>Login:</h2>
            <form id="formLogin" onSubmit={onLogin}>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="Email" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your Password" />
                <LoginError className="input-error">{error}</LoginError>
                <input type="submit" className="login" value="Login" />
            </form>
        </section>
    );


};

export default withRouter(Login);