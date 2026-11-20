'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login=()=>{


    const[error,setError]=useState({});
    const router=useRouter();
        const[email,setEmail]=useState('');
        const[password,setPassword]=useState('');
        const[formValidate,setFormvalidate]=useState(false);
    

// Email


useEffect(()=>{
    Validateforms()
},[email,password]);


const Validateforms=()=>{
    let error=({});

    if(!email){
        
        error.email='Email is required';
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        // alert('success');
        error.email='Email is invalid';
    }
    if(!password){
        error.password='Password is required';
    }
    else if(!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password) && password.length<6){
        error.password='password is invalid'
    }
    setError(error);
    setFormvalidate(Object.keys(error).length===0)
}


const handleSubmit=()=>{
    if(formValidate){
        // alert('form submit');        
        setEmail('');
        setPassword('');
        console.log(email + ',' + password);

        
        console.log('Form has been submitted successfully');
        //  router.push(
        //         {
        //             pathname:'/Dashboard',
        //             query:{email:email,password:password}
        //         }
        // );


        const store=JSON.parse(localStorage.getItem('getS'));


        const users=store.find((item) =>(
            item.mail===email && item.pass==password)
        )

        if(users){
            localStorage.setItem('LoginUser',JSON.stringify(store));
            router.push('/Dashboard');
        }
        else{
            alert('Invalid Credentials');
        }

        // router.push(`/Dashboard?email=${email}&password=${password}`);
    }
    else{
        alert('error')
        console.log('Form has been face some error');
        
    }
}

console.log(email);
console.log(password);

    return(
        <>
        <section className="dashboard-contain">
           <div className="dashboard">
            <h6 className="ds-txt"> LOGIN</h6>
            <hr/>
            <label className="labels">Email Address</label>
            <br/>
            <input placeholder="email@example.com" 
            value={email} onChange={(e) =>{
            setEmail(e.target.value)
            }}
            className="inputs" type="email"/>
            {error && 
            <p className="error">
                {error.email}
            </p>
            }
            <br/>
 
            <label className="labels">Password</label>
            <br/>
            <input placeholder="Password" className="inputs" 
            value={password} onChange={(e) => {
                 setPassword(e.target.value)
            }}
             type="password"/>

            {error && 
            <p className="error">
                {error.password}
            </p>
            }

            <button className="btn-1"
            disabled={!formValidate}
             onClick={handleSubmit}
            >Login</button>
        
            <hr className="hr-1"/>
            <p className="lg-txt">New around here?
                <Link href='/Signup' className="form-link">Signup</Link>
            </p>
           </div>
        </section>
        </>
    )
}
export default Login;