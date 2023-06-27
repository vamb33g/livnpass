'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import pub from '/public/assets/livnpass.png';
import pub2 from '/public/assets/livnpass2.png';


const Pub = () => {
  
  return (
    
    <div className="flex flex-col md:flex-row lg:w-1/2">
      <Image
        alt="pub"
        src={pub2}
        sizes="100vw"
        style={{
          width: 'auto',
          height: 'auto',
        }}
        className='animate-fade-right '
      />
      
      <Image
        alt="pub"
        src={pub}
        sizes="100vw"
        style={{
          width: 'auto',
          height: 'auto',
        }}
       className="animate-fade-left md:w-1/2"
      />
    </div>
  );
};

export default Pub;
