// import React from 'react'
// import Image from 'next/image'
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';

// function Header() {
//   return (
//     <div className='flex flex-1 flex-row justify-between items-center gap-3 p-5 s bg-slate-50 w-full z-50'>
//     <Image src={'/logo.svg'} alt="logo" width={150} height={150} />
//         <div className='flex flex-row items-center gap-10  '>  
//         <p className='text-2xl text-gray-400'>home</p>
//         <p>about</p>
//         <p>contact</p>

//         </div>

        
        
        
        
//         <Link href={'/dashboard'}>
//        <Button >Get started</Button>
//         </Link>

//     </div>
//   )
// }

// export default Header;
// import React from 'react';
// import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';

// function Header() {
//   return (
//     <div className='flex flex-row justify-between items-center gap-3 p-5 bg-white w-full fixed top-0 left-0 right-0 z-50 shadow-md'>
//       {/* Logo */}
//       <Image src={'/logo.svg'} alt="logo" width={150} height={150} />

//       {/* Navigation */}
//       <div className='flex flex-row items-center gap-10'>
//         <p className='text-2xl'>Home</p>
//         <p>About</p>
//         <p>Contact</p>
//       </div>

//       {/* Get Started Button */}
//       <Link href={'/dashboard'}>
//         <Button>Get Started</Button>
//       </Link>
//     </div>
//   );
// }

// export default Header;



// import React from 'react';
// import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';

// function Header() {
//   return (
//     <div className="flex flex-row justify-between items-center p-5 bg-white w-full fixed top-0 left-0 right-0 z-50 shadow-md transition-all duration-300">
//       {/* Logo */}
//       <div className="hover:scale-105 transition-transform duration-300">
//         <Image src={'/logo.svg'} alt="logo" width={150} height={150} />
//       </div>

//       {/* Navigation */}
//       <div className="flex flex-row items-center gap-8 text-gray-700 font-medium">
//         <Link href="/" className="text-lg hover:text-blue-500 transition-colors duration-300">
//           Home
//         </Link>
//         <Link href="/about" className="text-lg hover:text-blue-500 transition-colors duration-300">
//           About
//         </Link>
//         <Link href="/contact" className="text-lg hover:text-blue-500 transition-colors duration-300">
//           Contact
//         </Link>
//       </div>

//       {/* Get Started Button */}
//       <Link href="/dashboard">
//         <Button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md">
//           Get Started
//         </Button>
//       </Link>
//     </div>
//   );
// }

// export default Header;

// "use client";
// import React from 'react';
// import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';

// function Header() {
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ 
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//   };

//   return (
//     <div className="flex flex-row justify-between items-center p-5 bg-white w-full fixed top-0 left-0 right-0 z-50 shadow-md transition-all duration-300">
//       {/* Logo */}
//       <div className="hover:scale-105 transition-transform duration-300">
//         <Image src={'/logo.svg'} alt="logo" width={150} height={150} />
//       </div>

//       {/* Navigation */}
//       <div className="flex flex-row items-center gap-8 text-gray-700 font-medium">
//         <Link href="/" className="text-lg hover:text-blue-500 transition-colors duration-300">
//           Home
//         </Link>
//         <button 
//           onClick={() => scrollToSection('about')}
//           className="text-lg hover:text-blue-500 transition-colors duration-300"
//         >
//           About
//         </button>
//         <button 
//           onClick={() => scrollToSection('contact')}
//           className="text-lg hover:text-blue-500 transition-colors duration-300"
//         >
//           Contact
//         </button>
//       </div>

//       {/* Get Started Button */}
//       <Link href="/dashboard">
//         <Button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md">
//           Get Started
//         </Button>
//       </Link>
//     </div>
//   );
// }

// export default Header;


"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-row justify-between items-center p-4 md:p-5 bg-white w-full  top-0 left-0 right-0 z-50 shadow-md transition-all duration-300">
      {/* Logo */}
      <div className="hover:scale-105 transition-transform duration-300">
        <Image src={'/logo.svg'} alt="logo" width={120} height={120} className="w-auto h-8 md:h-10" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row items-center gap-8 text-gray-700 font-medium">
        <Link href="/" className="text-lg hover:text-blue-500 transition-colors duration-300">
          Home
        </Link>
        <button 
          onClick={() => scrollToSection('about')}
          className="text-lg hover:text-blue-500 transition-colors duration-300"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="text-lg hover:text-blue-500 transition-colors duration-300"
        >
          Contact
        </button>
      </div>

      {/* Desktop Get Started Button */}
      <div className="hidden md:block">
        <Link href="/dashboard">
          <Button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md">
            Get Started
          </Button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-gray-700"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[64px] bg-white z-40 md:hidden">
          <div className="flex flex-col items-center gap-6 p-8">
            <Link 
              href="/" 
              className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300"
            >
              Contact
            </button>
            
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;

