const Header = ({setShowAuth}) => {

    const handleClick = () => {
        //now the box can also be seen when the Log In button is clicked
        setShowAuth(true);
    }

    return (

        <nav>
            <div className="logo-container">
                <img className="logo" src="https://www.linkpicture.com/q/PETDER.png" />
            </div>

            <button className="header-button" onClick={handleClick}>
                Log In
            </button>
        </nav>
    )
}

export default Header;