import { useState } from "react";
import React from 'react';


const AddUser = ({user, updating}) => {

 //State
const [newEntries, setNewEntries] = useState([]);

//Méthodes
const handleNew = (event) => {
    setNewEntries({...newEntries, id:new Date().getTime(), [event.target.name]: event.target.value});
}

const handleAdd = (event) => {
    event.preventDefault();
    const newEntriesCopy = [...user];
    newEntriesCopy.push({...newEntries, id:new Date().getTime(), [event.target.name]: event.target.value});
    updating(newEntriesCopy);
}

//ReRender


    return (
        <form action="submit" onSubmit={handleAdd}>
            <label for="nom">Prénom</label>
            <input type="text" name="name" onChange={handleNew}></input>
            <label for="pseudo">Nom d'utilisateur</label>
            <input type="text" name="username" onChange={handleNew}></input>
            <button>Add new user</button>
        </form>
    );
};

export default AddUser;