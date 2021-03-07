import c from './profile.module.css';
import MyPost from './Posts/myPost'
import User_info from './Users/user_info';
const Profile = ()=>{
    return (
        <div >
            <div className={c.heat}><img src="https://dbijapkm3o6fj.cloudfront.net/resources/20611,1004,1,6,4,0,960,330/-3842-/20161013141806/image-gallery.jpeg" alt=""/></div>
            <div className={c.user_wrap}>
                <div className={c.user_ava}><img src="https://img.huffingtonpost.com/asset/5f5b3bd92400003410922171.jpeg?ops=scalefit_630_noupscale" alt=""/></div>
                <div className={c.user_info}>
                <h3>user info</h3>
                <User_info />
                
                </div></div>
            <MyPost />

        </div>
    )
}
export default Profile;