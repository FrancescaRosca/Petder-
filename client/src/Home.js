import Header from "./Header";
import { Link } from 'react-router-dom';



const Home = () => {

    const handleClick = () => {
        console.log("clicked!");
    }
    return (
        
        <div className="overlay">
        <Header />
            <div className="home">
                <h1 className="title">Give true love a chance!  </h1>
                <Link to="/createaccount">
                <button className="primary-button" onClick={handleClick}>
                    CREATE ACCOUNT
                </button>
                </Link>
                <Link to="/addpets">
                <button className="primary-button" onClick={handleClick}>
                    ADD PETS
                </button>
                </Link>
                

            

            </div>
        </div>
    )
}

export default Home;