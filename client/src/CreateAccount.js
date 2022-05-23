import Header from "./Header";


const CreateAccount = () => {
    return (
        <div>
            <Header />    
            <div className="create-account">
                <h2 className="titleaccount">CREATE ACCOUNT</h2>

                <form>
                    <section>
                        <label>First Name</label>
                        <input id="first_name" type="text" name="second_name" placeholder= "Second Name" required={true} value={""}>
                        </input>

                        <label>Second Name</label>
                        <input id="second_name" type="text" name="first_name" placeholder= "First Name" required={true} value={""}>
                        </input>  

                        <label>Birthday</label>
                        <input id="dob" type="number" name="dob" placeholder= "DD" required={true} value={""}>
                        </input>

                        <input id="mob" type="number" name="mob" placeholder= "MM" required={true} value={""}>
                        </input>

                        <input id="yob" type="number" name="yob" placeholder= "YYYY" required={true} value={""}>
                        </input>

                        <label>E-mail</label>
                        <input id="e_mail" type="text" name="e_mail" placeholder= "e-Mail" required={true} value={""}>
                        </input> 

                        <label>User Type</label>
                        <div className="user_type">
                            <input id="shelter_type" type="radio" name="user_type" value="Shelter">
                            </input> 
                            <label>Shelter</label>

                            <input id="adopter_type" type="radio" name="user_type" value="Adopter">
                            </input> 
                            <label>Adopter</label>
                        </div>

                        <label>Show Me</label>
                        <div className="show_me">
                            <input id="dogs_type" type="radio" name="dogs_type" value="dogs">
                            </input> 
                            <label>Dogs</label>

                            <input id="cats_type" type="radio" name="cats_type" value="cats">
                            </input> 
                            <label>Cats</label>

                            <input id="birds_type" type="radio" name="birds_type" value="birds">
                            </input> 
                            <label>Birds</label>

                            <input id="other_type" type="radio" name="other_type" value="other">
                            </input> 
                            <label>Other</label>
                        </div>

                        <input type="submit"> 
                        </input>

                    </section>
                </form>
            </div>
        </div>
    )
}

export default CreateAccount;