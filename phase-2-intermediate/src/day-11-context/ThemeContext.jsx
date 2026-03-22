import { createContext, useState } from "react";

export const ThemeContext = createContext()

function ThemeProvider({children}){

    const [isDark, setIsDark] = useState(false);

    function onToggle(){
        setIsDark(prev => !prev);
    }

    return (
        <ThemeContext.Provider value={{isDark, onToggle}}>
            {children}
        </ThemeContext.Provider>
    )
    
}

export default ThemeProvider;