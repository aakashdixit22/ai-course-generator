// import React from "react";

// function Hero() {
//   return (
//     <section className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 flex items-center">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
//         <div className="text-center space-y-12">
//           <div className="space-y-4">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
//               <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 AI Course Generator
//               </span>
//               <span className="block text-3xl sm:text-5xl lg:text-6xl mt-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
//                 Custom Learning Paths, Powered By AI.
//               </span>
//             </h1>
            
//             <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-gray-600 leading-relaxed">
//               Unlock personalized education with AI-driven course creation. 
//               Transform your learning journey with custom-tailored content designed just for you.
//             </p>
//           </div>

//           <div className="flex items-center justify-center gap-x-6">
//             <a
//               href="/dashboard"
//               className="relative inline-flex group items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-200 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl hover:-translate-y-1"
//             >
//               <span>Get Started</span>
//               <svg
//                 className="w-5 h-5 ml-2 -mr-1 transition-transform duration-200 transform group-hover:translate-x-1"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M13 7l5 5m0 0l-5 5m5-5H6"
//                 />
//               </svg>
//             </a>
            
//             <a
//               href="#learn-more"
//               className="text-base font-semibold leading-7 text-gray-900 hover:text-gray-600 transition-colors duration-200"
//             >
//               Learn more <span aria-hidden="true">→</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

import React from "react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-4 top-20 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-70"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-100 blur-3xl opacity-70"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mx-auto mb-8 inline-flex animate-bounce items-center rounded-full bg-gray-100 px-4 py-1.5">
            <span className="text-sm font-medium text-gray-900">
              ✨ Powered by Advanced AI
            </span>
          </div>

          {/* Main heading */}
          <h1 className="bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl">
            AI Course Generator
          </h1>
          
          {/* Subheading */}
          <p className="mt-4 text-xl font-semibold text-gray-900 sm:text-2xl">
            Custom Learning Paths, Crafted Just For You
          </p>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience personalized education reimagined. Our AI analyzes your goals,
            learning style, and pace to create the perfect curriculum tailored exactly
            to your needs.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/dashboard"
              className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-gray-900 px-8 py-3 text-lg font-medium text-white transition duration-300 ease-out hover:scale-105 sm:w-auto"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              <span className="relative">Start Learning Now</span>
            </a>
            
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

// import React from "react";

// function Hero() {
//   return (
//     <section className="relative min-h-screen mt-20 bg-white">
//       {/* Abstract Background Pattern */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -right-1/4 top-0 h-96 w-96 rotate-12 rounded-full bg-purple-100"></div>
//         <div className="absolute -left-1/4 bottom-0 h-96 w-96 -rotate-12 rounded-full bg-blue-100"></div>
//         <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-orange-100"></div>
//       </div>

//       {/* Main Content */}
//       <div className="relative">
//         <div className="mx-auto grid max-w-screen-xl gap-8 px-4 py-12 md:grid-cols-2 md:px-8 lg:py-16">
//           {/* Left Column */}
//           <div className="flex flex-col justify-center md:order-2 mt-10">
//             <div className="relative ml-auto w-full max-w-lg">
//               {/* Decorative Elements */}
//               <div className="absolute -right-4 top-4 h-72 w-72 animate-pulse rounded-full bg-gradient-to-r from-purple-200 to-pink-200 blur-3xl"></div>
              
//               {/* Feature Cards */}
//               <div className="relative space-y-4">
//                 <div className="transform rounded-xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
//                   <div className="flex items-center space-x-4">
//                     <div className="rounded-lg bg-purple-100 p-3">
//                       <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
//                       </svg>
//                     </div>
//                     <h3 className="text-lg font-semibold">Personalized Learning</h3>
//                   </div>
//                 </div>

//                 <div className="transform rounded-xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
//                   <div className="flex items-center space-x-4">
//                     <div className="rounded-lg bg-blue-100 p-3">
//                       <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                     </div>
//                     <h3 className="text-lg font-semibold">AI-Powered Insights</h3>
//                   </div>
//                 </div>

//                 <div className="transform rounded-xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
//                   <div className="flex items-center space-x-4">
//                     <div className="rounded-lg bg-orange-100 p-3">
//                       <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//                       </svg>
//                     </div>
//                     <h3 className="text-lg font-semibold">Custom Curriculum</h3>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="flex flex-col justify-center md:order-1">
//             <div className="relative">
//               <div className="absolute -left-4 top-4 h-72 w-72 animate-pulse rounded-full bg-gradient-to-r from-blue-200 to-purple-200 blur-3xl"></div>
//               <div className="relative">
//                 <span className="mb-6 inline-block rounded-full bg-purple-100 px-4 py-1.5 text-sm font-semibold text-purple-800">
//                   Revolutionary AI Learning
//                 </span>
//                 <h1 className="mt-4 text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl">
//                   Learn Smarter,
//                   <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//                     Not Harder
//                   </span>
//                 </h1>
//                 <p className="mt-6 text-lg leading-8 text-gray-600">
//                   Experience education reimagined through AI-powered personalization. Create your perfect learning journey in minutes.
//                 </p>
                
//                 {/* CTAs */}
//                 <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
//                   <a
//                     href="/dashboard"
//                     className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-purple-600 px-8 py-3 text-lg font-medium text-white transition duration-300 ease-out hover:scale-105"
//                   >
//                     <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
//                     <span className="relative flex items-center">
//                       Start Learning
//                       <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                       </svg>
//                     </span>
//                   </a>
                  
//                   <button className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 bg-transparent px-8 py-3 text-lg font-medium text-gray-900 transition hover:border-purple-600 hover:text-purple-600">
//                     Watch Demo
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;