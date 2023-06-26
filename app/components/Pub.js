'use client';
import React from 'react';
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
      />
      <Image
        alt="pub"
        src={pub}
        sizes="100vw"
        style={{
          width: 'auto',
          height: 'auto',
        }}
      />
      
      {/* <Image src="/assets/livnpass.png" alt="Pub" width={1000} height={900} className=" max-h-screen"/> */}
    </div>
  );
};

export default Pub;
