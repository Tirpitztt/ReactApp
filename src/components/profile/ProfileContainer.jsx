import Profile from "./profile";
import {addPostActionCreator, checkTextActionCreator} from "../../Redux/profile-reduce";
import PostElement from "./Posts/Post/PostElement/PostElement";
import {connect} from "react-redux";






let mapStateToProps = (state)=>{
    let res = state.profilePage.posts.map(post => <PostElement name={state.navBar.users[post.user-1].name} message={post.post} like={post.likes}
                                                               avaurl={state.navBar.users[post.user-1].avaurl} key={post.id+Math.random()}/>);
    function getUserAva(id){
        state.navBar.users.forEach(function (item){
            if(item.id===id){
                return item.avaurl;
            }
        })
    }

    return {
        user:state.navBar.user,
        postArr:res,
        cht:state.profilePage.checkedText
    }
}

let mapDispatchToProps = (dispatch)=>{

    return {
        addP:()=>{
            dispatch(addPostActionCreator());
        },
        txtCh:(text)=>{
            dispatch(checkTextActionCreator(text));
        }
    }
}

const ProfileContainer = connect(mapStateToProps,mapDispatchToProps) (Profile);

export default ProfileContainer;