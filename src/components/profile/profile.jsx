import c from './profile.module.css';
import MyPost from './Posts/myPost'
import User_info from './ProfileInfo/Users/user_info';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = ()=>{
    return (
        <div >
            <div className={c.heat}><img src="https://dbijapkm3o6fj.cloudfront.net/resources/20611,1004,1,6,4,0,960,330/-3842-/20161013141806/image-gallery.jpeg" alt=""/></div>
            <ProfileInfo />
            <MyPost />

        </div>
    )
}
export default Profile;