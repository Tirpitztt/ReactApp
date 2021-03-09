import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props)=>{

    let path = '/dialogs/'+props.id;
    return(
        <div className={c.dialog}>
            <NavLink to={path} activeClassName={c.active}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) =>{
    return(
        <div className={c.mess}>{props.message}</div>
    )
}

const Dialogs = (props)=>{

    let dialogData = [
        {id:"1",name:"Sergey"},{id:"2",name:"Volga"},{id:"3",name:"Alina"},{id:"4",name:"Volodya"},{id:"5",name:"Mudak"}
    ];
    let messageData = [
        {id:"1",message:"i like you"},
        {id:"2",message:"i like you too"},
        {id:"3",message:"hi my family"},
        {id:"4",message:"all fine"},
        {id:"5",message:"hi"},

    ]
    let resDialog = dialogData.map(d => <Dialog name={d.name} id={d.id} />);
    let resMessage = messageData.map(m => <Message message={m.message} />)
    return (
        <div className={c.dialogs}>
            <div className={c.dialogs_items}>
                {resDialog}
            </div>
            <div className={c.messages}>
                {resMessage}
            </div>

        </div>
    )
}
export default Dialogs;