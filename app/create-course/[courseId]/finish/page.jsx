"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useState } from 'react';
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { eq,and } from 'drizzle-orm';
import CourseBasicInfo from '../_components/CourseBasicInfo';
import { HiOutlineClipboardDocumentCheck } from 'react-icons/hi2';


function FinishScreen({params}) {
    const {user}=useUser();
    const [course,setCourse]=useState([]);
    
    const router=useRouter();
    useEffect(() => {
        params && GetCourse();

    },[params,user]
    )

    const GetCourse=async()=>{
        //get the course by id
        const result= await db.select().from(CourseList).where(and(eq(CourseList.courseId,params?.courseId),eq(CourseList.createdBy,user?.primaryEmailAddress?.emailAddress)))
        setCourse(result[0]);
        console.log(result);
    }
  return (
    <div className='px-10 md:px-20 lg:px-44 my-7'>
    <h2 className='text-center font-bold text-2xl '>Congrats! Course is Ready.</h2>
   
    <CourseBasicInfo course={course} refreshData={()=>console.log()}/>
    <h2 className='mt-3'>Course URL:</h2>
    <h2 className='text-center text-gray-400 p-2 border flex gap-5 items-center'>{process.env.NEXT_PUBLIC_HOST_NAME}/course/{course?.courseId}
    <HiOutlineClipboardDocumentCheck className='cursor-pointer' onClick={()=>{
        navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_HOST_NAME}/course/${course?.courseId}`);
    }}/>
    </h2>

    </div> 
  )
}

export default FinishScreen;