// "use client";
// import React from 'react';
// import { useEffect, useState } from 'react';
// import { db } from '@/configs/db';
// import { and, eq } from 'drizzle-orm';
// import { Chapters, CourseList } from '@/configs/schema';
// import ChapterListCard from './_components/ChapterListCard';
// import ChapterContent from './_components/ChapterContent';

// function CourseStart({params}) {
//     const [course, setCourse] = useState(null);
//     const [selectedChapter, setSelectedChapter] = useState();
//     const[chapterContent, setChapterContent] = useState();

//     useEffect(() => {
//         if (params?.courseId) {
//             GetCourse();
//         }
//     }, [params]);

//     const GetCourse = async () => {
//         const result = await db.select()
//             .from(CourseList)
//             .where(eq(CourseList.courseId, params?.courseId));
//         setCourse(result[0]);
//         GetSelectedChapterContent(0);
//     }

//     const GetSelectedChapterContent = async (chapterId) => {
//         const result = await db.select().from(Chapters)
//             .where(and(eq(Chapters.courseId, course?.courseId), eq(Chapters.chapterId, chapterId)));
//              setChapterContent(result[0]);
//              console.log(result);
//     }

//     return (
//         <div>
//             {/* Chapters list side bar */}
//             <div className="fixed md:w-72 hidden md:block h-screen bg-blue-50 border-r shadow-sm">
//                 <h2 className='font-medium text-lg bg-primary p-3 text-white'>
//                     {course?.courseOutput?.courseName}
//                 </h2>
//                 <div>
//                     {course?.courseOutput?.chapters?.map((chapter, index) => (
//                         <div 
//                             className={`hover:bg-purple-100 cursor-pointer ${
//                                 selectedChapter?.chapterName ==chapter?.chapterName && 'bg-purple-100'
//                             } `}
//                             key={index}
//                             onClick={() =>{ setSelectedChapter(chapter);
//                             GetSelectedChapterContent(index);}}

//                         >
//                             <ChapterListCard chapter={chapter} index={index} />
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* content div */}
//             <div className='md:ml-72'>
//                 {/* Add content here */}
//                 <ChapterContent chapter={selectedChapter} content={chapterContent} />  
//             </div>
//         </div>
//     );
// }

// export default CourseStart;


// // "use client";
// // import React, { useState, useEffect } from 'react';
// // import { db } from '@/configs/db';
// // import { and, eq } from 'drizzle-orm';
// // import { Chapters, CourseList } from '@/configs/schema';
// // import ChapterListCard from './_components/ChapterListCard';
// // import ChapterContent from './_components/ChapterContent';
// // import { HiMenuAlt2, HiX } from 'react-icons/hi';

// // function CourseStart({params}) {
// //     const [course, setCourse] = useState(null);
// //     const [selectedChapter, setSelectedChapter] = useState();
// //     const [chapterContent, setChapterContent] = useState();
// //     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// //     useEffect(() => {
// //                 if (params?.courseId) {
// //                     GetCourse();
// //                 }
// //             }, [params]);
        
// //             const GetCourse = async () => {
// //                 const result = await db.select()
// //                     .from(CourseList)
// //                     .where(eq(CourseList.courseId, params?.courseId));
// //                 setCourse(result[0]);
// //                 GetSelectedChapterContent(0);
// //             }
        
// //             const GetSelectedChapterContent = async (chapterId) => {
// //                 const result = await db.select().from(Chapters)
// //                     .where(and(eq(Chapters.courseId, course?.courseId), eq(Chapters.chapterId, chapterId)));
// //                      setChapterContent(result[0]);
// //                      console.log(result);
// //             }

    

// //     return (
// //         <div className="relative min-h-screen bg-white">
// //             {/* Mobile menu button */}
// //             <button 
// //                 onClick={() => setIsSidebarOpen(!isSidebarOpen)}
// //                 className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-md bg-primary text-white"
// //             >
// //                 {isSidebarOpen ? <HiX size={24} /> : <HiMenuAlt2 size={24} />}
// //             </button>

// //             {/* Sidebar */}
// //             <div className={`
// //                 fixed inset-y-0 left-0 transform 
// //                 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
// //                 md:translate-x-0 transition-transform duration-300 ease-in-out
// //                 w-72 bg-blue-50 border-r shadow-sm z-40
// //                 md:static md:block
// //             `}>
// //                 <h2 className='font-medium text-lg bg-primary p-3 text-white'>
// //                     {course?.courseOutput?.courseName}
// //                 </h2>
// //                 <div className="overflow-y-auto h-[calc(100vh-4rem)]">
// //                     {course?.courseOutput?.chapters?.map((chapter, index) => (
// //                         <div 
// //                             key={index}
// //                             className={`hover:bg-purple-100 cursor-pointer 
// //                                 ${selectedChapter?.chapterName === chapter?.chapterName && 'bg-purple-100'}`}
// //                             onClick={() => {
// //                                 setSelectedChapter(chapter);
// //                                 GetSelectedChapterContent(index);
// //                                 setIsSidebarOpen(false);
// //                             }}
// //                         >
// //                             <ChapterListCard chapter={chapter} index={index} />
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>

// //             {/* Main content */}
// //             <div className={`
// //                 transition-all duration-300 ease-in-out
// //                 md:ml-72 min-h-screen
// //                 p-4 sm:p-6 lg:p-8
// //             `}>
// //                 <ChapterContent chapter={selectedChapter} content={chapterContent} />
// //             </div>

// //             {/* Overlay */}
// //             {isSidebarOpen && (
// //                 <div 
// //                     className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
// //                     onClick={() => setIsSidebarOpen(false)}
// //                 />
// //             )}
// //         </div>
// //     );
// // }

// // export default CourseStart;



// "use client";
// import React, { useState, useEffect } from "react";
// import { db } from "@/configs/db";
// import { and, eq } from "drizzle-orm";
// import { Chapters, CourseList } from "@/configs/schema";
// import ChapterListCard from "./_components/ChapterListCard";
// import ChapterContent from "./_components/ChapterContent";
// import { HiMenuAlt2, HiX } from "react-icons/hi";

// function CourseStart({ params }) {
//   const [course, setCourse] = useState(null);
//   const [selectedChapter, setSelectedChapter] = useState();
//   const [chapterContent, setChapterContent] = useState();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   useEffect(() => {
//     if (params?.courseId) {
//       GetCourse();
//     }
//   }, [params]);

//   const GetCourse = async () => {
//     const result = await db
//       .select()
//       .from(CourseList)
//       .where(eq(CourseList.courseId, params?.courseId));
//     setCourse(result[0]);
//     GetSelectedChapterContent(0);
//   };

//   const GetSelectedChapterContent = async (chapterId) => {
//     const result = await db
//       .select()
//       .from(Chapters)
//       .where(
//         and(
//           eq(Chapters.courseId, course?.courseId),
//           eq(Chapters.chapterId, chapterId)
//         )
//       );
//     setChapterContent(result[0]);
//   };

//   return (
//     <div className="relative min-h-screen bg-white">
//       {/* Mobile Sidebar Toggle Button */}
//       <button
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//         className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-md bg-primary text-white"
//       >
//         {isSidebarOpen ? <HiX size={24} /> : <HiMenuAlt2 size={24} />}
//       </button>

//       {/* Sidebar (Mobile & Desktop) */}
//       <div
//         className={`
//           fixed inset-y-0 left-0 transform 
//           ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
//           md:translate-x-0 transition-transform duration-300 ease-in-out
//           w-72 bg-blue-50 border-r shadow-sm z-40
//           md:static md:block
//         `}
//       >
//         <h2 className="font-medium text-lg bg-primary p-3 text-white">
//           {course?.courseOutput?.courseName}
//         </h2>
//         <div className="overflow-y-auto h-[calc(100vh-4rem)]">
//           {course?.courseOutput?.chapters?.map((chapter, index) => (
//             <div
//               key={index}
//               className={`hover:bg-purple-100 cursor-pointer ${
//                 selectedChapter?.chapterName === chapter?.chapterName &&
//                 "bg-purple-100"
//               }`}
//               onClick={() => {
//                 setSelectedChapter(chapter);
//                 GetSelectedChapterContent(index);
//                 setIsSidebarOpen(false);
//               }}
//             >
//               <ChapterListCard chapter={chapter} index={index} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div
//         className={`
//           transition-all duration-300 ease-in-out
//           md:ml-72 min-h-screen
//           p-4 sm:p-6 lg:p-8
//         `}
//       >
//         <ChapterContent chapter={selectedChapter} content={chapterContent} />
//       </div>

//       {/* Overlay (for Mobile) */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}
//     </div>
//   );
// }

// export default CourseStart;



"use client";
import React, { useState, useEffect } from "react";
import { db } from "@/configs/db";
import { and, eq } from "drizzle-orm";
import { Chapters, CourseList } from "@/configs/schema";
import ChapterListCard from "./_components/ChapterListCard";
import ChapterContent from "./_components/ChapterContent";
import { HiMenuAlt2, HiX } from "react-icons/hi";

function CourseStart({ params }) {
  const [course, setCourse] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState();
  const [chapterContent, setChapterContent] = useState();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (params?.courseId) {
      GetCourse();
    }
  }, [params]);

  const GetCourse = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .where(eq(CourseList.courseId, params?.courseId));
    setCourse(result[0]);
    GetSelectedChapterContent(0);
  };

  const GetSelectedChapterContent = async (chapterId) => {
    const result = await db
      .select()
      .from(Chapters)
      .where(
        and(
          eq(Chapters.courseId, course?.courseId),
          eq(Chapters.chapterId, chapterId)
        )
      );
    setChapterContent(result[0]);
  };

  return (
    <div className="relative flex min-h-screen bg-white">
      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-md bg-primary text-white"
      >
        {isSidebarOpen ? <HiX size={24} /> : <HiMenuAlt2 size={24} />}
      </button>

      {/* Sidebar (Mobile & Desktop) */}
      <div
        className={`fixed inset-y-0 left-0 transform bg-blue-50 border-r shadow-md z-40
          w-72 transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static md:w-80
          flex flex-col h-screen
        `}
      >
        <h2 className="font-medium text-lg bg-primary p-4 text-white">
          {course?.courseOutput?.courseName}
        </h2>
        <div className="overflow-y-auto flex-grow px-3 py-2">
          {course?.courseOutput?.chapters?.map((chapter, index) => (
            <div
              key={index}
              className={`hover:bg-purple-100 cursor-pointer transition 
                ${selectedChapter?.chapterName === chapter?.chapterName ? "bg-purple-200" : ""}`
              }
              onClick={() => {
                setSelectedChapter(chapter);
                GetSelectedChapterContent(index);
                setIsSidebarOpen(false);
              }}
            >
              <ChapterListCard chapter={chapter} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-screen transition-all duration-300 ease-in-out">
        <ChapterContent chapter={selectedChapter} content={chapterContent} />
      </div>

      {/* Overlay (for Mobile) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default CourseStart;

