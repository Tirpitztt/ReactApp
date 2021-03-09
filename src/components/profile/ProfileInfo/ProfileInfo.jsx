import c from "./ProfileInfo.module.css";
import User_info from "./Users/user_info";


const ProfileInfo = (props)=>{
    return(
        <div className={c.user_wrap}>
            <div className={c.user_ava}><img src="https://img.huffingtonpost.com/asset/5f5b3bd92400003410922171.jpeg?ops=scalefit_630_noupscale" alt=""/></div>
            <div className={c.user_info}>
                <h3>user info</h3>
                <User_info name="Siroga" adress="Bobruisk" status="online"/>

            </div></div>
    )
}

export default ProfileInfo;