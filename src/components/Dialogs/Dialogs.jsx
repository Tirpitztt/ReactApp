import c from './Dialogs.module.css';

import TextAreaForm from "../Common/Forms/textareaForm";

const Dialogs = (props)=>{
 const nameForm = 'MESS_POST'
 return (
        <div className={c.dialogs}>
            <div className={c.dialogs_items}>
                {props.dialogArr}
            </div>
            <div className={c.messages}>
                {props.messageArr}

                <TextAreaForm nameForm={nameForm} addMess={props.addMess}/>
            </div>

        </div>
    )
}
export default Dialogs;