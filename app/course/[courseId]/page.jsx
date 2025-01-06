// "use client";
// import React, { useEffect } from 'react'

// import { db } from '@/configs/db';
// import { and, eq } from 'drizzle-orm';
// import { CourseList } from '@/configs/schema';
// import { useState } from 'react';
// import CourseBasicInfo from '@/app/create-course/[courseId]/_components/CourseBasicInfo';
// import Header from '@/app/_components/Header';
// import CourseDetail from '@/app/create-course/[courseId]/_components/CourseDetail';
// import ChapterList from '@/app/create-course/[courseId]/_components/ChapterList';

// function Course({params}) {

//     const[course,setCourse]=useState();


//     useEffect(() => {
//         params && GetCourse();
//     }, [params]);
//     const GetCourse = async () => {

        
//         //get courseid frst
//         const result = await db.select().from(CourseList).where(and(eq(CourseList.courseId, params?.courseId)));
//         setCourse(result[0]);
//         console.log(result);
//     }
//   return (
//     <div>
//     <Header/>
//     <div className='px-10 md:px-20 lg:px-44 my-7'>
//         <CourseBasicInfo course={course} edit={false}/>
//         <CourseDetail course={course}/>
//         <ChapterList course={course} edit={false}/>
//     </div>
//     </div>
//   )
// }

// export default Course;



"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/configs/db";
import { and, eq } from "drizzle-orm";
import { CourseList } from "@/configs/schema";
import CourseBasicInfo from "@/app/create-course/[courseId]/_components/CourseBasicInfo";
import Header from "@/app/_components/Header";
import CourseDetail from "@/app/create-course/[courseId]/_components/CourseDetail";
import ChapterList from "@/app/create-course/[courseId]/_components/ChapterList";

function Course({ params }) {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (params?.courseId) {
      GetCourse();
    }
  }, [params?.courseId]);

  const GetCourse = async () => {
    try {
      const result = await db
        .select()
        .from(CourseList)
        .where(and(eq(CourseList.courseId, params.courseId)));

      setCourse(result[0]);
      console.log(result);
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Header />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 my-6 md:my-10">
        {/* Course Components */}
        <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
          <CourseBasicInfo course={course} edit={false} />
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 md:p-6 mt-6">
          <CourseDetail course={course} />
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 md:p-6 mt-6">
          <ChapterList course={course} edit={false} />
        </div>
      </div>
    </div>
  );
}

export default Course;
