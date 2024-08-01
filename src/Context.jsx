import { createContext, useContext, useState } from "react";
import { useSelector } from "react-redux";

const MyContext=createContext()
export const MyProvider=({children})=>{
    const {users}=useSelector((state)=>state.user)
    const [likes,setLikes]=useState([])
    
    const addProfileToLike=(user)=>{
        setLikes((prev)=>[user,...prev])
    }
    const removeLike=(user)=>{
        setLikes((prev)=>prev.filter((like)=>like.id!==user.id))
    }
    
    return(
        <MyContext.Provider value={{likes,setLikes,addProfileToLike,removeLike}}>
            {children}
        </MyContext.Provider>
    )
}
export const useLikes=()=>{
    return useContext(MyContext)
}