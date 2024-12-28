"use client";
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { eq,and } from 'drizzle-orm';
import React, { use } from 'react'
import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useState } from 'react';
import CourseBasicInfo from './_components/CourseBasicInfo';
import CourseDetail from './_components/CourseDetail';
import ChapterList from './_components/ChapterList';
//basically made like /create-course/3242342 or /create-course/2342342 it will route to same page of that course
//get the course id by passing as params
function CourseLayout({params}) {
    const {user}=useUser();
    const [course,setCourse]=useState([]);
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
    <div className='mt-10 px-7 md:px-20 lg:px-44'>
    <h2 className='font-bold text-center text-2xl'> CourseLayout</h2>

    {/*Baic Info */}
    <CourseBasicInfo course={course}/>


    {/*Course Content */}
    <CourseDetail course={course}/>


    {/*List Of lessons */}
    <ChapterList course={course}/>
    </div>
  )
}

export default CourseLayout;