import c from './forms.module.css';
import { Form, Field } from 'react-final-form'


const StatusForm = (props)=>{
    const onSubmit = (e)=>{
        props.upStatus(e);
    }
    const validate = (e)=>{

    }

    return (
        <div>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({handleSubmit})=>(
                    <form onSubmit={handleSubmit}>
                        <Field name='status' component="input" />
                        <button type='submit'>save</button>
                    </form>
                )}

            />
      </div>
    )
}

export default StatusForm;