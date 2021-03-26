import c from './forms.module.css';
import { Form, Field } from 'react-final-form'

const TextAreaForm = (props)=>{
    const nameF = props.nameForm;
    const onSubmit = (e)=>{
        props.addPost(e.USER_POST);
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