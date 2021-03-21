import c from './loginInfo.module.css';
import {NavLink} from "react-router-dom";

const LoginInfo = (props)=>{

    return(
        <div className={c.loginBlock}>
            <div className={c.ava_wrap}><img src={props.props.userAva} alt=""/></div>
            {props.props.auth?<NavLink to={'/profile/'+props.props.userId}>{props.props.login} </NavLink>:<NavLink to={'/login'}>Log in </NavLink>}
        </div>
    )
}

export default LoginInfo;