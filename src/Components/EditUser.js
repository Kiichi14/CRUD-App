import { useState } from "react";
import React from 'react';

const EditUser = (props) => {

    //State
    const [stateEdit, setStateEdit] = useState(props.userinfo);

    //Méthode

    const userList = props.userlist;
    const updateUser = props.updateuser;

    let name, value;
    
    const handleEditing = (event) => {
        name = event.target.name;
        value = event.target.value;
        setStateEdit({...stateEdit, [name]: value});
    }

    const handleSendEdit = (event) => {
        event.preventDefault();
        name = event.target.name;
        value = event.target.value;

        userList.map((list) => {
            if(list.id === stateEdit.editid) {
                updateUser(prevValue => [...prevValue].map(el => 
                    el.id === stateEdit.editid ? ({...el, name: stateEdit.name, username: stateEdit.username}) : el))
            } else {
                return list
            }
        })
    }

    //ReRender
    return (
        <form action="submit" onSubmit={(event) => handleSendEdit(event)}>
            <label for="nom">Prénom</label>
            <input name="name" value={stateEdit.name} onChange={handleEditing} type="text"></input>
            <label for="pseudo">Nom d'utilisateur</label>
            <input name="username" value={stateEdit.username} onChange={handleEditing} type="text"></input>
            <button>Edit User</button> <button onClick={props.handlecancel}>Exit</button>
        </form>
    );
};

export default EditUser;