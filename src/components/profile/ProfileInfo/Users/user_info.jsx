import Status from "./status";

const User_info = (props)=>{
    return (
        <div>
            <Status status={props.state.status}/>
            <p>{props.state.profile.fullName}</p>
            <p>{props.state.profile.lookingForAJobDescription}</p>

        </div>
    )
}
export default User_info;