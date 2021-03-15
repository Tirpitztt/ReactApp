import Dialogs from "./Dialogs";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {addMessageCreator, checkTextActionCreator} from "../../Redux/dialogs-reduce";


const DialogsContainer = (props)=>{

    let state = props.state.getState();
    let resDialog = state.dialogsPage.dialogs.map(d => <Dialog name={state.navBar.users[d.userId-1].name} id={d.userId} key={d.id+Math.random()}/>);
    let resMessage = state.dialogsPage.messages.map(m => <Message message={m.text}  key={m.id+Math.random()}/>)
    let newMessageBody = state.dialogsPage.checkedText;

    let addMess = ()=>{
        props.state.dispatch(addMessageCreator());
    }
    let checkText = (text)=>{
        props.state.dispatch(checkTextActionCreator(text));
    }

    return(
        <Dialogs dialogArr={resDialog} messageArr={resMessage} newMesBody={newMessageBody} addMess={addMess} checkT={checkText}/>
    )
}
export default DialogsContainer;