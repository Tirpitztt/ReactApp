import c from './header.module.css';
import {NavLink} from "react-router-dom";
import LoginInfo from "../Common/LoginInfo/loginInfo";

const Header = (props)=>{
    return (
        <header className={c.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Pornhub-logo.svg/1024px-Pornhub-logo.svg.png" alt="logo"/>
            <LoginInfo props={props} />
        </header>
    )

}
export  default Header;