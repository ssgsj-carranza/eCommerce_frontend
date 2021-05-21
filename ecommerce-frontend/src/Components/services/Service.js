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

export async function getCurrentUser(){
    try{
        const jwt = localStorage.getItem('token');
        const response = await axios.get('https://localhost:44394/api/examples/user', {headers: {Authorization: 'Bearer ' + jwt}});
        console.log(response.data);
        
        if(response.status === 200){
            return response.data;
        }
        return null;
    }
    catch(ex){
        console.log("exception", ex);
    }
}

export async function getProduct(){
    const response = await axios.get(`${apiEndpoint}/products/`);
    return(response.data)
}

// export async function get(api){
//     try {
//         const response = await axios.get(`${apiEndpoint}/${api}`);
//         if (response.status === 201){
//             console.log('Grabbed Data Successfully');
//             return response.data;
//         }
//     }
//     catch(ex){
//         console.log('Error');
//         throw(ex);
//     }
// }

export async function postProduct(product){ 
    const response = await axios.post(`${apiEndpoint}/products`, product);
    if (response.status === 201){
        console.log('Product Posted');
        return response.data;
    }
}

export async function postReview(review){
    const response = await axios.post(`${apiEndpoint}/review`, review);
    if (response.status === 201){
        console.log('Review Posted');
        return response.data;
    }
}