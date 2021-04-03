import './editError.css';

const EditError = ({children}) => {
    if(!children){
        return null;
    }
    return (
        <div className="input-error">{children}</div>        
    )
}

export default EditError;