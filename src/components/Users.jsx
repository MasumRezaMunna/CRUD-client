import React, { use, useState } from "react";
import { data } from "react-router";

const Users = ({usersPromise}) => {

    const initialUsers = use(usersPromise);
    const [users, setUsers] = useState(initialUsers)

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);

    const newUser = { name, email };

    // save this user data to the database
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after saving user", data);
      });
    if (data.insertedId) {
        newUser._id = data.insertedId
        const newUsers = [...users, newUser];
        setUsers(newUsers);
      alert("users added successfully");
      e.target.reset();
    }
  };
  return (
    <div>
      <form onSubmit={handleAddUser} action="">
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>
      <p>-----------------</p>
      <div>
        {
            users.map(user => <p key={user._id}>
                {user.name} : {user.email}
                <button>X</button>
                </p>)
        }
      </div>
    </div>
  );
};

export default Users;
