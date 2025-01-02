"use client";   
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs'
import Link from 'next/link';
import React from 'react'
import { useContext } from 'react';
import { UsersCourseListContext } from '@/app/_context/UserCourseListContext';
function AddCourse() {
  const{userCourseList,setUserCourseList}=useContext(UsersCourseListContext)
    const {user}=useUser()
  return (
    <div className='flex items-center justify-between'>
        <div>
            <h2 className='text-2xl'>Hello,<span className='font-bold'>{user?.fullName}</span></h2>
            <p className='text-sm text-gray-500'>Create new course with AI,share with your friends</p>
        </div>
        <Link href={userCourseList>=5?'/dashboard/upgrade':'/create-course'}>
        <Button className='font-semibold'>+Create Course</Button>
        </Link>
    </div>
  )
}

export default AddCourse