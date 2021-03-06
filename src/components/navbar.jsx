const NavBar = ()=>{
    let path = '/path';
    return (
        <nav className='nav'>
            <div><a href={path}>Profile</a></div>
            <div><a href="#">Messages</a></div>
            <div><a href="#">News</a></div>
            <div><a href="#">Music</a></div>
            <div><a href="#">Settings</a></div>
        </nav>
    )
}
export default NavBar;