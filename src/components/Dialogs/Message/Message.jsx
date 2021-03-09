import c from './../Dialogs.module.css';



const Message = (props) =>{
    return(
        <div className={c.mess}>{props.message}</div>
    )
}


export default Message;