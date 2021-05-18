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

