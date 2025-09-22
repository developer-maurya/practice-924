// import React from "react";
// const Home =(props) =>{
//     return(
//         <div>
//         <h1>Heading</h1>
//         <p> my name is chitranjan { props.name}</p>
//         <p>I am {props.age} yeadr old</p>
//         </div>
//     )
// }
// export default Home

// import React, { useState } from 'react';

// const Home = (Props) => {
//   const [color, setColor] = useState("green");
//   const[email,setEmail]=useState("shivam@gmail")
//   return (
//     <div>
//       <h3>This is {color} color</h3>
//       <button onClick={() => setColor("Red")}>Change</button>

//       <h1>Headling</h1>
//       <p>my name is {Props.name}</p>
//       <p>I am {Props.age} years old</p>
//     </div>
//   )
// }

// export default Home;
import React, { use, useEffect, useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);
  const [newcount,setNewcount]=useState(0);
 useEffect(()=>{
  setNewcount(()=> count * 3)
 },[count])

  return (
   <div>
    <h1>this is {count}</h1>
    <button onClick={() =>setCount((c)=>c-1)}>+</button>
    <h1>{newcount}</h1>
   </div>
  )
}

export default Home;