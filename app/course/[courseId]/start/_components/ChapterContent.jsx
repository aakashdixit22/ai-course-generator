// import React from 'react'
// import YouTube from 'react-youtube';
// const opts={
//     height:'390',
//     width:'640',
//     playerVars:{
//         autoplay:0,
//     },
// }

// function ChapterContent({chapter,content}) {
//     console.log(chapter);
//     console.log(content);
//   return (
//     <div className='p-10'>
//         <h2 className='text-2xl font-medium'>{chapter?.chapterName}</h2>
//         <p className='text-gray-500 text-sm'>{chapter?.about}</p>
//         {/* video */}
//         <div className='flex justify-center my-6'>
//         <YouTube  videoId={content?.videoId} opts={opts} />
//         </div>
//         <div className='p-10'>
//             {content?.content?.chapter?.sections?.map((item,index)=>(
//                 <div key={index} className='p-5 bg-sky-100 rounded-md my-5'>
                
//                     <h2 className='text-lg font-medium '>{item.title}</h2>
//                     <p className='text-gray-500 text-sm font-medium'>{item.explanation}</p>
//                     <pre>
//                        <code>{item.code_example.code}</code>
//                     </pre>
                    
                    
//                 </div>
//             ))}
//         </div>
        

//     </div>
//   )
// }

// export default ChapterContent
// import React from 'react';
// import YouTube from 'react-youtube';

// const opts = {
//   height: '390',
//   width: '640',
//   playerVars: {
//     autoplay: 0,
//   },
// };

// function ChapterContent({ chapter, content }) {
//   console.log(chapter);
//   console.log(content);

//   return (
//     <div className="p-10">
//       <h2 className="text-2xl font-medium">{chapter?.chapterName}</h2>
//       <p className="text-gray-500 text-sm">{chapter?.about}</p>
//       {/* video */}
//       <div className="flex justify-center my-6">
//         <YouTube videoId={content?.videoId} opts={opts} />
//       </div>
//       <div className="p-10">
//         {content?.content?.chapter?.sections?.map((item, index) => (
//           <div key={index} className="p-5 bg-sky-100 rounded-md my-5">
//             <h2 className="text-lg font-medium">{item.title}</h2>
//             <p className="text-gray-500 text-sm font-medium whitespace-pre-wrap">{item.explanation}</p>
//             {item.code_example?.code ? (
//                 <div className='bg-black text-white rounded-md mt-3'>
//               <pre>
//                 <code>{item.code_example.code}</code>
//               </pre>
//                 </div>
//             ) : (
//               <p className="text-red-500 text-sm">No code example available</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ChapterContent;




// import React from 'react';
// import YouTube from 'react-youtube';

// const opts = {
//   playerVars: {
//     autoplay: 0,
//   },
// };

// function ChapterContent({ chapter, content }) {
//   return (
//     <div className="p-4 sm:p-6">
//       <h2 className="text-xl sm:text-2xl font-medium">{chapter?.chapterName}</h2>
//       <p className="text-gray-500 text-sm sm:text-base">{chapter?.about}</p>

//       {/* Responsive YouTube Video */}
//       <div className="my-6">
//         <div className="relative w-full aspect-w-16 aspect-h-9">
//           <YouTube videoId={content?.videoId} opts={opts} className="w-full h-full" />
//         </div>
//       </div>

//       {/* Content Sections */}
//       <div className="mt-6">
//         {content?.content?.chapter?.sections?.map((item, index) => (
//           <div key={index} className="p-4 sm:p-5 bg-sky-100 rounded-md my-4">
//             <h3 className="text-lg sm:text-xl font-medium">{item.title}</h3>
//             <p className="text-gray-600 text-sm sm:text-base font-medium whitespace-pre-wrap">
//               {item.explanation}
//             </p>

//             {/* Code Example */}
//             {item.code_example?.code ? (
//               <div className="bg-black text-white rounded-md mt-3 p-3 overflow-x-auto">
//                 <pre className="text-sm sm:text-base">
//                   <code>{item.code_example.code}</code>
//                 </pre>
//               </div>
//             ) : (
//               <p className="text-red-500 text-sm mt-2">No code example available</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ChapterContent;




import React from 'react';
import YouTube from 'react-youtube';

const opts = {
  playerVars: {
    autoplay: 0,
  },
};

function ChapterContent({ chapter, content }) {
  return (
    <div className="p-4 sm:p-6 max-w-screen-md mx-auto w-full overflow-hidden">
      {/* Chapter Title */}
      <h2 className="text-lg sm:text-xl font-medium text-center">{chapter?.chapterName}</h2>
      <p className="text-gray-600 text-sm sm:text-base text-center">{chapter?.about}</p>

      {/* Responsive YouTube Video */}
      <div className="my-4 w-full flex justify-center">
        <div className="relative w-[90%] sm:w-[70%] aspect-w-16 aspect-h-9">
          <YouTube videoId={content?.videoId} opts={opts} className="w-full h-full rounded-lg" />
        </div>
      </div>

      {/* Content Sections */}
      <div className="mt-4 w-[95%] sm:w-[80%] mx-auto">
        {content?.content?.chapter?.sections?.map((item, index) => (
          <div key={index} className="p-3 sm:p-4 bg-sky-100 rounded-md my-3">
            <h3 className="text-md sm:text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-700 text-sm sm:text-base whitespace-pre-wrap">
              {item.explanation}
            </p>

            {/* Code Example */}
            {item.code_example?.code ? (
              <div className="bg-black text-white rounded-md mt-2 p-2 sm:p-3 overflow-x-auto">
                <pre className="text-xs sm:text-sm">
                  <code>{item.code_example.code}</code>
                </pre>
              </div>
            ) : (
              <p className="text-red-500 text-xs sm:text-sm mt-2">No code example available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterContent;



