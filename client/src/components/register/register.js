import './register.css'

const register = () => {
    return (
        <section id="viewRegister">
            <h2>Create your account:</h2>
            <form id="formRegister">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="Email"/>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter your Username"/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Password"/>
                <label htmlFor="rePassword">Repeat Password:</label>
                <input type="password" id="rePassword" name="rePassword" placeholder="Repeat Password"/>
                <input type="submit" className="register" value="Register"/>
            </form>
        </section>
    );
}

export default register;