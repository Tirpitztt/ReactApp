import c from './Users.module.css';
import User from "./User/User";


const Users = (props)=>{



    let flw = (id)=>{
        props.followCh(id);
    }

    let userID = props.state.navBar.user.id;
    let usersArr = props.state.users.users.map(us => (<User key={us.id + Math.random()} avaurl={us.avaurl} name={us.name} status={us.status}
                                                location={us.location} follow={isFollow(us.friends)} userId={us.id} flw={flw}/>))

    function isFollow(arr){
        let flag = false;
        arr.forEach(item =>{
            if(item === userID){flag = true;}
        })
        return flag;
    }
    let addUser = ()=>{
        props.addNewUser();
    }
    let countPage = props.state.users.totalCountUsers/props.state.users.pageSize;
    let paginationArr = [];
    for(let i = 1;i<=countPage;i++){
        paginationArr.push(i);
    }
    console.log(props.state.users.totalCountUsers);
    let setCP = (num)=>{
        props.sCP(num);
    }
    return(

        <div >
            <div><h3>Список пользователей</h3></div>
            <div className={c.btn} onClick={addUser}>Добавить юзера</div>
            <div className={c.wrap} >
                {usersArr}
            </div>
            <div className={c.pagin_wrap}>{paginationArr.map(page => <span className={props.state.users.currentPage===page?c.active:undefined} onClick={()=> {setCP(page)}}>{page}</span>)}</div>
        </div>
    )
}

export default Users;