import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useContext } from 'react';
import { UserInputContext } from '@/app/_context/UserInputContext';



function TopicDescription() {
  const {userCourseInput,setUserCourseInput}=useContext(UserInputContext);
  const handleInputChange=(fieldName,value)=>{
    setUserCourseInput((prev)=>({...prev,[fieldName]:value}))
  }

  return (
    <div className='mx-20 lg:mx-44'>
        {/*topic and description*/}
        <div className='mt-5'>
            <label>Write the topic for which to generate a course </label>
            <Input placeholder={"Enter the topic"}
            defaultValue={userCourseInput?.topic} onChange={(e)=>handleInputChange('topic',e.target.value)} />

        </div>
        <div className='mt-5'>
            <label>Write the description for the topic</label>
            <Textarea placeholder={"Enter the description"} 
            defaultValue={userCourseInput?.description}
            onChange={(e)=>handleInputChange('description',e.target.value)}
            />
        </div>
        
        
    </div>
  )
}

export default TopicDescription