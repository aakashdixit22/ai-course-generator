import { UserButton } from '@clerk/nextjs';
import React from 'react'
import AddCourse from './_components/AddCourse';
import UsersCourseList from './_components/UsersCourseList';

function Dashboard() {
  return (
    <div> 
    <AddCourse/>
    {/* Display list of courses */}
    <UsersCourseList/>
    

    
    </div>
  )
}

export default Dashboard;