import c from './TextAr.module.css'
import * as React from "react";

const TextAr = (props)=>{

    let textel = React.createRef();

    let addMess = ()=>{
        let text = textel.current.value;
        alert(text);
    }

    return(
        <div className={c.wrap}>
            <div><textarea ref={textel} name="" id="" cols="70" rows="5"></textarea></div>
            <div><div className={c.sendwrap} onClick={addMess}><span className='icon-paperplane'></span></div></div>

        </div>
    )
}
export default TextAr;
