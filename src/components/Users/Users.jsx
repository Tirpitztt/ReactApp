import c from './Users.module.css';
import User from "./User/User";


const Users = (props)=>{

    let flw = (id,flag)=>{
        props.followChange(id,flag);
    }


    let usersArr = props.state.users.users.map(us => (<User key={us.id + Math.random()} avaurl={us.avaurl} name={us.name} status={us.status}
                                                location={us.location} follow={us.followed} userId={us.id} flw={flw} 
                                                isFetch={props.state.users.followProgress} />))

    
    let addUser = ()=>{
        props.addNewUser();
    }
    let countPage = Math.ceil(props.state.users.totalCountUsers/props.state.users.pageSize);
    let paginationArr = [];
    let paginationArrRes = [];
    for(let i = 1;i<=countPage;i++){
        paginationArr.push(i);
    }
    for(let i =1;i<=paginationArr.length;i++){
        if(i===props.state.users.currentPage){
            if(i<3){
                paginationArrRes.push(i,i+1,i+2,i+3,i+4,i+5,i+6);
            }else if(i>3){
                paginationArrRes.push(i-3,i-2,i-1,i,i+1,i+2,i+3);
            }
            }
    }

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
            <div className={c.pagin_wrap}>{paginationArrRes.map(page => <span className={props.state.users.currentPage===page?c.active:undefined} onClick={()=> {setCP(page)}}>{page}</span>)}</div>
        </div>
    )
}

export default Users;