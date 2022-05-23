import React, { useState } from "react";
import images from "./PetImages";
import Header from "./Header";

const AddNewPets = () => {

    const initialPets = [
        { petName: "Jack",
        petType: "Dog",
        image: images[0] },
        { petName: "Piggy",
        petType: "Other",
        image: images[1]},
        { petName: "Salem",
        petType: "Cat",
        image: images[2]},
        { petName: "Jack",
        petType: "Bird",
        image: images[3]},
        { petName: "Alice",
        petType: "Other",
        image: images[4]},
        { petName: "Shib",
        petType: "Dog",
        image: images[5]}
    ]

    const [pets, setPets] = useState(initialPets)

    const initialPetState = {petName: "", petType: "", image: ""}
    const [newPet, setNewPet] = useState(initialPetState)

    const handleChange = (event) => {
        console.log(event.target.name)
        setNewPet(state => ({...state, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setPets((prevPets) => [...prevPets, newPet])
        setNewPet(initialPetState)
    }

    return (
        <div className="pets-container">
        <Header />
            <h1>Add a new pet</h1>
            <form onSubmit={handleSubmit}>
                <label>Pet Name</label>
                <input value={newPet.petName} name="petName" onChange={(e) => handleChange(e)}/>

                <label>Pet Type</label>
                <input value={newPet.petType} name="petType" onChange={(e) => handleChange(e)}/>

                <label>Pet Photo</label>
                <input value={newPet.image} name="image" onChange={(e) => handleChange(e)}/>


                <button className="add-button" type="submit">Add</button>
            </form>
            
            <div className="pet-container">
                {pets.map((element, index) => {
                    return(
                        <div className="pet-display" key={index}>
                            <h3>{element.petName}</h3>
                            <p>{element.petType}</p>
                            <img src={element.image} />
                        </div>

                    ) 
                })};
            </div>

        </div>
    )

}

export default AddNewPets;