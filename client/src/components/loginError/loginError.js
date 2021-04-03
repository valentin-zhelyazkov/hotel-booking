import './loginError.css'

const LoginError = ({children}) => {
    if(!children){
        return null;
    }
    return (
        <div className="input-error">{children}</div>        
    )
}

export default LoginError;