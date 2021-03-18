import Users from './Users';
import {connect} from "react-redux";
import User from "./User/User";
import {addNewUser, followCh, setFetching, setCurrentPage, setTotalCount, setUsers} from "../../Redux/users-reduce";
import UsersClas from "./User/UsersClas";


let mapStateToProps = (state)=>{

    return {
        state:state
    }
}

export const UsersContainer = connect(mapStateToProps,{addNewUser,followCh,setUsers,setTotalCount,setCurrentPage,setFetching})(UsersClas)
