import Status from "./status";

const User_info = (props)=>{
    return (
        <div>
            <Status status={'status ept'}/>
            <p>{props.state.fullName}</p>
            <p>{props.state.lookingForAJobDescription}</p>

        </div>
    )
}
export default User_info;