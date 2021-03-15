import Dialogs from "./Dialogs";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {addMessageCreator, checkTextActionCreator} from "../../Redux/dialogs-reduce";
import {connect} from "react-redux";




let mapStateToProps = (state)=>{
    let resDialog = state.dialogsPage.dialogs.map(d => <Dialog name={state.navBar.users[d.userId-1].name} id={d.userId} key={d.id+Math.random()}/>);
    let resMessage = state.dialogsPage.messages.map(m => <Message message={m.text}  key={m.id+Math.random()}/>)
    return{
        dialogArr:resDialog,
        messageArr:resMessage,
        newMessBody:state.dialogsPage.checkedText
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        addMess:()=>{
            dispatch(addMessageCreator())
        },
        checkT:(text)=>{
            dispatch(checkTextActionCreator(text))
        }

    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;