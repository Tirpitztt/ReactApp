import c from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props)=>{
    return (
        <header className={c.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Pornhub-logo.svg/1024px-Pornhub-logo.svg.png" alt="logo"/>
                  <div className={c.loginBlock}>{props.auth?<NavLink to={'/profile/'+props.userId}>{props.login} </NavLink>:<NavLink to={'/login'}>Log in </NavLink>}
            </div>
        </header>
    )

}
export  default Header;