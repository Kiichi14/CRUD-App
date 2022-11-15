import { useState } from 'react'
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import UserTable from "./Components/UserTable";

function App() {
  
  //State
  const [userList, setUserList] = useState([
    {id:1, name:'Etienne', username:"Titi"},
    {id:2, name:'Killian', username:"Kiki"},
    {id:3, name:'Mael', username:"Mimi"},
  ])

  const [editMode, setEditMode] = useState(true);

  const [editFind, setEditFind] = useState();


  //Méthodes
  const handleRemove = (id) => {
    const userListCopy = [...userList];
    const userListUpdate = userListCopy.filter((list) => list.id !== id)
    setUserList(userListUpdate);
  }

  const handleEdit = (id) => {
    setEditMode(false);
    const userListCopy = [...userList];
    const editItem = userListCopy.filter((list) => list.id === id);
    const name = editItem[0].name;
    const username = editItem[0].username;
    const editid = editItem[0].id;
    setEditFind({name, username, editid});
  }

  const handleCancel = (event) => {
    event.preventDefault();
    setEditMode(true);
  }

  //ReRender
  return (
    
    <div className="App">
      <div className="title">
        <h1>CRUD app with Hooks !!</h1>
      </div>

      <section className="container">
        <div className="editUser">
          <h2>Add User</h2>
          {editMode ? <AddUser user={userList} updating={setUserList}/> : <EditUser handlecancel={handleCancel} userinfo={editFind} userlist={userList} updateuser={setUserList}/>}
        </div>

        <div className="listUser">
          <h2>View users</h2>
          <table className="userTable">
            <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {userList.map((Lists) => (
              <UserTable userinfo={Lists} remove={handleRemove} handleedit={handleEdit}/>
            ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}

export default App;
