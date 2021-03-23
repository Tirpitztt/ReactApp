import Dialogs from "./Dialogs";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {addMessageCreator, checkTextActionCreator} from "../../Redux/dialogs-reduce";
import {connect} from "react-redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import * as React from "react";

class DialogsContainer extends React.Component{

    render(){
        return <Dialogs {...this.props}/>
    }
}


let mapStateToProps = (state)=>{
    let resDialog = state.dialogsPage.dialogs.map(d => <Dialog name={state.navBar.users[d.userId-1].name} id={d.userId} key={d.id+Math.random()}/>);
    let resMessage = state.dialogsPage.messages.map(m => <Message message={m.text}  key={m.id+Math.random()}/>)
    return{
        dialogArr:resDialog,
        messageArr:resMessage,
        newMessBody:state.dialogsPage.checkedText,
        auth:state.authentication.isUserAuth
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
let redirectComponent = withAuthRedirect(DialogsContainer);
export default connect(mapStateToProps,mapDispatchToProps)(redirectComponent);

