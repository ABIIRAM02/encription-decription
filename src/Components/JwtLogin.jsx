"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const JwtLogin = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter()

  const handleInputs = (e) => {
    const { value, name } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    const responce = await fetch("/api/employe", {
      method: "POST",
      body: JSON.stringify(userData),
    });
    const data = await responce.json();
    if (responce.ok) {
      console.log(data);
      localStorage.setItem("empToken", JSON.stringify(data)) 
      router.push('/dashboard')
    }
    else throw new Error(data);
  };


  return (
    <fieldset className="border rounded w-[40vw] mx-auto">
      <legend className="text-center p-5">Jwt token login</legend>
      <form
        onSubmit={handleFormSubmission}
        className="flex flex-col justify-center items-center gap-5"
      >
        <input
          onChange={handleInputs}
          name="email"
          className="border rounded"
          type="email"
        />
        <input
          onChange={handleInputs}
          name="password"
          className="border rounded"
          type="password"
        />
        <button type="submit" className="bg-gray-900 px-5 my-2 rounded ">
          Submit
        </button>
      </form>
    </fieldset>
  );
};

export default JwtLogin;
