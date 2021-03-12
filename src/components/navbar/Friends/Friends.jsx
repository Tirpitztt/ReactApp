import c from './Friends.module.css';
import Friend from "./Friend/Frend";

const Friends = (props)=>{

    let localState = props.state.getState();
    let friendsarr = getFriends(localState.user.id);

    let res = friendsarr.map((f)=> <Friend name={f.name} ava={f.avaurl}/>);

    function getFriends(id){
        let result=[];
        localState.users.forEach((item)=>{
            if(item.friends.includes(id,0)){
                result.push(item);
            }

        })
        return result;
    }

    return(
        <div className={c.wrapfriends}>
            {res};
        </div>
    )
}

export default Friends;