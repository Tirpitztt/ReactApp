import c from "./ProfileInfo.module.css";
import User_info from "./Users/user_info";


const ProfileInfo = (props)=>{
    let state = props.state;
    return(
        <div className={c.user_wrap}>
            <div className={c.user_ava}><img src={props.state.avaurl} alt=""/></div>
            <div className={c.user_info}>

                <User_info state={props.state}/>

            </div></div>
    )
}

export default ProfileInfo;