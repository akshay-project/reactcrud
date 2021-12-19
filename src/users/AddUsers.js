import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
const AddUsers = () => {
    const url = "https://try1-5016.herokuapp.com/student";
    let history=useHistory();
    const [user, setUser] = useState({
       
        name:"",
        email:"",
        gender:"",
        phone:""
    })
    const {name, email, gender, phone }=user;


    const onInputChange=e=>{
        setUser({ ...user, [e.target.name]: e.target.value});
    }
    const onSubmit = async e=>{
        e.preventDefault();
        await axios.post("https://try1-5016.herokuapp.com/student",user);
        history.push('/');
    };
    // function handle(e){
    //     const newdata={...user}
    //     newdata[e.target.id]=e.target.value
    //     setUser(newdata)
    //     console.log(newdata);
    // }

    // function submit(e){
    //     e.preventDefault();
    //     axios.post(url,{
    //         name:user.name,
    //         email:user.email,
    //         gender:user.gender,
    //         phone:user.phone
    //     })
    //     .then(res=>{
    //         console.log(res.user);
    //     })
    // }

    return (
        <div className="container">
            <form className="form-group" onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input
                    type="text"
                    className="form-control form-control-lg"
                     onChange={(e) => onInputChange(e)} 
                     name="name" value={name}  
                      />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Email</label>
                    <input 
                    type="email"
                    className="form-control form-control-lg"
                    onChange={(e) => onInputChange(e)} 
                    name="email" value={email}  
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">gender</label>
                    <input 
                    type="text"
                    className="form-control form-control-lg"
                    onChange={(e) => onInputChange(e)} 
                    name="gender" 
                    value={gender} 
                      />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Phone</label>
                    <input 
                     type="number"
                     className="form-control form-control-lg"
                    onChange={(e) => onInputChange(e)} 
                    name="phone" 
                    value={phone} 
                    />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddUsers
