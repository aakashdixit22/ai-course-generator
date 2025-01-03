import React from 'react'
import { HiOutlineChartBar } from 'react-icons/hi2'
import { HiOutlineClock } from 'react-icons/hi2'
import { HiOutlineBookOpen } from 'react-icons/hi2'
import { HiOutlinePlayCircle } from 'react-icons/hi2'

function CourseDetail({course}) {
  return (
    <div className='border p-6 rounded-xl shadow-sm mt-5'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 '>
          <div className='flex gap-2'>
          <HiOutlineChartBar className='text-4xl text-primary'/>
          <div>
            <h2 className='text-sm text-gray-400'>Skill Level</h2>
            <h2 className='font-medium text-lg'>{course?.difficulty}</h2>
          </div>
        </div>
        <div className='flex gap-2'>
          <HiOutlineClock className='text-4xl text-primary'/>
          <div>
            <h2 className='text-sm text-gray-400'>Duration</h2>
            <h2 className='font-medium text-lg'>{course?.courseOutput?.duration}</h2>
          </div>
        </div>
        <div className='flex gap-2'>
          <HiOutlineBookOpen className='text-4xl text-primary'/>
          <div>
            <h2 className='text-sm text-gray-400'>No.Of Chapters</h2>
            <h2 className='font-medium text-lg'>{course?.courseOutput?.noOfChapters}</h2>
          </div>
        </div>
        <div className='flex gap-2'>
          <HiOutlinePlayCircle className='text-4xl text-primary'/>
          <div>
            <h2 className='text-sm text-gray-400'>Video Included</h2>
            <h2 className='font-medium text-lg'>{course?.includeVideo}</h2>
          </div>
        </div>
        </div>
        
    </div>
  )
}

export default CourseDetail