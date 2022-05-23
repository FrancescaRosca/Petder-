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

    const [newPet, setNewPet] = useState("")

    const handleChange = (event) => {
        setNewPet(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPets = {petName: newPet, petType: "", image: images.push()}
        setPets((prevPets) => [...prevPets, newPets])
    }

    return (
        <div className="pets-container">
        <Header />
            <h1>Add a new pet</h1>
            <form onSubmit={handleSubmit}>
                <label>Pet Name</label>
                <input value={initialPets.petName} onChange={(e) => handleChange(e)}/>

                <label>Pet Type</label>
                <input value={initialPets.petType} onChange={(e) => handleChange(e)}/>

                <label>Pet Photo</label>
                <input value={initialPets.image} onChange={(e) => handleChange(e)}/>


                <button className="add-button" type="submit">Add</button>
            </form>
            
            <div className="pet-container">
                {pets.map((element) => {
                    return(
                        <div className="pet-display" key={element}>
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