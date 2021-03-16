import Users from './Users';
import {connect} from "react-redux";
import User from "./User/User";
import {addUserAC} from "../../Redux/users-reduce";


let mapStateToProps = (state)=>{
    let userID = state.navBar.user.id;
    let usersArr = state.users.map(us => (<User key={us.id + Math.random()} avaurl={us.avaurl} name={us.name} status={us.status}
    location={us.location} follow={isFollow(us.friends)}/>))

    function isFollow(arr){
        let flag = false;
        arr.forEach(item =>{
            if(item === userID){flag = true;}
        })
       return flag;
    }
    return {
        state:usersArr
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        addNewUser:()=>{
            dispatch(addUserAC());
        }
    }
}
export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
