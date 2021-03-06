import c from './myPost.module.css';
import Post from './Post/post'

const MyPost = ()=>{
    return (

            <div className={c.posts_wrap}>Posts
                <div className={c.new_post}>New post</div>
                <Post />
            </div>


    )
}
export default MyPost;