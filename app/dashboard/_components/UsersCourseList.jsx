"use client";
import { useUser } from '@clerk/nextjs'
import React, { use, useContext, useState } from 'react'
import { useEffect } from 'react'
import { db } from '@/configs/db'
import { CourseList } from '@/configs/schema'
import { eq } from 'drizzle-orm'

import CourseCard from './CourseCard';
import { UsersCourseListContext } from '@/app/_context/UserCourseListContext';

function UsersCourseList() {

    const[courseList,setCourseList]=useState([]);
    const{userCourseList,setUserCourseList}=useContext(UsersCourseListContext)
    const {user}=useUser();

    useEffect(() => {
        user && getUserCoursees();
    },[user])

    const getUserCoursees=async()=>{
        const result=await db.select().from(CourseList).where(eq(CourseList.createdBy,user?.primaryEmailAddress?.emailAddress));
        // console.log(result);
        setCourseList(result);
        setUserCourseList(result)
    }
  return (
    <div className='mt-10'>
    <h2 className='font-medium text-xl'>My AI courses</h2>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {courseList?.length>0?courseList?.map((course,index)=>(


          <CourseCard course={course} key={index} refreshData={()=>getUserCoursees()}/>
        )):<div>
        {[1,2,3,4,5].map((item,index)=>(
            <div key={index} className='border p-3 grid grid-cols-2 mt-5 rounded-md aniamte-pulse h-[200px]'>
                
            </div>
        ))}
        </div>}
        
      
    </div>
    </div>
  )

}

export default UsersCourseList