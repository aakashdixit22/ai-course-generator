"use client";
import { useUser } from '@clerk/nextjs'
import React, { use, useState } from 'react'
import { useEffect } from 'react'
import { db } from '@/configs/db'
import { CourseList } from '@/configs/schema'
import { eq } from 'drizzle-orm'

import CourseCard from './CourseCard';

function UsersCourseList() {

    const[courseList,setCourseList]=useState([]);
    const {user}=useUser();

    useEffect(() => {
        user && getUserCoursees();
    },[user])

    const getUserCoursees=async()=>{
        const result=await db.select().from(CourseList).where(eq(CourseList.createdBy,user?.primaryEmailAddress?.emailAddress));
        // console.log(result);
        setCourseList(result);
    }
  return (
    <div className='mt-10'>
    <h2 className='font-medium text-xl'>My AI courses</h2>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {courseList?.map((course,index)=>(


          <CourseCard course={course} key={index} refreshData={()=>getUserCoursees()}/>

        ))}
      
    </div>
    </div>
  )

}

export default UsersCourseList