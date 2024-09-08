'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Box,
  Boxes,
  ChevronsRight,
  ClipboardList,
  InfoIcon,
  LayoutDashboard,
  Youtube,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';


const SideBar = () => {
  const activeLink = 'font-semibold text-black bg-[#212121] hover:bg-[#212121]';
  const inactive = 'hover:text-black font-medium hover:bg-[#eeeeee] ';
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  const LINKS = [
    {
      href: '/projects',
      name: 'Projects',
      icon: <Youtube className="h-5 w-5" />,
    },
    {
      href: '/pass',
      name: 'Pass',
      icon: <ClipboardList className="h-5 w-5" />,
    },
    {
      href: '/marketplace',
      name: 'Marketplace',
      icon: <Box className="h-5 w-5" />,
    },
    {
      href: '/lending',
      name: 'Lending',
      icon: <Boxes className="h-5 w-5" />,
    },
  ];

  
  const Secondary_Links = [
    {
      href: '/dashboard',
      name: 'Dashboard',
      icon: <Youtube className="h-5 w-5" />,
    },
    {
      href: '/my-projects',
      name: 'My Projects',
      icon: <ClipboardList className="h-5 w-5" />,
    },
    {
      href: '/vote',
      name: 'Vote',
      icon: <Box className="h-5 w-5" />,
    },
   
  ];
  const Admin = [
    {
      href: '/admin',
      name: 'Admin',
      icon: <Youtube className="h-5 w-5" />,
    },
    
  ];

  const Social_Media = [
    {
      href: '/twitter',
      name: 'Twitter',
      icon: <Youtube className="h-5 w-5" />,
    },
    {
      href: '/discord',
      name: 'Discord',
      icon: <ClipboardList className="h-5 w-5" />,
    },
    {
      href: '/website',
      name: 'Website',
      icon: <Box className="h-5 w-5" />,
    },
    {
      href: '/support',
      name: 'Support',
      icon: <Boxes className="h-5 w-5" />,
    },
  ];



  return (
    <div
      className={`flex h-[calc(100vh - 2rem)] w-full  flex-col overflow-hidden  
      transition-all duration-300 ease-in-out bg-[#ffffff] m-4  rounded-lg ${
        open ? 'max-w-[280px]' : 'max-w-[70px]'
      } border-r`}
    >
      <div className="flex items-center justify-between border-b border-gray-800 p-2.5 max-h-[73px] w-full">
        <Link className="flex items-center gap-2 transition-all w-full" href="#">
          {open ? (
             
              <div className='flex text-[#6f9c9d] text-[24px] font-medium w-full text-center justify-center items-center'>
              fundrazor.
              </div>
             
          ) : (
            <div
              onClick={() => setOpen(!open)}>
               <div className='text-[#6f9c9d]'>
               Fundrazor
               </div>
              </div>
          )}
        </Link>
        
      </div>
      <nav className=" overflow-y-auto mt-2 px-4">
        {LINKS.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={`transition-colors  mx-2  flex flex-row items-center cursor-pointer rounded-md  h-12 text-[16px] px-2  text-[#5d8297] ${
              pathname.includes(link.href) ? activeLink : inactive
            }`}
          >
            {link.icon}
            {open && (
              <span className="ml-4 align-middle inline-block ">
                {link.name}
              </span>
            )}
          </Link>
        ))}
      </nav>
     
      <nav className=" overflow-y-auto mt-1 px-4">
        {Secondary_Links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={`transition-colors  mx-2  flex flex-row items-center cursor-pointer rounded-md  h-12 text-[16px] px-2 p-1 text-[#5d8297] ${
              pathname.includes(link.href) ? activeLink : inactive
            }`}
          >
            {link.icon}
            {open && (
              <span className="ml-4 align-middle inline-block ">
                {link.name}
              </span>
            )}
          </Link>
        ))}
      </nav>
      <nav className=" overflow-y-auto mt-1 px-4">
        {Admin.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={`transition-colors  mx-2  flex flex-row items-center cursor-pointer rounded-md  h-12 text-[16px] px-2  text-[#5d8297] ${
              pathname.includes(link.href) ? activeLink : inactive
            }`}
          >
            {link.icon}
            {open && (
              <span className="ml-4 align-middle inline-block ">
                {link.name}
              </span>
            )}
          </Link>
        ))}
      </nav>
      <nav className=" overflow-y-auto mt-1 px-4">
        {Social_Media.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={`transition-colors  mx-2  flex flex-row items-center cursor-pointer rounded-md  h-12 text-[16px] px-2 p-1 text-[#5d8297] ${
              pathname.includes(link.href) ? activeLink : inactive
            }`}
          >
            {link.icon}
            {open && (
              <span className="ml-4 align-middle inline-block ">
                {link.name}
              </span>
            )}
          </Link>
        ))}
      </nav>
      
    </div>
  );
};

export default SideBar;
