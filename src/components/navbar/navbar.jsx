import c from './navbar.module.css';

const NavBar = ()=>{
    let path = '/path';
    return (
        <nav className={c.nav}>
            <div><a href={path}>Profile</a></div>
            <div><a href={path}>Messages</a></div>
            <div><a href={path}>News</a></div>
            <div><a href={path}>Music</a></div>
            <div><a href={path}>Settings</a></div>
        </nav>
    )
}
export default NavBar;