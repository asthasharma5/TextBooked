import React, { useState } from "react";
import './styles/UserForm.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function UserForm(){
    const navigate=useNavigate()
    const [fields,setFields]=useState({
        title:'',
        author:'',
        Publiser:'',
        description:'',
        Image:'',
        price:''

    })
    const handleChange=async(e)=>{
e.preventDefault()

setFields({
    ...fields,
    [e.target.name]:e.target.value
})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
         axios.post('http://localhost:5001/books',fields)
         .then((res)=>console.log(res.data))
         navigate('/bookshelf')

    }
    return(
        <form className="block" onSubmit={handleSubmit}>
            <h1 className="heading">User can sell here</h1>
            <input className="Text" type="text" placeholder="title" name="title" value={fields.title} onChange={handleChange}/>
            <input className="Text" type="text" placeholder="author" name="author" value={fields.author}onChange={handleChange} />
            <input className="Text" type="text" placeholder="Publiser date" name="Publiser" value={fields.Publiser} onChange={handleChange} />
            <input className="Text" type="text" placeholder="description" name="description" value={fields.description} onChange={handleChange}/>
            <input className="Text" accept="image/*" type="file" placeholder="Image" name="Image" value={fields.Image}onChange={handleChange} />
            <input className="Text" type="text" placeholder="price" value={fields.price} name="price" onChange={handleChange}/>
            <button className="button1" type="submit">Submit </button>
            <Link to={'/bookshelf'}><button className="button1">Skip</button></Link>
        </form>
    )
}
export default UserForm