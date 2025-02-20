import { json, serial, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";


export const CourseList = pgTable('courseList',{
    id:serial('id').primaryKey().notNull(),
    courseId:varchar('courseId').notNull(),
    name:varchar('name').notNull(),
    category:varchar('category').notNull(),
    difficulty:varchar('difficulty').notNull(),
    includeVideo:varchar('includeVideo').notNull().default('Yes'),
    courseOutput:json('courseOutput').notNull(),
    createdBy:varchar('createdBy').notNull(),
    userName:varchar('username'),
    userProfileImage:varchar('userProfileImage'),
    courseBanner:varchar('courseBanner').default('/5437683.jpg'),
   


})

export const Chapters = pgTable('chapters',{
    id:serial('id').primaryKey().notNull(),
    courseId:varchar('courseId').notNull(),
    chapterId:varchar('chapterId').notNull(),
    content:json('content').notNull(),
    videoId:varchar('videoId').notNull(),
}) 