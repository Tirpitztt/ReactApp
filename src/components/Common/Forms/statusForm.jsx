import c from './forms.module.css';
import { Form, Field } from 'react-final-form'


const StatusForm = (props)=>{
    const onSubmit = (e)=>{

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


            <input onChange={this.changeStatus.bind(this)}
                    type="text"
                    value={this.state.status}/>
            <button className={c.butt} onClick={this.updateStatus.bind(this)}>save</button>

        </div>
    )
}

export default StatusForm;