import React, { useEffect, useState } from 'react'

function Users() {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect( () =>{
        async function fetchData(){
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                if (!response.ok){
                    throw new Error("Something went wrong")
                }

                const data = await response.json();
                setUsers(data);
                setIsLoading(false);

        }catch(err){
            setError(err.message);
            console.log(err.message)
            setIsLoading(false)
        }
        }
        fetchData();
        
        
        
    },[])

    

  return (
    <>
        {isLoading 
        ? <p>Loading...</p>
        : <ul>{users.map((user)=>
            <li key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            </li>
        )}</ul>
        
    }
    {error && <p>{error}</p>}
        

    </>
    
        

    
)
}


export default Users