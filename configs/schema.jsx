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


})