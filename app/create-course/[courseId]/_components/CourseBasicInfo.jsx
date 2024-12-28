import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'
import { HiOutlinePuzzlePiece } from 'react-icons/hi2';

function CourseBasicInfo({course}) {
  return (
    <div className='p-10 border rounded-xl shadow-sm mt-5'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
        <div>
        <h2 className='font-bold text-3xl'>{course?.courseOutput?.courseName}</h2>
        <p className='text-sm mt-3 text-gray-400 '>{course?.courseOutput?.description}</p>
        <h2 className='font-medium mt-3 flex gap-2 items-center text-primary'><HiOutlinePuzzlePiece/>{course?.category}</h2>
        <Button className='w-full mt-20'> Start Corse</Button>
        </div>
        <div>
            <Image src={'/5437683.jpg'}  className='rounded-xl object-cover ' width={450} height={450}/>
        </div>
        
        
    </div>
    
    </div>
  )
}

export default CourseBasicInfo;