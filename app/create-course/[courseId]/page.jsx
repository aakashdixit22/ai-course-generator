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
import { Button } from '@/components/ui/button';
import { index } from 'drizzle-orm/mysql-core';
import LoadingDialog from '../_components/LoadingDialog';
import { GenerateChapterContent_AI } from '@/configs/AiModel';
import service from '@/configs/service';
import { Chapters } from '@/configs/schema';
import { useRouter } from 'next/navigation';
//basically made like /create-course/3242342 or /create-course/2342342 it will route to same page of that course
//get the course id by passing as params
function CourseLayout({params}) {
    const {user}=useUser();
    const [course,setCourse]=useState([]);
    const [loading,setLoading]=useState(false);
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

    //generate content for each chapter
    const GenerateContent=async()=>{
      setLoading(true);
      const chapters=course?.courseOutput?.chapters;
      chapters.forEach(async(chapter,index)=>{
        const prompt = "Explain the concept in detail on topic: " + course?.name + ", Chapter: " + chapter?.chapterName + " in JSON format with list of array with field as title, explanation on a give chapter in detail,  Code Example (Code field in <precode> format) if applicable.";
        console.log(prompt);
        if(index==3){
          try{
            let videoId='';
            //Generate a Video URL

            service.getVideos(course?.name+':'+chapter?.chapterName).then((response)=>{
              
              console.log(response);
              videoId=response[0]?.id?.videoId;
              
            })
            //generate chapter content
            const result=await GenerateChapterContent_AI.sendMessage(prompt);
            
            console.log(result?.response?.text());
            const content=JSON.parse(result?.response?.text());
            



            //Save Chapter Content+Video URL
            await db.insert(Chapters).values({
              chapterId:index,
              courseId:course?.courseId,
              content:content,
              videoId:videoId
            })


            setLoading(false);


          }catch(e){
            setLoading(false);
            console.log(e);
          }
          // router.replace('/create-course/'+course?.courseId+'/finish');

        }
      

        
      })
    }

            
    return (
    <div className='mt-10 px-7 md:px-20 lg:px-44'>
    <h2 className='font-bold text-center text-2xl'> CourseLayout</h2>
    <LoadingDialog loading={loading}/>
    

    {/*Baic Info */}
    <CourseBasicInfo course={course} refreshData={()=>GetCourse()}/>


    {/*Course Content */}
    <CourseDetail course={course}/>


    {/*List Of lessons */}
    <ChapterList course={course} refreshData={()=>GetCourse()}/>

    <Button className='mt-10' onClick={GenerateContent}>Generate Course</Button>
    </div>
  )
}

export default CourseLayout;