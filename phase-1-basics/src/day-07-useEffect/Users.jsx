import React, { useEffect } from 'react'
import { useState } from 'react';
function Users() {
const [users, setUsers] = useState([]);

  

  useEffect(()=>{
    const usersData = ["Bhavana", "Bharathi", "Akshitha","Pujitha"]
    setUsers(usersData);
    
},[]);
  return (
    <div>
        <ul>
            {users.map((user) => (
                <li key={user}>{user}</li>
            ))}
        </ul>
    </div>
  )
}

export default Users