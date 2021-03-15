import c from "../post.module.css";

const PostElement = (props)=>{
    return(
        <div className={c.postwr}>
            <div>{props.name}</div>
            <div className={c.post}>
                <div className={c.ava}><img src={props.avaurl} alt=""/></div>
                <div className={c.coment}>{props.message}</div>
            </div>

            <div className={c.butwrap}>
                <div className={c.like}><span className='icon-like'></span>Like {props.like}</div>
                <div className={c.like}><span className='icon-like'></span>No like </div>
            </div>
        </div>
    )
}

export default PostElement;