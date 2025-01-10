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

// import React from 'react';
// import YouTube from 'react-youtube';

// const opts = {
//   playerVars: {
//     autoplay: 0,
//   },
// };

// function ChapterContent({ chapter, content }) {
//   return (
//     <div className="p-3 sm:p-4 md:p-6 w-full max-w-[768px] mx-auto">
//       {/* Chapter Title - Responsive text sizing and spacing */}
//       <div className="space-y-2 mb-6">
//         <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
//           {chapter?.chapterName}
//         </h2>
//         <p className="text-gray-600 text-sm sm:text-base md:text-lg text-center">
//           {chapter?.about}
//         </p>
//       </div>

//       {/* Responsive YouTube Video Container */}
//       <div className="w-full max-w-3xl mx-auto mb-8">
//         <div className="relative w-full pb-[56.25%]">
//           <div className="absolute inset-0">
//             <YouTube 
//               videoId={content?.videoId} 
//               opts={{
//                 ...opts,
//                 width: '100%',
//                 height: '100%',
//               }} 
//               className="rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Content Sections - Responsive layout and spacing */}
//       <div className="space-y-6 max-w-2xl mx-auto">
//         {content?.content?.chapter?.sections?.map((item, index) => (
//           <div 
//             key={index} 
//             className="bg-sky-50 rounded-xl shadow-sm 
//               p-4 sm:p-6 
//               transition-all duration-200 
//               hover:shadow-md hover:bg-sky-100"
//           >
//             {/* Section Title */}
//             <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
//               {item.title}
//             </h3>

//             {/* Section Content */}
//             <p className="text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-wrap mb-4">
//               {item.explanation}
//             </p>

//             {/* Code Example */}
//             {item.code_example?.code ? (
//               <div className="relative group">
//                 <div className="bg-gray-900 text-gray-100 rounded-lg 
//                   p-3 sm:p-4 
//                   overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300"
//                 >
//                   <pre className="text-xs sm:text-sm md:text-base font-mono">
//                     <code className="language-javascript">
//                       {item.code_example.code}
//                     </code>
//                   </pre>
//                 </div>
//               </div>
//             ) : (
//               <p className="text-red-500 text-xs sm:text-sm italic">
//                 No code example available
//               </p>
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
    modestbranding: 1,
    rel: 0,
  },
};

function ChapterContent({ chapter, content }) {
  return (
    <div className="p-4 lg:p-6 w-full max-w-7xl mx-auto">
      {/* Chapter Title */}
      <div className="space-y-3 mb-8">
        <h2 className="text-2xl lg:text-4xl font-bold text-center">
          {chapter?.chapterName}
        </h2>
        <p className="text-gray-600 text-base lg:text-lg text-center max-w-3xl mx-auto">
          {chapter?.about}
        </p>
      </div>

      {/* Enhanced YouTube Container */}
      <div className="w-full max-w-4xl mx-auto mb-10">
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
          <YouTube 
            videoId={content?.videoId} 
            opts={{
              ...opts,
              width: '100%',
              height: '100%',
            }} 
            className="absolute top-0 left-0 w-full h-full"
            iframeClassName="w-full h-full"
          />
        </div>
      </div>

      {/* Improved Content Cards */}
      <div className="grid gap-6 max-w-4xl mx-auto">
        {content?.content?.chapter?.sections?.map((item, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-md 
              p-6 
              transition-all duration-300
              hover:shadow-xl hover:transform hover:-translate-y-1
              border border-gray-100"
          >
            {/* Section Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {item.title}
            </h3>

            {/* Section Content */}
            <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap mb-6">
              {item.explanation}
            </p>

            {/* Code Example */}
            {item.code_example?.code ? (
              <div className="relative">
                <div className="bg-gray-900 text-gray-100 rounded-lg 
                  p-4 
                  overflow-x-auto
                  scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300"
                >
                  <pre className="text-sm font-mono">
                    <code className="language-javascript">
                      {item.code_example.code}
                    </code>
                  </pre>
                </div>
              </div>
            ) : (
              <p className="text-red-500 text-sm italic">
                No code example available
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterContent;



