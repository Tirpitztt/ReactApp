import c from './Dialogs.module.css';
import TextAr from "./TextAr/TextAr";

const Dialogs = (props)=>{
 return (
        <div className={c.dialogs}>
            <div className={c.dialogs_items}>
                {props.dialogArr}
            </div>
            <div className={c.messages}>
                {props.messageArr}
                <TextAr nmb={props.newMessBody} addMess={props.addMess} checkT={props.checkT} />
            </div>

        </div>
    )
}
export default Dialogs;