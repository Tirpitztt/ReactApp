import c from './TextAr.module.css'
import * as React from "react";
import {addMessageCreator, checkTextActionCreator} from "./../../../Redux/state";

const TextAr = (props)=>{
    let state = props.state.getState();
    let newMessageBody = state.dialogsPage.checkedText;
    let addMess = ()=>{
        props.state.dispatch(addMessageCreator());
    }
    let checkText = (e)=>{
        let text = e.target.value;
        props.state.dispatch(checkTextActionCreator(text,'CHECK_MESSAGE'));
    }
    return(
        <div className={c.wrap}>
            <div><textarea onChange={checkText} value={newMessageBody}></textarea></div>
            <div><div className={c.sendwrap} onClick={addMess}><span className='icon-paperplane'></span></div></div>

        </div>
    )
}
export default TextAr;
