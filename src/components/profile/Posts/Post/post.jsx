import c from './post.module.css';

const Post = (props)=>{
    return (
        
            <div className={c.postwr}>
             <div className={c.post}>
                <div className={c.ava}><img src="http://metalarea.org/images/audiocovers/2019_Aug/acov_tid325781.jpg" alt=""/></div>
                <div className={c.coment}>{props.message}</div>
             </div>
                
                <div className={c.butwrap}>
                    <div className={c.like}><span className='icon-like'></span>Like</div>
                    <div className={c.like}><span className='icon-like'></span>No like</div>
                </div> 
            </div>
        

    )
}
export default Post;