'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import pub from '/public/assets/livnpass.png';
import pub2 from '/public/assets/livnpass2.png';
import { InView, useInView } from 'react-intersection-observer';


const Pub = () => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
  });
  
  return (
    
    <div className="flex flex-col md:flex-row lg:w-1/2" ref={ref}>
      <Image
        alt="pub"
        src={pub2}
        sizes="100vw"
        style={{
          width: 'auto',
          height: 'auto',
        }}
        className='motion-safe:animate-fade-right'
      />
      
      <Image
        alt="pub"
        src={pub}
        sizes="100vw"
        style={{
          width: 'auto',
          height: 'auto',
        }}
       className="animate-fade-left"
      />
    </div>
  );
};

export default Pub;
