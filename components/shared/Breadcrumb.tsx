'use client';

import { BellDot, Home, Settings, UserRound } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Input } from '../ui/input';

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname
    .split('/')
    .filter((segment) => segment && isNaN(Number(segment)));

  // Capitalize each segment
  const capitalizedSegments = pathSegments.map(
    (segment) => segment.charAt(0).toUpperCase() + segment.slice(1)
  );

  return (
    <div className='flex justify-between mt-4 my-2 dark:bg-[#161B22] px-8 py-2 rounded-md w-full '>
    <div className="flex  gap-[3px] font-medium items-center  ">
      <Home size={20} color='#212121'/>
      {capitalizedSegments.map((segment, index) => (
        <div key={index} className="flex items-center text-[#212121]">
          <div className='mx-4'> / </div>
          <div className="text-xs">{segment}</div>
        </div>
      ))}
      
    </div>

    <div className='flex justify-center items-center gap-x-5 text-black'>
      <Input type="text" placeholder="Search" className='h-10 w-[230px]'/>
    <UserRound/>
    
    <Settings/><BellDot/>
    </div>
    </div>
  );
};

export default Breadcrumb;
