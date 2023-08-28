import React from "react";
import logo from "../assets/images/logo.jpeg";

function NavBar() {
  return (
    <>
      <div className="flex bg-white shadow-xl shadow-black-900">
          <img className="w-12/12 lg:w-1/12  h-20 cursor-pointer" src={logo} alt="Recipe App" />  
          <h1 className="capitalize flex items-center justify-center w-full font-bold text-4xl" >my recipe</h1>
      </div>
    </>
  );
}

export default NavBar;
