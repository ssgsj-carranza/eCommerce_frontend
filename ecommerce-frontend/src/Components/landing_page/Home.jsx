import React, {Component} from 'react';
import './Home.css';
import '../header/Header.css';
import Seller from '../Seller/Seller';
import Buyer from '../Buyer/Buyer';
import UnknownUser from '../unknownUserHome/unknownUser'
import axios from 'axios';

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            loggedIn: false,
            user: null,
        }
    }

    async getCurrentUser(){
        try{
            const jwt = localStorage.getItem('token');
            const response = await axios.get('https://localhost:44394/api/examples/user', {headers: {Authorization: 'Bearer ' + jwt}});
            console.log(response.data);
            
            if(response.status === 200){
                this.setState({user: response.data, loggedIn:true});
            }
            else{
                this.setState({user: null, loggedIn: false})
            }
        }
        catch(ex){
            console.log("exception", ex);
        }
    }

    componentDidMount(){
        this.getCurrentUser();
    }
    
    render(){
        const user = this.state.user;
        if(user){//If they are logged in
            if(user.isBuyer){//If they are a buyer
                console.log('buyer')
                return (
                    <div className='bg'>
                    <Buyer user={user}/>
                    </div>
                );
            }
            else{//If they are a seller
                console.log('seller')
                return (
                    <div className="bg">
                    <Seller user={user}/>
                    </div>
                )
            }
        }
        else{//If they are not logged in.
            console.log('anonymous')
            return (
                <div className="bg">
                <UnknownUser />
                </div>
            )
        }
    }
}
export default Home;



// import React, {useEffect, useState} from 'react';
// import './Home.css';
// import '../header/Header.css';
// import Seller from '../Seller/Seller';
// import Buyer from '../Buyer/Buyer';
// import UnknownUser from '../unknownUserHome/unknownUser'
// import axios from 'axios';
// const Home = () => {




//     const [user,setUser] = useState();


//     async function getCurrentUser(){
//         try{
//             const jwt = localStorage.getItem('token');
//             const response = await axios.get('https://localhost:44394/api/examples/user', {headers: {Authorization: 'Bearer ' + jwt}});
//             console.log(response.data);
            
//             if(response.status === 200){
//                 setUser(response.data);
//             }
//             setUser(null);
//         }
//         catch(ex){
//             console.log("exception", ex);
//         }
//     }
//     console.log(user, 'StatefulVariable')
//     if(user){//If they are logged in
//         if(user.isBuyer){//If they are a buyer
//             return (
//                 <Buyer user={user}/>
//             );
//         }
//         else{//If they are a seller
//             return (
//                 <Seller user={user}/>
//             )
//         }
//     }
//     else{//If they are not logged in.
//         return (
//             <UnknownUser />
//         )
//     }
// }
// export default Home;