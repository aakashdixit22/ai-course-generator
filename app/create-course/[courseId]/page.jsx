// "use client";
// import { db } from '@/configs/db';
// import { CourseList, Chapters } from '@/configs/schema';
// import { eq, and } from 'drizzle-orm';
// import React, { useEffect, useState } from 'react';
// import { useUser } from '@clerk/nextjs';
// import CourseBasicInfo from './_components/CourseBasicInfo';
// import CourseDetail from './_components/CourseDetail';
// import ChapterList from './_components/ChapterList';
// import { Button } from '@/components/ui/button';
// import LoadingDialog from '../_components/LoadingDialog';
// import { GenerateChapterContent_AI } from '@/configs/AiModel';
// import service from '@/configs/service';
// import { useRouter } from 'next/navigation';

// function CourseLayout({ params }) {
//     const { user } = useUser();
//     const [course, setCourse] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const router = useRouter();

//     useEffect(() => {
//         if (params) GetCourse();
//     }, [params, user]);

//     const GetCourse = async () => {
//         const result = await db.select().from(CourseList).where(
//             and(
//                 eq(CourseList.courseId, params?.courseId),
//                 eq(CourseList.createdBy, user?.primaryEmailAddress?.emailAddress)
//             )
//         );
//         setCourse(result[0]);
//     };

//     const GenerateContent = async () => {
//         if (!course?.courseOutput?.chapters) return;
//         setLoading(true);

//         try {
//             const chapters = course?.courseOutput?.chapters;
//             for (const [index, chapter] of chapters.entries()) {
//                 const prompt = `
//                 {
//                   "chapter": {
//                     "title": "Chapter ${index + 1}: ${chapter.chapterName}",
//                     "sections": [
//                       {
//                         "title": "Introduction",
//                         "explanation": "Provide an introductory explanation for ${chapter.chapterName}.",
//                         "code_example": null
//                       },
//                       {
//                         "title": "Core Concepts",
//                         "explanation": "Explain the core concepts of ${chapter.chapterName} with examples.",
//                         "code_example": null
//                       },
//                       {
//                         "title": "Advanced Details",
//                         "explanation": "Dive deeper into ${chapter.chapterName}, providing practical examples or case studies.",
//                         "code_example": null
//                       }
//                     ]
//                   }
//                 }`;

//                 console.log(`Prompt for Chapter ${index + 1}:`, prompt);

//                 const aiResponse = await GenerateChapterContent_AI.sendMessage(prompt);
//                 const chapterContent = JSON.parse( aiResponse.response.text());

//                 const videoResponse = await service.getVideos(course?.name + ':' + chapter?.chapterName);
//                 const videoId = videoResponse[0]?.id?.videoId || '';

//                 // Save Chapter Content and Video ID
//                 await db.insert(Chapters).values({
//                     chapterId: index,
//                     courseId: course?.courseId,
//                     content: chapterContent,
//                     videoId: videoId
//                 });
//             }

//             setLoading(false);
//             router.replace(`/create-course/${course?.courseId}/finish`);
//         } catch (error) {
//             setLoading(false);
//             console.error('Error generating content:', error);
//         }
//     };

//     return (
//         <div className="mt-10 px-10 md:px-20 lg:px-44 my-7">
//             <h2 className="font-bold text-center text-2xl">Course Layout</h2>
//             <LoadingDialog loading={loading} />
//             <CourseBasicInfo course={course} refreshData={GetCourse} />
//             <CourseDetail course={course} />
//             <ChapterList course={course} refreshData={GetCourse} />
//             <Button className="mt-10" onClick={GenerateContent}>
//                 Generate Course
//             </Button>
//         </div>
//     );
// }

// export default CourseLayout;
// const GenerateContent = async () => {
//   if (!course?.courseOutput?.chapters || !course?.category) return;
//   setLoading(true);

//   try {
//       const chapters = course?.courseOutput?.chapters;
//       const category = course?.category;

//       for (const [index, chapter] of chapters.entries()) {
//           const categorySpecificFields = {
//               Programming: `
//                   "code_example": "Provide a relevant code example for ${chapter?.chapterName}",
//               `,
//               Health: `
//                   "wellness_exercise": "Provide a wellness activity related to ${chapter?.chapterName}",
//               `,
//               Creative: `
//                   "artistic_exercise": "Provide an artistic exercise or creative challenge related to ${chapter?.chapterName}",
//               `
//           };

//           const prompt = `
//           {
//               "chapter": {
//                   "title": "Chapter ${index + 1}: ${chapter?.chapterName}",
//                   "sections": [
//                       {
//                           "title": "Introduction",
//                           "explanation": "Provide an introductory explanation for ${chapter?.chapterName}",
//                           ${categorySpecificFields[category] || ""}
//                       },
//                       {
//                           "title": "Core Concepts",
//                           "explanation": "Explain the core concepts of ${chapter?.chapterName} with examples",
//                           ${categorySpecificFields[category] || ""}
//                       },
//                       {
//                           "title": "Advanced Details",
//                           "explanation": "Dive deeper into ${chapter?.chapterName}, providing practical examples or case studies",
//                           ${categorySpecificFields[category] || ""}
//                       }
//                   ]
//               }
//           }`;

//           const aiResponse = await GenerateChapterContent_AI.sendMessage(prompt);
//           const chapterContent = JSON.parse(aiResponse.response.text());
//           const videoResponse = await service.getVideos(`${course?.name}:${chapter?.chapterName}`);
//           const videoId = videoResponse[0]?.id?.videoId || '';

//           await db.insert(Chapters).values({
//               chapterId: index,
//               courseId: course?.courseId,
//               content: chapterContent,
//               videoId: videoId
//           });
//       }

//       router.replace(`/create-course/${course?.courseId}/finish`);
//   } catch (error) {
//       console.error('Error generating content:', error);
//   } finally {
//       setLoading(false);
//   }
// };

// return (
//   <div className="mt-10 px-10 md:px-20 lg:px-44 my-7">
//       <h2 className="font-bold text-center text-2xl">Course Layout</h2>
//       <LoadingDialog loading={loading} />
//       <CourseBasicInfo course={course} refreshData={GetCourse} />
//       <CourseDetail course={course} />
//       <ChapterList course={course} refreshData={GetCourse} />
//       <Button className="mt-10" onClick={GenerateContent}>
//           Generate Course
//       </Button>
//   </div>
// );
// };

// export default CourseLayout;
"use client";
import { db } from '@/configs/db';
import { CourseList, Chapters } from '@/configs/schema';
import { eq, and } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import CourseBasicInfo from './_components/CourseBasicInfo';
import CourseDetail from './_components/CourseDetail';
import ChapterList from './_components/ChapterList';
import { Button } from '@/components/ui/button';
import LoadingDialog from '../_components/LoadingDialog';
import { GenerateChapterContent_AI } from '@/configs/AiModel';
import service from '@/configs/service';
import { useRouter } from 'next/navigation';

function CourseLayout({ params }) {
  const { user } = useUser(); // Get the user data from Clerk authentication
  const [course, setCourse] = useState([]); // State to hold course data
  const [loading, setLoading] = useState(false); // State to handle loading state
  const router = useRouter(); // Next.js router to navigate to different pages

  // Fetch course data when the component mounts or when params/user change
  useEffect(() => {
    if (params) GetCourse();
  }, [params, user]);

  // Function to fetch course details from the database
  const GetCourse = async () => {
    const result = await db.select().from(CourseList).where(
      and(
        eq(CourseList.courseId, params?.courseId), // Filter by courseId
        eq(CourseList.createdBy, user?.primaryEmailAddress?.emailAddress) // Filter by the logged-in user's email
      )
    );
    setCourse(result[0]); // Set the fetched course data to state
  };

  // Function to generate content for the course and its chapters
  const GenerateContent = async () => {
    if (!course?.courseOutput?.chapters || !course?.category) return; // Ensure course and chapters exist
    setLoading(true); // Set loading state to true

    try {
      const chapters = course?.courseOutput?.chapters;
      const category = course?.category;

      // Iterate over each chapter to generate content dynamically
      for (const [index, chapter] of chapters.entries()) {
        // Define category-specific fields for AI content generation
        const categorySpecificFields = {
          Programming: `
              "code_example": "Provide a relevant code example for ${chapter?.chapterName}",
          `,
          Health: `
              "wellness_exercise": "Provide a wellness activity related to ${chapter?.chapterName}",
          `,
          Creative: `
              "artistic_exercise": "Provide an artistic exercise or creative challenge related to ${chapter?.chapterName}",
          `,
        };

        // Construct the prompt for AI based on chapter and category
        const prompt = `
        {
            "chapter": {
                "title": "Chapter ${index + 1}: ${chapter?.chapterName}",
                "sections": [
                    {
                        "title": "Introduction",
                        "explanation": "Provide an introductory explanation for ${chapter?.chapterName}",
                        ${categorySpecificFields[category] || ""}
                    },
                    {
                        "title": "Core Concepts",
                        "explanation": "Explain the core concepts of ${chapter?.chapterName} with examples",
                        ${categorySpecificFields[category] || ""}
                    },
                    {
                        "title": "Advanced Details",
                        "explanation": "Dive deeper into ${chapter?.chapterName}, providing practical examples or case studies",
                        ${categorySpecificFields[category] || ""}
                    }
                ]
            }
        }`;

        // Call the AI service to generate content for the chapter
        const aiResponse = await GenerateChapterContent_AI.sendMessage(prompt);
        const chapterContent = JSON.parse(aiResponse.response.text()); // Parse the AI response into usable content

        // Fetch related video content from the service (e.g., YouTube)
        const videoResponse = await service.getVideos(`${course?.name}:${chapter?.chapterName}`);
        const videoId = videoResponse[0]?.id?.videoId || ''; // Get the first video ID

        // Save generated chapter content and video ID to the database
        await db.insert(Chapters).values({
            chapterId: index,
            courseId: course?.courseId,
            content: chapterContent,
            videoId: videoId,
        });
      }

      setLoading(false); // Set loading state to false once content generation is complete
      router.replace(`/create-course/${course?.courseId}/finish`); // Redirect to the course finish page
    } catch (error) {
      setLoading(false); // Set loading state to false if there's an error
      console.error('Error generating content:', error); // Log the error
    }
  };

  return (
    <div className="mt-10 px-10 md:px-20 lg:px-44 my-7">
      <h2 className="font-bold text-center text-2xl">Course Layout</h2>
      <LoadingDialog loading={loading} /> {/* Show loading dialog if loading */}
      <CourseBasicInfo course={course} refreshData={GetCourse} /> {/* Show course basic info */}
      <CourseDetail course={course} /> {/* Show detailed course info */}
      <ChapterList course={course} refreshData={GetCourse} /> {/* List chapters */}
      <Button className="mt-10" onClick={GenerateContent}> {/* Button to trigger content generation */}
        Generate Course
      </Button>
    </div>
  );
}

export default CourseLayout;




