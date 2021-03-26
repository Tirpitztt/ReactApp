import c from './forms.module.css';
import { Form, Field } from 'react-final-form'

const TextAreaForm = (props)=>{
    const nameF = props.nameForm;
    const onSubmit = (e)=>{
        switch (nameF){
           case  "USER_POST":{
               props.addPost(e.USER_POST);
               break;
            }
            case 'MESS_POST':{
                console.log(e);
                props.addMess(e.MESS_POST);
                break;
            }
            default: console.log('this name is invalid')
        }

    }
    const validate = (e)=>{

    }
    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({handleSubmit})=>(
                <form onSubmit={handleSubmit}>
                    <div>Текст сообщения</div>
                    <div>
                        <Field
                            name={nameF}
                            render={({input,meta})=>(
                                <div>
                                    <textarea {...input}></textarea>
                                    <button type='submit'>submit</button>
                                </div>
                            )}
                        />
                    </div>
                </form>
            )}
        />
    )
}

export default TextAreaForm;