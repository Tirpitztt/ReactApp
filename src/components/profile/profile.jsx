import c from './profile.module.css';
import MyPost from './Posts/myPost'
import User_info from './ProfileInfo/Users/user_info';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props)=>{
    return (
        <div >
            <div className={c.heat}><img src="https://dbijapkm3o6fj.cloudfront.net/resources/20611,1004,1,6,4,0,960,330/-3842-/20161013141806/image-gallery.jpeg" alt=""/></div>
            <ProfileInfo state={props.state.user} />
            <MyPost state={props.state}
                    addPost={props.addPost}
                    checkText={props.checkText}
            />

        </div>
    )
}
export default Profile;