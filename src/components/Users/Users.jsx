import c from './Users.module.css';
import {addUserAC} from "../../Redux/users-reduce";

const Users = (props)=>{

    let addUser = ()=>{
        props.addNewUser();
    }

    return(

        <div >
            <div><h3>Список пользователей</h3></div>
            <div className={c.btn} onClick={addUser}>Добавить юзера</div>
            <div className={c.wrap} >
                {props.state}
            </div>

        </div>
    )
}

export default Users;