import { Form, Field } from 'react-final-form'

const Login = (props)=>{

    const onSubmit = (e)=>{
        console.log(e)
    }
    const validate = (e)=>{
        const errors = {};
        if(e.bio && e.bio.length < 5){
            errors.bio = 'too short';
        }
    }
    return (
        <div>

            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <h2>Залогинься блэт</h2>
                        <div>
                            <label>First Name</label>
                            <Field name="firstName" component="input" placeholder="First Name" />
                        </div>
                        <div>
                            <Field
                                name="bio"
                                render={({ input, meta }) => (
                                    <div>
                                        <label>Bio</label>
                                        <textarea {...input} />
                                        {meta.touched && meta.error && <div>{meta.error}</div>}
                                    </div>
                                )}
                            />
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                    )}
            />
        </div>
    )
}

export default Login;