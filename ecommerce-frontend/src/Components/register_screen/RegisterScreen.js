import React, { useState } from 'react';
// import { Redirect } from 'react-router';
import { registerService } from '../services/Service'
// import LoginScreen from '../login_screen/LoginScreen'
import {Form, Label, Button, FormInput } from 'semantic-ui-react';
import { RegistrationForm } from '../forms/RegisterUser'
import { Redirect } from 'react-router';

// BOOL IS NOT WORKING :(

export const RegisterScreen = () => {
    const [newUser, setNewUser] = RegistrationForm({UserName:'', FirstName:'', LastName:'', Address:'', Email:'', Password:'', isBuyer:false});

    const handleCheckbox = () => {
    return newUser.isBuyer=!newUser.isBuyer;
    }

    const registerUser = (newUser) => {
        registerService(newUser);
        <Redirect path='/' /> 
    }

    return (
        <Form>
            <Label>
                Username:
                <FormInput
                    type="text"
                    name="UserName"
                    value={newUser.UserName}
                    onChange={setNewUser}
                    placeholder='Enter your Username'
                />
                <br />
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
                Password (don't be lazy, it needs to be at least 8 chartacters):
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
                    onChange={handleCheckbox}
                />
                <br />
            </Label>
            <Button primary color="blue" onClick={async() => registerUser(newUser)}>
                Register
            </Button>
        </Form>
    );
}
