import { createContext, useEffect, useState } from "react";

 export const  UserContext = createContext();

 export const UserStore = ({children}) =>{
    const [login,setLogin]= useState(false)
    const[,setData] = useState({})
    const [fotos,setFotos] =useState(false)
    
    useEffect(()=>{
        setData({name:'clenilson', age:32})
    },[])

    return(
        <UserContext.Provider value ={{login,setLogin,fotos,setFotos}}>
               {children}
        </UserContext.Provider>
    )
   


}






