import Profile from "./profile";
import {addPostActionCreator, checkTextActionCreator} from "../../Redux/profile-reduce";
import PostElement from "./Posts/Post/PostElement/PostElement";


const ProfileContainer = (props)=>{
    let state = props.state.getState();
    let user = state.navBar.user;
    let checkedText = state.profilePage.checkedText;
    let addPost = ()=>{
        let action = addPostActionCreator();
        props.state.dispatch(action);
    }
    let textChange = (text)=>{
        let action = checkTextActionCreator(text);
        props.state.dispatch(action);
    }
    let res = state.profilePage.posts.map(post => <PostElement name={state.navBar.users[post.user-1].name} message={post.post} like={post.likes}
                                                                  avaurl={state.navBar.users[post.user-1].avaurl} key={post.id+Math.random()}/>);
    function getUserAva(id){
        state.navBar.users.forEach(function (item){
            if(item.id===id){
                return item.avaurl;
            }
        })
    }


    return <Profile user={user} cht={checkedText} addP={addPost} txtCh={textChange} postArr={res}/>
}

export default ProfileContainer;