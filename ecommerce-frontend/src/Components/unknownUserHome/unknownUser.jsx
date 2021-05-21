import React from 'react';
import Footer from '../Footer/footer'
import Header from '../header/Header'
const UnknownUser = () =>{
    return(
    <div className="home-body">
        <Header />
        <div className="home">
            <div className="home-container">
                <img className="home-image" src="https://images.unsplash.com/photo-1589985269102-ff38adf6f00d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1348&q=80" alt=''/>
                <h1>Hello round II</h1>
                
            </div>
        </div>
        <Footer />
    </div>
    )
}
export default UnknownUser;