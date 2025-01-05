import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Header() {
  return (
    <div className='flex flex-row justify-between items-center p-5 shadow-lg bg-slate-50'>
        
        <Image src={'/logo.svg'} alt="logo" width={150} height={150} />
       
        <Link href={'/dashboard'}>
       <Button >Get started</Button>
        </Link>

    </div>
  )
}

export default Header;