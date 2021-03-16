import Users from './Users';
import {connect} from "react-redux";
import User from "./User/User";


let mapStateToProps = (state)=>{
    let usersArr = state.users.map(us => (<User avaurl={us.avaurl} name={us.name} status={us.status}
    location={us.location}/>))
    return {
        state:usersArr
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {

    }
}
export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
