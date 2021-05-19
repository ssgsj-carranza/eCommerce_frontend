import axios from 'axios';
import React, {useState} from 'react';
import { Redirect } from 'react-router';
import UserForm from '../forms/Form';
import {registerUser} from '../services/Service'
import LoginScreen from '../login_screen/LoginScreen'
import { FormInput } from 'semantic-ui-react';
import { RegistrationForm } from '../forms/RegisterUser'

export const RegisterScreen = () => {
    const [newUser, setNewUser] = RegistrationForm({FirstName:'', LastName:'', Address:'', Email:'', Password:'', isBuyer:false})
    
    return (
        <form>
            <label>
                First Name:
                <input
                    type="text"
                    name="FirstName"
                    value={newUser.FirstName}
                    onChange={setNewUser}
                    placeholder='Enter your first name'
                />
                <br />
                Last Name:
                <input
                    type="text"
                    name="LastName"
                    value={newUser.Lastname}
                    onChange={setNewUser}
                    placeholder='Enter your last name'
                />
                <br />
                Address:
                <input
                    type="text"
                    name="Address"
                    value={newUser.Address}
                    onChange={setNewUser}
                    placeholder='Enter your Address'
                />
                <br />
                Email:
                <input
                    type="email"
                    name="Email"
                    value={newUser.Email}
                    onChange={setNewUser}
                    placeholder='Enter your email'
                />
                <br />
                Password:
                <input
                    type="password"
                    name="Password"
                    value={newUser.Password}
                    onChange={setNewUser}
                />
                <br />
                Is a Buyer account:
                <input  
                    type="checkbox"
                    value={newUser.isBuyer}
                    onChange={setNewUser}
                />
                <br />
            </label>
            <button onClick={async() => registerUser(newUser)}>
                Register
            </button>
        </form>
    );
}
