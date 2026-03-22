import { useState, useEffect } from "react";

function useFetchUsers() {
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
                    

            }catch(err){
                setError(err.message);
                console.log(err.message)
                
            }finally{
                setIsLoading(false)
            }
            }
            fetchData();
            
            
            
        },[])

    
    return {users, isLoading, error}
    }

export default useFetchUsers