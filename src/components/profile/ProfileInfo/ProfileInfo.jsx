import c from "./ProfileInfo.module.css";
import User_info from "./Users/user_info";
import Preloader from "../../Common/Preloader/Preloader";


const ProfileInfo = (props)=>{
    if(!props.state.profilePage.profile){
        return <Preloader />
    }
    return(
        <div className={c.user_wrap}>
            <div className={c.user_ava}><img src={props.state.profilePage.profile.photos.large} alt=""/></div>
            <div className={c.user_info}>

                <User_info state={props.state.profilePage.profile}/>

            </div></div>
    )
}

export default ProfileInfo;