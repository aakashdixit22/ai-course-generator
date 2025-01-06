import { UserButton } from '@clerk/nextjs';
import React from 'react'
import AddCourse from './_components/AddCourse';
import UsersCourseList from './_components/UsersCourseList';

function Dashboard() {
  return (
    <div> 
    <AddCourse/>
    
    <UsersCourseList/>
    

    
    </div>
  )
}

export default Dashboard;