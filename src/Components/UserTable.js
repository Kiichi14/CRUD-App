import React from 'react';

const UserTable = (props) => {

    //State



    //Méthodes
    const userID = props.userinfo.id;
    const userName = props.userinfo.name;
    const userPseudo = props.userinfo.username;

    //ReRender
    return (
        <tr>
            <th>{userName}</th>
            <th>{userPseudo}</th>
            <th><button onClick={() => props.handleedit(userID)}>Edit</button> <button onClick={() => props.remove(userID)}>Delete</button></th>
        </tr>
    );
};

export default UserTable;