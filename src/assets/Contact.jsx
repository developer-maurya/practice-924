
// import React, { useState } from 'react'

// const Contect = () => {
//     const [student, setStudent] = useState({
//         name : "chitranjan",
//         email : "patel77599@gmail.com",
//         contact : 7004245458,
//     })
//   return (
//     <div>
//       <h1>{student.name}</h1>
//       <p>{student.email} and {student.contact}</p>
//     </div>
//   )
// }

// export default Contect
import React, { useState } from 'react';

const Contect = () => {
  const [student, setStudent] = useState({
    name: "chitranjan",
    email: "patel77599@gmail.com",
    contact: 7004245458,
  });

  const updateStudent = () => {
    setStudent({
      name: "Rahul Sharma",
      email: "rahul@example.com",
      contact: 9876543210,
    });
  };

  return (
    <div>
      <h1>{student.name}</h1>
      <p>{student.email} and {student.contact}</p>
      <button onClick={updateStudent}>Change Info</button>
    </div>
  );
};

export default Contect;

