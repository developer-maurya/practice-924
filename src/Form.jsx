import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const [nameError , setNameError] = useState("");
    const [emailError , setEmailError] = useState("");
    const [passwordError , setPasswordError] = useState("");

    const validateName =(name) =>{
        if (!name){
            return "Name is required";

        }
        return"";
    };
    const validateEmail = (email) =>{
        if (!email){
            return "Email is required";
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i){
            return "Invalid Email Format"
        }
        return "";
    };
    
    const validatePassword = (password) => {
        if (!password){
            return "Password is required";
        }
        else if (password.lenght > 8){
            return "Password Must Be Atleast 8 Characters";
        }
        return"";
    }


    const handlesubmit = (event) =>{
     event.preventDefault();
     const nameError = validateName(name);
     const emailError = validateEmail(email);
     const passwordError = validatePassword(password);


     setNameError(nameError);
     setEmailError(emailError);
     setPasswordError(passwordError);


     if (!nameError && !emailError && !passwordError){
        console.log("form Submitted:, {name ,email ,password}");

        nameError("");
        emailError("");
        passwordError("");
        setEmail("");
        setName("");
        setPassword("");
     }
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                {nameError && <p>{nameError}</p>}
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="email" name="" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {emailError && <p>{emailError}</p>}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {passwordError && <p>{passwordError}</p>}
            </div>
            <button type='Submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form;