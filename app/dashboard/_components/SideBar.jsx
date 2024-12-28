"use client";
import React from 'react'
import Image from 'next/image'
import { HiOutlineHome,HiOutlineSquare3Stack3D,HiOutlineShieldCheck,HiOutlinePower } from "react-icons/hi2";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Progress } from '@/components/ui/progress';

function SideBar() {
    const Menu=[
        {
            id:1,
            name:'Home',
            icon:<HiOutlineHome/>,
            path:'/dashboard'
        },
        {
            id:1,
            name:'Explore',
            icon:<HiOutlineSquare3Stack3D/>,
            path:'/dashboard/explore'
        },
        {
            id:1,
            name:'Upgrade',
            icon:<HiOutlineShieldCheck/>,
            path:'/dashboard/upgrade'
        },
        {
            id:1,
            name:'Logout',
            icon:<HiOutlinePower/>,
            path:'/dashboard/logout'
        },
    ]
    const path=usePathname();//IT WILL RETURN PATH NAME OF CURRENT PAGE
    
  return (
    
    <div className='fixed h-full md:w-64 shadow-md p-5'>
        <Image src={'/logo.svg'} alt="logo" width={150} height={100} />
        <hr className='my-5'></hr>

        <ul>
            {Menu.map((item)=>(
                <Link href={item.path}>
                <div className={`flex items-center gap-2 my-2 text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black rounded-lg p-2 
                ${path==item.path&&"bg-gray-200 text-black"}`}>
                <div className=' text-2xl '>
                {item.icon}
                </div>
                <h1>{item.name}</h1>
                </div>
                </Link>
            ))}
                

        </ul>
        <div className='bottom-10 absolute w-[80%]'>
            <Progress value={50}/>
            <h2 className='text-sm my-2'>3 out of 5 course created</h2>
            <h1 className='text-xs text-gray-500'>Upgrade to premium to unlock unlimited course generate.</h1>
        </div>
    </div>

  )
}

export default SideBar