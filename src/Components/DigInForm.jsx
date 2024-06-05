"use client";
import React, { useState } from "react";
import cryptoJs from "crypto-js";

const DigInForm = () => {
  
  const SECRECT_KEY = 'hakunamatata!!'

  const [userData, setUserData] = useState({
    userName : 'abii',
    email : 'abi@gmail.com'
  });

  const handleInput = (e) => {
    setUserData({
        ...userData,
        [e.target.name] : e.target.value
    })
  }


  const handleformAction = async (e) => {
    e.preventDefault()

    const jsonFormat = JSON.stringify(userData) // * Do only for obj or arr
    const encryptedData = cryptoJs.AES.encrypt( jsonFormat , SECRECT_KEY ).toString()

    const res = await fetch('/api/users' , {
        method : 'POST' ,     
        body : JSON.stringify(encryptedData)
    })

    if(res.ok){
        const data = await res.json()
        alert(data)
    }
  }

  return (
    <section className="border-2 border-gray-500 rounded-md p-5 w-[40vw] h-[40vh] ">
      <form onSubmit={handleformAction} className="flex justify-center items-center flex-col gap-10 h-full w-full">
        <div className="flex justify-center flex-col items-center gap-5 w-full">
          <input
            value={userData.userName}
            onChange={handleInput}
            required
            name='userName'
            type="text"
            placeholder="UserName"
            className="border focus:outline-none placeholder:text-lg text-xl p-2 bg-transparent rounded w-3/4"
          />
          <input
            value={userData.email}
            onChange={handleInput}
            required
            name='email'
            type="email"
            placeholder="Email"
            className="border focus:outline-none placeholder:text-lg text-xl p-2 bg-transparent rounded w-3/4"
          />
        </div>
        <button type="submit" className="bg-gray-500 text-lg font-semibold w-[30%] py-[5px] rounded-lg">
          DIG IN
        </button>
      </form>
    </section>
  );
};

export default DigInForm;
