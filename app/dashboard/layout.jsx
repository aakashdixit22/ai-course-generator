// "use client";
// import React from 'react'
// import SideBar from './_components/SideBar';
// import Header from './_components/Header';
// import { UsersCourseListContext } from '../_context/UserCourseListContext';
// import { useState } from 'react';
// function DashboardLayout({children}) {
//   const [userCourseList, setUserCourseList] = useState([]);
//   return (
//     <UsersCourseListContext.Provider value={{ userCourseList, setUserCourseList }}>
//       <div className="flex flex-col min-h-screen">
//         <div className="md:w-64 hidden md:block fixed">
//           <SideBar />
//         </div>
//         <div className="md:ml-64">
//           <Header />
//           <div className="p-10">
//             {children}
//           </div>
//         </div>
//       </div>
//     </UsersCourseListContext.Provider>
//   );
// }

// export default DashboardLayout;


// "use client";
// import React, { useState } from 'react';
// import SideBar from './_components/SideBar';
// import Header from './_components/Header';
// import { UsersCourseListContext } from '../_context/UserCourseListContext';

// function DashboardLayout({ children }) {
//   const [userCourseList, setUserCourseList] = useState([]);

//   return (
//     <UsersCourseListContext.Provider value={{ userCourseList, setUserCourseList }}>
//       <div className="flex flex-col min-h-screen">
//         {/* Sidebar */}
//         <div className="md:w-64 hidden md:block fixed">
//           <SideBar />
//         </div>

//         {/* Main Content */}
//         <div className="md:ml-64 ">
//           <Header />
//           <div className="pt-[80px] p-10"> {/* Added padding to prevent overlap */}
//             {children}
//           </div>
//         </div>
//       </div>
//     </UsersCourseListContext.Provider>
//   );
// }

// export default DashboardLayout;

"use client";
import React, { useState } from 'react';
import SideBar from './_components/SideBar';
import Header from './_components/Header';
import { UsersCourseListContext } from '../_context/UserCourseListContext';

function DashboardLayout({ children }) {
  const [userCourseList, setUserCourseList] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for mobile sidebar toggle

  return (
    <UsersCourseListContext.Provider value={{ userCourseList, setUserCourseList }}>
      <div className="flex min-h-screen">
        {/* Sidebar - hidden on mobile, toggleable */}
        <div className={`fixed md:relative z-50 transition-transform duration-300 h-screen ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-64`}>
          <SideBar setSidebarOpen={setSidebarOpen} />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <Header setSidebarOpen={setSidebarOpen} />
          <div className="pt-[80px] p-4 md:p-10">
            {children}
          </div>
        </div>
      </div>
    </UsersCourseListContext.Provider>
  );
}

export default DashboardLayout;

