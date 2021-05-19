import {loginService} from '../services/Service';
import UserForm from '../form/Form';
import {Segment, Button, Label, Form, FormInput} from 'semantic-ui-react';

const LoginScreen = () => {
    const {formValues, handleChange, handleSubmit} = UserForm(loginUser, {username:'', password:''});
    async function loginUser(loginObj) {
        try{
            const response = await loginService(loginObj);
            localStorage.setItem('token', response.token);
            window.location = '/';
        }
        catch(ex){
            if(ex.response && ex.response.status === 400){

            }
        }
    }

    return (
        <Segment>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
            <Label>Username</Label>
            <Form.Input type="text" name='username' onChange={handleChange} value ={formValues.username} required = {true}></Form.Input>
            <Label>Password</Label>
            <FormInput type= 'password' name='password' onChange={handleChange} value={formValues.password} required={true}></FormInput>
            <Button color='green' type='submit'>Submit</Button>
            </Form>
        </Segment>
    )
}
export default LoginScreen;
