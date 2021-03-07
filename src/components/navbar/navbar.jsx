import c from './navbar.module.css';

const NavBar = ()=>{
    let profile = '/profile';
    let dialogs = '/dialogs';
    let news = '/news';
    let music = '/music';
    let settings = '/settings';
    return (
        <nav className={c.nav}>
            <div><a href={profile}>Profile</a></div>
            <div><a href={dialogs}>Messages</a></div>
            <div><a href={news}>News</a></div>
            <div><a href={music}>Music</a></div>
            <div><a href={settings}>Settings</a></div>
        </nav>
    )
}
export default NavBar;