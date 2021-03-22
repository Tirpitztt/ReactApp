import c from "../../profile/ProfileInfo/ProfileInfo.module.css";
import zagl from '../../../Assets/img/noava.png';

const AvatarUser = (props) =>{
    let path = props.state.profilePage.profile.photos.large;

    return (
        <div className={c.user_ava}>{path?<img src={path} alt=""/>:<img src={zagl} alt=""/>}</div>
    )
}

export default AvatarUser;