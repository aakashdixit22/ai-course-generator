import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'
import { HiOutlinePuzzlePiece } from 'react-icons/hi2';
import EditCourseBasicInfo from './EditCourseBasicInfo';
import { useState } from 'react';
import { ref } from 'firebase/storage';

function CourseBasicInfo({course,refreshData}) {
  const [selectedFile,setSelectedFile] = useState();

  const onFileSelect = (e) => {
    
    const file = e.target.files[0];
    setSelectedFile(URL.createObjectURL(file));
    
  }
  return (
    <div className='p-10 border rounded-xl shadow-sm mt-5'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
        <div>
        <h2 className='font-bold text-3xl'>{course?.courseOutput?.courseName}<EditCourseBasicInfo course={course} refreshData={()=>refreshData(true)}/></h2>
        <p className='text-sm mt-3 text-gray-400 '>{course?.courseOutput?.description}</p>
        <h2 className='font-medium mt-3 flex gap-2 items-center text-primary'><HiOutlinePuzzlePiece/>{course?.category}</h2>
        <Button className='w-full mt-20'> Start Corse</Button>
        </div>
        <div>
             <label htmlFor='upload-image' className='cursor-pointer'>
            <Image src={selectedFile?selectedFile:'/5437683.jpg'}  className='rounded-xl object-cover ' width={350} height={350}/>
            <input type='file' id='upload-image' className='opacity-0'
              onChange={onFileSelect}
            />
            </label>
        </div>
        
        
    </div>
    
    </div>
  )
}

export default CourseBasicInfo;