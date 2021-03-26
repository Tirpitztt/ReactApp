import Dialogs from "./Dialogs";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {addMessageCreator} from "../../Redux/dialogs-reduce";
import {connect} from "react-redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import * as React from "react";
import {compose} from "redux";

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

        auth:state.authentication.isUserAuth
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        addMess:(text)=>{
            dispatch(addMessageCreator(text))
        }

    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(DialogsContainer);


