import c from './Users.module.css';

const Users = (props)=>{

    return(

        <div >
            <div><h3>Список пользователей</h3></div>
            <div className={c.wrap} >
                {props.state}
            </div>

        </div>
    )
}

export default Users;