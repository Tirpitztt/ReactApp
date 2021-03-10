import c from './user_post.module.css';

const User_post = ()=>{
    return (
        <div>
            <textarea className={c.upost} name="userpost" id="u_p" cols="100" rows="6"></textarea>
            <div className={c.sbtn}>SEND <span className='icon-paperplane'></span></div>
        </div>
    )
}

export default User_post;