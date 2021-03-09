import c from './myPost.module.css';
import Post from './Post/post'
import User_post from './Userpost/User_post';

const MyPost = (props)=>{
    return (

            <div className={c.posts_wrap}>
                <div className={c.new_post}>
                <h3>New post</h3>
                <User_post />
                </div>
                <Post posts={props.posts}/>

            </div>


    )
}
export default MyPost;