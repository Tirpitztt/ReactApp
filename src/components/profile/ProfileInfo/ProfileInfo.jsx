import c from "./ProfileInfo.module.css";
import User_info from "./Users/user_info";
import Preloader from "../../Common/Preloader/Preloader";
import AvatarUser from "../../Common/UserAva/avatarUser";


const ProfileInfo = (props)=>{
    if(!props.state.profilePage.profile){
        return <Preloader />
    }
    return(
        <div className={c.user_wrap}>
            <AvatarUser state={props.state} />
            <div className={c.user_info}>
                    <User_info state={props.state.profilePage} upStatus={props.updateStatus}/>

            </div></div>
    )
}

export default ProfileInfo;