import c from './post.module.css';

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

const Post = (props)=>{

 let res = props.state.posts.map(post => <PostElement name={props.state.users[post.user-1].name} message={post.post} like={post.likes}
                                                         avaurl={props.state.users[post.user-1].avaurl} key={post.id+Math.random()}/>);
    function getUserAva(id){
        props.state.users.forEach(function (item){
            if(item.id===id){
                return item.avaurl;
            }
        })
    }

   return res;


}
export default Post;