import {connect} from "react-redux";
import NavBar from "./navbar";
import Friend from "./Friends/Friend/Frend";

let mapStateToProps = (state)=>{
    let friendsarr = getFriends(state.navBar.user.id);

    let res = friendsarr.map((f)=> <Friend name={f.name} ava={f.avaurl}/>);

    function getFriends(id){
        let result=[];
        state.navBar.users.forEach((item)=>{
            if(item.friends.includes(id,0)){
                result.push(item);
            }

        })
        return result;
    }
    return{
        friendsArr:res
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {

    }
}

const NavBarContainer = connect(mapStateToProps,mapDispatchToProps)(NavBar);

export default NavBarContainer;