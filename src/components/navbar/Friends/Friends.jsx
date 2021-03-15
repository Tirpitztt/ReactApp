import c from './Friends.module.css';
import Friend from "./Friend/Frend";

const Friends = (props)=>{




    return(
        <div className={c.wrapfriends}>
            {props.frarr};
        </div>
    )
}

export default Friends;