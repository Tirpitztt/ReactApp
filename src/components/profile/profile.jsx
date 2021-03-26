import c from './profile.module.css';
import MyPost from './Posts/myPost'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostElement from "./Posts/Post/PostElement/PostElement";



const Profile = (props)=>{

    let res = props.state.profilePage.posts.map(post => <PostElement name={props.state.navBar.users[post.user-1].name} message={post.post} like={post.likes}
                                                               avaurl={props.state.navBar.users[post.user-1].avaurl} key={post.id+Math.random()}/>);
    function getUserAva(id){
        props.state.navBar.users.forEach(function (item){
            if(item.id===id){
                return item.avaurl;
            }
        })
    }

    return (
        <div >
            <div className={c.heat}><img src="https://dbijapkm3o6fj.cloudfront.net/resources/20611,1004,1,6,4,0,960,330/-3842-/20161013141806/image-gallery.jpeg" alt=""/></div>
            <ProfileInfo state={props.state} updateStatus={props.updateStatus} />
            <MyPost
                    cht={props.state.profilePage.checkedText}
                    addP={props.addP}

                    postArr={res}
            />

        </div>
    )
}
export default Profile;