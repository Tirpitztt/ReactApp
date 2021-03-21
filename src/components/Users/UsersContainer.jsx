import Users from './Users';
import {connect} from "react-redux";
import User from "./User/User";
import {addNewUser, setUserFollow, setFetching, setCurrentPage, setTotalCount, setUsers,followingProgress} from "../../Redux/users-reduce";
import UsersClas from "./User/UsersClas";


let mapStateToProps = (state)=>{

    return {
        state:state
    }
}

export const UsersContainer = connect(mapStateToProps,
    {addNewUser,setUserFollow,setUsers,setTotalCount,setCurrentPage,setFetching,followingProgress})(UsersClas)
