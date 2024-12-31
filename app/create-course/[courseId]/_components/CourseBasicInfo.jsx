import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'
import { HiOutlinePuzzlePiece } from 'react-icons/hi2';
import EditCourseBasicInfo from './EditCourseBasicInfo';
import { useState } from 'react';
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { eq } from 'drizzle-orm';



function CourseBasicInfo({course,refreshData}) {
  const [selectedFile,setSelectedFile] = useState();
  const [uploadedImage, setUploadedImage] = useState();

  const onFileSelect =async (e) => {
    
    const file = e.target.files[0];
    if (!file) return;

    setSelectedFile(URL.createObjectURL(file));

    // Prepare the form data for Cloudinary
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'first_time'); // Replace with your actual upload preset
    formData.append('cloud_name', 'dg7jwxsj2'); // Replace with your actual Cloudinary cloud name

    try {
      // Upload the file to Cloudinary
      const response = await fetch('https://api.cloudinary.com/v1_1/dg7jwxsj2/image/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.secure_url) {
        setUploadedImage(data.secure_url);
        console.log('Image uploaded successfully:', data.secure_url);
        await db.update(CourseList).set({
          courseBanner:data.secure_url

      }).where(eq(CourseList.courseId,course?.courseId));
      } else {
        console.error('Image upload failed:', data);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
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