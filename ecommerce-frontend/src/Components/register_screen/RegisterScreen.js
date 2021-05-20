import axios from 'axios';
import React, {useState} from 'react';
import { Redirect } from 'react-router';
import UserForm from '../forms/Form';
import {registerService} from '../services/Service'
import LoginScreen from '../login_screen/LoginScreen'
import {Form, Label, Button, FormInput } from 'semantic-ui-react';
import { RegistrationForm } from '../forms/RegisterUser'

export const RegisterScreen = () => {
    const [newUser, setNewUser] = RegistrationForm({FirstName:'', LastName:'', Address:'', Email:'', Password:'', isBuyer:false})
    console.log(newUser, 'on Render')
    const register = (input) =>{
        console.log(input, 'register check')
        registerService(input);
        console.log(newUser, 'Test')
    }
    
    return (
        <Form>
            <Label>
                First Name:
                <FormInput
                    type="text"
                    name="FirstName"
                    value={newUser.FirstName}
                    onChange={setNewUser}
                    placeholder='Enter your first name'
                />
                <br />
                Last Name:
                <FormInput
                    type="text"
                    name="LastName"
                    value={newUser.Lastname}
                    onChange={setNewUser}
                    placeholder='Enter your last name'
                />
                <br />
                Address:
                <FormInput
                    type="text"
                    name="Address"
                    value={newUser.Address}
                    onChange={setNewUser}
                    placeholder='Enter your Address'
                />
                <br />
                Email:
                <FormInput
                    type="email"
                    name="Email"
                    value={newUser.Email}
                    onChange={setNewUser}
                    placeholder='Enter your email'
                />
                <br />
                Password:
                <FormInput
                    type="password"
                    name="Password"
                    value={newUser.Password}
                    onChange={setNewUser}
                />
                <br />
                Register as a Buyer:
                <FormInput 
                    type="checkbox"
                    name="isBuyer"
                    value={newUser.isBuyer}
                    onChange={setNewUser}
                />
                <br />
            </Label>
            <Button primary color="blue" onClick={async() => register(newUser)}>Register</Button>
                
        </Form>
    );
}
