const Authentification = ({ setShowAuth }) => {


    const handleClick = () => {
        setShowAuth(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const isLoggedIn = true;

    return (
        <div className="auth-box">
            <div className="close" onClick={handleClick}> x </div>
            <h2>{isLoggedIn ? 'Create Account' : 'Log In'}</h2>
            <form onSubmit={handleSubmit}>
                <input> 
                </input>
                

            </form>
        </div>
    )
}

export default Authentification;