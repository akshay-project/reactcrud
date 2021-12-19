import React, {useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios'

const Home = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        console.log("Hi!, kaisa hai bro!");
        loadUsers();
    }, [])

    const loadUsers = async () => {
        
        const result = await axios.get("https://try1-5016.herokuapp.com/student");
        setUser(result.data.studentData);
        
        
    };
 const deleteUser=async id =>{

  await axios.delete(`https://try1-5016.herokuapp.com/student/${id}`);
  loadUsers();
 }

    return (
        <div className='container'>
            <h1>Home</h1>
              <table className="table border shadow">
              <thead className="thead-dark"> 
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Contact No</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                user.map((user, index) => (
                  <tr>
                      <th scope="row">{index+1}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.gender}</td>
                      <td>{user.phone}</td>
                      <td>
                        <Link className="btn btn-primary ml-2">View</Link>
                        <Link className="btn btn-outline-primary ml-2" to={`/users/edit/${user._id}`}>Edit</Link>
                        <Link className="btn btn-danger" onClick={() => deleteUser(user._id)}>Delete</Link>
                      </td>
                  </tr>
                ))
                
                }
              </tbody>
            </table>
        </div>
    )
}

export default Home


