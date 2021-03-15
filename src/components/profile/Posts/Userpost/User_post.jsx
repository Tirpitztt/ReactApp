import c from './user_post.module.css';
import * as React from "react";

const User_post = (props)=>{

    let addPost = ()=>{
        props.addP();
}
    let textChange = (e)=>{
        let text = e.target.value;
        props.txtCh(text);
 }
return (
        <div>
            <textarea
                className={c.upost}
                onChange={textChange}
                value={props.cht}
            />
            <div className={c.sbtn} onClick={addPost}>SEND <span className='icon-paperplane'></span></div>
        </div>
    )
}

export default User_post;