import React from 'react'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="" id="" style={{backgroundColor: "red" , color: "wheat"}}>
    <NavLink to ="/home">Home</NavLink>
    <NavLink to= "/Contact">contact</NavLink>

    </div>
  )
}

export default Navbar