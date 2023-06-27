'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import pub from '/public/assets/livnpass.png';
import pub2 from '/public/assets/livnpass2.png';

const Pub = () => {
  return (
    <div className="flex flex-col md:flex-row w-screen">
     
        <Image
          alt="pub"
          src="/assets/livnpass2.png"
          width={500}
          height={500}
          className="animate-fade-left w-full md:w-1/2"
        />
        <Image
          alt="pub"
          src="/assets/livnpass.png"
          width={500}
          height={500}
          className="animate-fade-left w-full md:w-1/2"
        />
     
      {/* <div className="w-full">
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
      </div> */}
    </div>
  );
};

export default Pub;
