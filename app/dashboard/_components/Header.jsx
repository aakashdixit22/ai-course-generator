// import React from 'react'
// import Image from 'next/image'
// import { UserButton } from '@clerk/nextjs'
// function Header() {
//   return (
//     <div className='flex justify-between items-center p-5 shadow-md'>
    
//         <Image src={'/logo.svg'} alt="logo" width={150} height={150} />
        
//         <div className='flex flex-row items-center gap-10 '> 
//         <p>about</p>
//         <p>home</p>
//         <p>contact</p>
//     </div>
//     <UserButton />
//     </div>
//   )
// }

// export default Header

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { HiOutlineMenuAlt1, HiOutlineX } from "react-icons/hi"; // Importing icons
import Link from "next/link";

function Header({ setSidebarOpen }) {
  const [navOpen, setNavOpen] = useState(false); // State for mobile menu toggle

  return (
    <div className="flex justify-between items-center p-5 shadow-md bg-white">
      {/* Mobile Sidebar Toggle Button */}
      <button className="md:hidden text-2xl text-gray-600" onClick={() => setSidebarOpen(true)}>
        <HiOutlineMenuAlt1 />
      </button>

      {/* Logo */}
      <Image src={"/logo.svg"} alt="logo" width={120} height={120} className="cursor-pointer" />

      {/* Navigation Menu - Desktop */}
     
      

      {/* User Profile Button */}
      <UserButton />

      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl text-gray-600" onClick={() => setNavOpen(!navOpen)}>
        {navOpen ? <HiOutlineX /> : <HiOutlineMenuAlt1 />}
      </button>

      {/* Mobile Dropdown Menu */}
      {navOpen && (
        <div className="absolute top-16 right-5 bg-white shadow-md p-5 rounded-lg flex flex-col gap-4 md:hidden z-50">
          <p className="cursor-pointer hover:text-blue-500 transition">About</p>
          <p className="cursor-pointer hover:text-blue-500 transition">Home</p>
          <p className="cursor-pointer hover:text-blue-500 transition">Contact</p>
        </div>
      )}
    </div>
  );
}

export default Header;
