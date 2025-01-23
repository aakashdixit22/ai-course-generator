'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useClerk } from '@clerk/nextjs';

export default function Logout() {
  const { signOut } = useClerk();
  const router = useRouter();

  useEffect(() => {
    signOut(() => {
      router.push('/');  // Changed from '/sign-in' to '/'
    });
  }, [signOut, router]);

  return (
    <div>
      <p className="text-lg font-semibold text-gray-700">Logging out...</p>
    </div>
  );
}
