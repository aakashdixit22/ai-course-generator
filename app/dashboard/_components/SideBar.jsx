// "use client";
// import React from 'react'
// import Image from 'next/image'
// import { HiOutlineHome,HiOutlineSquare3Stack3D,HiOutlineShieldCheck,HiOutlinePower } from "react-icons/hi2";
// import { usePathname } from 'next/navigation';
// import Link from 'next/link';
// import { Progress } from '@/components/ui/progress';
// import { UsersCourseListContext } from '@/app/_context/UserCourseListContext';
// import { useContext } from 'react';

// function SideBar() {
//     const{userCourseList,setUserCourseList}=useContext(UsersCourseListContext)
//     const Menu=[
//         {
//             id:1,
//             name:'Home',
//             icon:<HiOutlineHome/>,
//             path:'/dashboard'
//         },
           
        
//         {
//             id:1,
//             name:'Upgrade',
//             icon:<HiOutlineShieldCheck/>,
//             path:'/dashboard/upgrade'
//         },
//         {
//             id:1,
//             name:'Logout',
//             icon:<HiOutlinePower/>,
//             path:'/dashboard/logout'
//         },
//     ]
//     const path=usePathname();//IT WILL RETURN PATH NAME OF CURRENT PAGE
    
//   return (
    
//     <div className='fixed h-full md:w-64 shadow-md p-5'>
//         <Image src={'/logo.svg'} alt="logo" width={150} height={100} />
//         <hr className='my-5'></hr>

//         <ul>
//             {Menu.map((item)=>(
//                 <Link href={item.path}>
//                 <div className={`flex items-center gap-2 my-2 text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black rounded-lg p-2 
//                 ${path==item.path&&"bg-gray-200 text-black"}`}>
//                 <div className=' text-2xl '>
//                 {item.icon}
//                 </div>
//                 <h1>{item.name}</h1>
//                 </div>
//                 </Link>
//             ))}
                

//         </ul>
//         <div className='bottom-10 absolute w-[80%]'>
//             <Progress value={(userCourseList?.length/5)*100}/>
//             <h2 className='text-sm my-2'>{userCourseList?.length} out of 5 course created</h2>
//             <h1 className='text-xs text-gray-500'>Upgrade to premium to unlock unlimited course generate.</h1>
//         </div>
//     </div>

//   )
// }

// export default SideBar



"use client";
import React, { useContext } from 'react';
import Image from 'next/image';
import { HiOutlineHome, HiOutlineShieldCheck, HiOutlinePower } from "react-icons/hi2";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Progress } from '@/components/ui/progress';
import { UsersCourseListContext } from '@/app/_context/UserCourseListContext';

function SideBar({ setSidebarOpen }) {
  const { userCourseList } = useContext(UsersCourseListContext);
  const path = usePathname(); // Get current route

  const Menu = [
    { id: 1, name: 'Home', icon: <HiOutlineHome />, path: '/' },
    { id: 2, name: 'Upgrade', icon: <HiOutlineShieldCheck />, path: '/dashboard/upgrade' },
    { id: 3, name: 'Logout', icon: <HiOutlinePower />, path: '/dashboard/logout' },
  ];

  return (
    <div className="h-full md:w-64 bg-white shadow-md p-5 md:fixed flex flex-col transition-all">
      {/* Mobile Close Button */}
      <button className="md:hidden text-gray-600 absolute top-5 right-5 text-2xl" onClick={() => setSidebarOpen(false)}>
        ✖
      </button>

      {/* Logo */}
      <div className="flex justify-between items-center">
        <Image src={'/logo.svg'} alt="logo" width={150} height={100} />
        <button className="md:hidden text-2xl text-gray-600" onClick={() => setSidebarOpen(false)}>
          ✖
        </button>
      </div>
      <hr className="my-5" />

      {/* Menu */}
      <ul>
        {Menu.map((item) => (
          <Link key={item.id} href={item.path}>
            <div className={`flex items-center gap-2 my-2 text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black rounded-lg p-2
            ${path === item.path && "bg-gray-200 text-black"}`}>
              <div className="text-2xl">{item.icon}</div>
              <h1 className="text-lg">{item.name}</h1>
            </div>
          </Link>
        ))}
      </ul>

      {/* Progress Bar */}
      <div className="mt-auto mb-5">
        <Progress value={(userCourseList?.length / 5) * 100} />
        <h2 className="text-sm my-2">{userCourseList?.length} out of 5 courses created</h2>
        <h1 className="text-xs text-gray-500">Upgrade to premium to unlock unlimited courses.</h1>
      </div>
    </div>
  );
}

export default SideBar;
