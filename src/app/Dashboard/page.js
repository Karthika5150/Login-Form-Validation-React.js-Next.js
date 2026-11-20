"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

const Dashboard = () => {
  //  const searchParams=useSearchParams();
  // const email=searchParams.get('email');
  // const password=searchParams.get('password');

//   const user = JSON.parse(localStorage.getItem("LoginUser"));

let userarr=JSON.parse(localStorage.getItem('getS') || '[]')


  const handleLogout=()=>{
      localStorage.removeItem(user);
      console.log(user);
      
  }

  return (
    <>
      <section className="dashboard-contain">
        <div className="dashboard">
          <p className="ds-txt">Dashboard</p>
          <hr />
       
          <div className="data-div">
          
            {userarr.map((item) =>(
            <>
               <div key={item}>
               <p className="ds-txt-p">User Email</p>
            <p className="email-txt">{item.mail}</p>
            <p>User Password</p>
            <p className="email-txt">{item.pass}</p>
               </div>
            </>
         ))}
            <div className="btn-div">
              <button className="btn">
                <Link href="/Login" className="link-txt" onClick={handleLogout}>
                  Logout
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Dashboard;
