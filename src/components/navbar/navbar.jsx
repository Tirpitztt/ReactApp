import c from './navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const NavBar = (props)=>{
    let profile = '/profile/'+props.state.authentication.userId;
    let dialogs = '/dialogs';
    let news = '/news';
    let music = '/music';
    let settings = '/settings';
    let users = '/users';


    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to={profile} activeClassName={c.activeLink}>Profile</NavLink></div>
            <div className={c.item}>
                <NavLink to={dialogs} activeClassName={c.activeLink}>Messages</NavLink></div>
            <div className={c.item}><NavLink to={news} activeClassName={c.activeLink}>News</NavLink></div>
            <div  className={c.item}><NavLink to={music} activeClassName={c.activeLink}>Music</NavLink></div>
            <div className={c.item}><NavLink to={settings} activeClassName={c.activeLink}>Settings</NavLink></div>
            <div className={c.item}><NavLink to={users} activeClassName={c.activeLink}>Users</NavLink></div>
            <Friends  frarr={props.friendsArr}/>
        </nav>
    )
}
export default NavBar;