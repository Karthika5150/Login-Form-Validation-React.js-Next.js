'use client'
import React, { createContext, useContext ,useState} from "react";


const parentContext=createContext();

export default function Data({children}){

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[formValidate,setFormvalidate]=useState(false);

const handleSubmit=()=>{
    if(formValidate){
        alert('form submit');        
        setEmail('');
        setPassword('');
        console.log('Form has been submitted successfully');
        
    }
    else{
        alert('error')
        console.log('Form has been face some error');
        
    }
}

    return(
        <>
        <parentContext.Provider  value={{email,setEmail,password,setPassword,formValidate,setFormvalidate,handleSubmit}}>
        {children}
        </parentContext.Provider>
        </>
    )
}


export function useData(){
   return useContext(parentContext)
}