import React, { useState } from 'react';

function UserForm() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const userChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <div>
      <div className="container">
        <div className="form-control w-50">
          <h2>Register Form</h2>
          <div className="p-3 d-flex justify-content-center flex-column">
            <label htmlFor="name">Name</label>
            <input
              className="m-1 p-1 form-control"
              type="text"
              value={user}
              id="name"
              name="name"
              placeholder="Enter Name"
              onChange={userChange}
              
            />

            <label className="" htmlFor="email">Email</label>
            <input
              className="m-1 p-1 form-control"
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              onChange={userChange}

            />
          </div>

          <div className="ml-1">
            <label className="" htmlFor="password">Password</label>
            <input
              className="m-1 p-1 form-control"
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              onChange={userChange}

            />
          </div>

          <button className="btn btn-primary" onClick={()=>
            {
                console.log("Name",user)
                console.log("Email" ,email);
                console.log("Password" ,password)

            }
          }>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default UserForm;
  