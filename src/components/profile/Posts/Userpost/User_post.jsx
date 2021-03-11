import c from './user_post.module.css';
import * as React from "react";

const User_post = (props)=>{

    let textEl = React.createRef();

    let addPost = ()=>{
        let text = textEl.current.value;
        props.addPost(text);
    }

    return (
        <div>
            <textarea ref={textEl} className={c.upost} name="userpost" id="u_p" cols="100" rows="6"></textarea>
            <div className={c.sbtn} onClick={addPost}>SEND <span className='icon-paperplane'></span></div>
        </div>
    )
}

export default User_post;