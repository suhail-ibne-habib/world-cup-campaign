import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="text-coral-500 text-3xl font-bold flex items-center">
              <Image src="/logo.svg" alt="Deal 360 Logo" width={180} height={55} className="object-contain" priority />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm flex items-center">
              Products
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm flex items-center">
              Solutions
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm flex items-center">
              Resources
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm">
              Pricing
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 font-medium text-sm">
              About Us
            </Link>
          </nav>
          
          {/* Mobile menu button could go here, but keeping it simple as requested */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 hover:text-gray-900">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
