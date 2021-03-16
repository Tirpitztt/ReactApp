import Users from './Users';
import {connect} from "react-redux";
import User from "./User/User";
import {addUserAC, followAC, setUsers} from "../../Redux/users-reduce";
import UsersClas from "./User/UsersClas";


let mapStateToProps = (state)=>{

    return {
        state:state
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        addNewUser:()=>{
            dispatch(addUserAC());
        },
        followCh:(id)=>{
            dispatch(followAC(id))
        },
        setUsers:(users)=>{
            dispatch(setUsers(users))
        }
    }
}
export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersClas)
