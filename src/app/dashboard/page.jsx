"use client"
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProtectedComp = () => {

    const [user , setUser] = useState('')
    const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("empToken")).token;

        if (!token) {
          router.push('/')
          return 
        }

        const response = await fetch("/api/employe/dashboard", {
        method: 'POST',
        body: JSON.stringify(token),
      });

        const encData = await response.json();

        if(!response.ok){
            return response
        }
        
        setUser(encData.userData.email.split('@')[0])
        
      } catch (error) {
        throw new Error(error)
      }
    };

    fetchData()
  }, []);

  if(!user){
    return <div className="text-5xl text-center font-semibold" >Loading...</div>;
  }

  return <div className="text-5xl text-center font-semibold" >
    <h2>hello {user}</h2>
    <p>Protected Datas...</p>
  </div>;
};

export default ProtectedComp;
