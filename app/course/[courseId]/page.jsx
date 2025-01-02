"use client";
import React, { useEffect } from 'react'

import { db } from '@/configs/db';
import { and, eq } from 'drizzle-orm';
import { CourseList } from '@/configs/schema';
import { useState } from 'react';
import CourseBasicInfo from '@/app/create-course/[courseId]/_components/CourseBasicInfo';
import Header from '@/app/_components/Header';
import CourseDetail from '@/app/create-course/[courseId]/_components/CourseDetail';
import ChapterList from '@/app/create-course/[courseId]/_components/ChapterList';

function Course({params}) {

    const[course,setCourse]=useState();


    useEffect(() => {
        params && GetCourse();
    }, [params]);
    const GetCourse = async () => {

        
        //get courseid frst
        const result = await db.select().from(CourseList).where(and(eq(CourseList.courseId, params?.courseId)));
        setCourse(result[0]);
        console.log(result);
    }
  return (
    <div>
    <Header/>
    <div className='px-10 md:px-20 lg:px-44 my-7'>
        <CourseBasicInfo course={course} edit={false}/>
        <CourseDetail course={course}/>
        <ChapterList course={course} edit={false}/>
    </div>
    </div>
  )
}

export default Course;