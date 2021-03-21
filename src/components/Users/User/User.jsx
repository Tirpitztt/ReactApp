import c from './../Users.module.css';
import {NavLink} from "react-router-dom";


const User = (props)=>{
    
    let followButton = 'добавить в друзья';
    if(props.follow){followButton='удалить из друзей'}

    let changeFollow = ()=>{
       props.flw(props.userId,props.follow);
    }
    return(
        <div className={c.wrap_elem}>
            <NavLink to={'/profile/' + props.userId}>
                <div className={c.wrap_ava}><img src={props.avaurl} alt=""/></div>
            </NavLink>
            <div className={c.wrap_info}>
                <div><p>Имя: {props.name}</p></div>
                <div><p>Статус: {props.status}</p></div>
                <div><p>Страна: {props.location.country}</p></div>
                <div><p>Город: {props.location.city}</p></div>
            </div>
            {props.isFetch?'???':<div className={c.btn} onClick={changeFollow}>{followButton}</div>}
        </div>
    )
}

export default User;