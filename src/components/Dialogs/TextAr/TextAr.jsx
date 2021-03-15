import c from './TextAr.module.css'
import * as React from "react";

import {checkTextActionCreator,addMessageCreator} from "../../../Redux/dialogs-reduce";

const TextAr = (props)=>{
    let addMessage = ()=>{
        props.addMess();
    }
    let checkText = (e)=>{
        let text = e.target.value;
        props.checkT(text);
    }
    return(
        <div className={c.wrap}>
            <div><textarea onChange={checkText} value={props.nmb}></textarea></div>
            <div><div className={c.sendwrap} onClick={addMessage}><span className='icon-paperplane'></span></div></div>

        </div>
    )
}
export default TextAr;
