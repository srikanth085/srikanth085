// import { useEffect, useState } from "react";
 
// function Crud() {
//   const [users, setUsers] = useState([]);
//   const [formData, setFormData] = useState({ name: "", email: "" });
//   const [editinguser, setEditingUser] = useState(null);
//   const fetctUsers = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     setUsers(data);
//   };
 
//   useEffect(() => {
//     fetctUsers();
//   }, []);
//   const changeHandler = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const adduser = () => {
//     const newUserId = users.length + 1;
//     const newuser = {
//       id: newUserId,
//       name: formData.name,
//       email: formData.email,
//     };
//     setUsers([...users, newuser]);
//     setFormData({ name: "", email: "" });
//   };
//   const deleteuser = (userid) => {
//     setUsers(users.filter((user) => user.id !== userid));
//   };
//   const edituser = (user) => {
//     setEditingUser(user.id);
//     setFormData({ name: user.name, email: user.email });
//   };
//   const saveuser =()=>{
    
//   }
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
     
//       <table style={{ margin: "auto", width: "100%" }}>
//         <thead>
//           <tr>
//             <th style={{ width: "25%", textAlign: "center" }}>srNo</th>
//             <th style={{ width: "25%", textAlign: "center" }}>name</th>
//             <th style={{ width: "25%", textAlign: "center" }}>email</th>
//             <th style={{ width: "25%", textAlign: "center" }}>actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td> {user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>
//                 <>
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "10px",
//                     }}
//                   >
//                     {editinguser === user.id ? (
//                       <>
//                         <button>save</button>
//                         <button
//                           onClick={() => {
//                             setEditingUser(null);
//                           }}
//                         >
//                           cancel
//                         </button>
//                       </>
//                     ) : (
//                       <>
//                         <button
//                           onClick={() => {
//                             edituser(user);
//                           }}
//                         >
//                           edit
//                         </button>
//                         <button onClick={() => deleteuser(user.id)}>
//                           delete
//                         </button>
//                       </>
//                     )}
//                   </div>
//                 </>
//               </td>
//             </tr>
//           ))}
//         </tbody>
 
//         <h3> adding new user</h3>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={changeHandler}
//           />
//         </div>
//         <br />
 
//         <label htmlfor="email">email:</label>
//         <input
//           type="text"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={changeHandler}
//         />
//         <br />
//         <br />
//         {editinguser ? (
//           <button> save</button>
//         ) : (
//           <button onClick={adduser}>Add user</button>
//         )}
//       </table>
//     </div>
//   );
// }
// export default Crud
