import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="text-coral-500 text-3xl font-bold flex items-center">
              <Image src="/logo1.png" alt="Deal 360 Logo" width={180} height={55} className="object-contain" priority />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
