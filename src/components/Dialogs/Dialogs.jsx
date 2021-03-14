import c from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


import TextAr from "./TextAr/TextAr";




const Dialogs = (props)=>{

    let state = props.state.getState();
    let resDialog = state.dialogsPage.dialogs.map(d => <Dialog name={state.users[d.userId-1].name} id={d.userId} key={d.id+Math.random()}/>);
    let resMessage = state.dialogsPage.messages.map(m => <Message message={m.text}  key={m.id+Math.random()}/>)

    return (
        <div className={c.dialogs}>
            <div className={c.dialogs_items}>
                {resDialog}
            </div>
            <div className={c.messages}>
                {resMessage}
                <TextAr state={props.state}/>
            </div>

        </div>
    )
}
export default Dialogs;