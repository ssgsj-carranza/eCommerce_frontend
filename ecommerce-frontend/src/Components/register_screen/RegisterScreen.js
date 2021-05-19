import axios from 'axios';
import React, {useState} from 'react';
import { Redirect } from 'react-router';
import UserForm from '../form/Form';
import {registerUser} from '../services/Service'
import LoginScreen from '../login_screen/LoginScreen'

const RegisterScreen = () => {
    // const [userInfo, setUserInfo] = useState('user');
    // setUserInfo('user_change');
    // console.log(userInfo);

    const {loginValues, handleChange, handleSubmit} = UserForm(registerUser);
    async function registerUser(registerObj){
        registerUser(registerObj);
        console.log(registerObj, 'RegisterUSerFunction');
        return(
            <Redirect  path='/login' component={LoginScreen} />);
        
    }
    
    return (
    <div>
        <p>Hello World</p>
        
    </div>

    );
}
export default RegisterScreen;