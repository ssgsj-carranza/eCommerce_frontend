import React, {useState} from 'react';
import './Home.css';
import Header from '../header/Header';
import '../header/Header.css';
import Seller from '../Seller/Seller';
import { getCurrentUser } from '../services/Service';
import Buyer from '../Buyer/Buyer';
import UnknownUser from '../unknownUserHome/unknownUser'
const Home = () => {
    let getUser = getCurrentUser();
    // getUser = Promise.resolve
    console.log(getUser, 'Goteem');
    const [user,setUser] = useState(getUser);
    console.log(user, 'StatefulVariable')//AUTHENTICATION DOES NOT WORK BECAUSE IT IS A PROMISE. USE BETTER CONDITIONA:
    if(user){//If they are logged in
        if(user.isBuyer){//If they are a buyer
            return (
                <Buyer user={user}/>
            );
        }
        else{//If they are a seller
            return (
                <Seller user={user}/>
            )
        }
    }
    else{//If they are not logged in.
        return (
            <UnknownUser />
        )
    }
}
export default Home;
