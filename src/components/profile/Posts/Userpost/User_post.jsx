import c from './user_post.module.css';
import * as React from "react";
import TextAreaForm from "../../../Common/Forms/textareaForm";

const User_post = (props)=>{
    const nameForm = 'USER_POST';


return (

            <TextAreaForm addPost={props.addP} nameForm={nameForm}/>


    )
}

export default User_post;