import c from './navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const NavBar = (props)=>{
    let profile = '/profile';
    let dialogs = '/dialogs';
    let news = '/news';
    let music = '/music';
    let settings = '/settings';


    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to={profile} activeClassName={c.activeLink}>Profile</NavLink></div>
            <div className={c.item}>
                <NavLink to={dialogs} activeClassName={c.activeLink}>Messages</NavLink></div>
            <div className={c.item}><NavLink to={news} activeClassName={c.activeLink}>News</NavLink></div>
            <div  className={c.item}><NavLink to={music} activeClassName={c.activeLink}>Music</NavLink></div>
            <div className={c.item}><NavLink to={settings} activeClassName={c.activeLink}>Settings</NavLink></div>
            <Friends state={props.state}/>
        </nav>
    )
}
export default NavBar;