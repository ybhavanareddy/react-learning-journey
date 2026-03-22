import  {  useState,useContext } from 'react'
import { ThemeContext } from '../day-11-context/ThemeContext';
import useFetchUsers from '../day-12-custom-hook/useFetchUsers';
import './Users.css';

function Users() {

    const {users, isLoading, error} = useFetchUsers();
    
    const {isDark, onToggle} = useContext(ThemeContext)

    

    const[search, setSearch] = useState("");

    

    const filteredNames = users.filter(user => 
        user.name.toLowerCase().includes(search.toLowerCase())
    )


    if (isLoading) return <p>Loading ...</p>
    if (error) return <p>{error}</p>

  return (
    <div className={isDark?"dark-mode":"light-mode"}>  
        <button onClick={onToggle}>{isDark?"Switch to Light":"Switch to Dark"}</button>
        <input
         type="text"
         placeholder='Search Users..'
         value={search}
         onChange={(e)=>setSearch(e.target.value)}
         />
        <br/>
        
         <ul>{filteredNames.map((user)=>
            <li key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            </li>
        )}</ul>

        {filteredNames.length === 0 && <p>No Users Found</p>}
        
    
    
        

    </div>
    
        

    
)
}


export default Users