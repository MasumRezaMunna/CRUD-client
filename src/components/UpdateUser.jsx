import React from "react";
import { useLoaderData } from "react-router";

const UpdateUser = () => {
  const user = useLoaderData();
  console.log(user);

  const handleUpdateUser = (e) =>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
    const updateUser = {name, email}
    fetch(``, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log('after update', data)
    })
  }

  return (
    <div>
      <h2> Edit a user</h2>
      <form onSubmit={handleUpdateUser} action="">
        <input type="text" name="name" defaultValue={user.name} />
        <br />
        <input type="email" name="email" defaultValue={user.name}/>
        <br />
        <input type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default UpdateUser;
