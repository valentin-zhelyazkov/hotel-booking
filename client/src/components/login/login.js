import './login.css'

const login = () => {
    return (
        <section id="viewLogin">
            <h2>Login:</h2>
            <form id="formLogin">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter your Username"/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your Password"/>
                <input type="submit" className="login" value="Login"/>
            </form>
        </section>
    );
};

export default login;