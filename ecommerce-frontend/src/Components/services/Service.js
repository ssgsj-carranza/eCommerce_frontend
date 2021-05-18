import axios from 'axios';

const apiEndpoint = 'https://localhost:44394/api';

export async function registerService(user){
    try{
        const response = await axios.post(apiEndpoint + '/authentication', user);
        if (response.status === 201){
            console.log('You are registered');
            return response.data;
        }
    }
    catch(ex){
        console.log('Error', ex);
        throw ex;
    }
}

export async function loginService(login){
    try {
        const response = await axios.post(apiEndpoint + '/authentication/login', login);
        console.log("You are logged in");
        return response.data;
    }
    catch(ex){
        console.log("Error");
        throw ex;
    }
}