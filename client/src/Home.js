import Header from "./Header";
import CreateAccount from "./CreateAccount";
import { useState } from "react";
import Authentification from "./Authentification";

const Home = () => {

    const [showAuth, setShowAuth] = useState(false);


    //using this so the botton change text when the user is logged in or out
    const authToken = false;

    const handleClick = () => {
        console.log("clicked!");
        //when the botton is clicked it displays the Authentification box
        setShowAuth(true);
    }
    return (
        
        <div className="overlay">
        <Header setShowAuth={setShowAuth}/>
        <div className="home">
            <h1 className="title">Give true love a chance!</h1>
            <button className="primary-button" onClick={handleClick}>
                {authToken ? 'Log Out' : 'Create Account'}
            </button>

            {showAuth && 
                (<Authentification setShowAuth={setShowAuth}/>
            )}

        </div>
        </div>
    )
}

export default Home;