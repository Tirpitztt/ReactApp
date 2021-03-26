import c from './myPost.module.css';
import Post from './Post/post'
import User_post from './Userpost/User_post';

const MyPost = (props)=>{
    return (

            <div className={c.posts_wrap}>
                <div className={c.new_post}>
                    <User_post  addP={props.addP} />
                </div>
                <Post state={props.postArr}/>
            </div>


    )
}
export default MyPost;