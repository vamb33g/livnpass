'use client';

import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="text-white flex flex-col min-h-screen">
      <Image
        src="/assets/hero3.png"
        className="w-full h-screen object-cover"
        alt="hero"
        width={1920}
        height={1080}
      />
      <Image
        src="/assets/20m3-t.png"
        className="absolute right-0 opacity-60 md:opacity-100 lg:w-1/3 animate-fade-left animate-once animate-ease-in animate-delay-900"
        alt="20m3"
        width={500}
        height={500}
      />
      <Image
        src="/assets/3008-t.png"
        className="absolute bottom-0 mr-24 opacity-100 md:opacity-100 lg:w-1/3 animate-fade-right animate-once animate-ease-in animate-delay-900"
        alt="3008"
        width={500}
        height={500}
      />

      <div className="absolute top-0 w-full h-screen flex flex-col justify-center items-center z-20 ">
        <br />

        <p className="p-4 text-center font-mono animate-jump-in animate-once animate-duration-700 animate-delay-700 animate-ease-in animate-fill-backwards">
          <span className="text-5xl md:text-6xl lg:text-7xl p-4 font-bold uppercase outline-black ">
            Logistique{' '}
          </span>

          <br />

          <span className="text-4xl md:text-5xl lg:text-6xl p-4">et </span>

          <br />
          <br />

          <span className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase">Transports</span>
        </p>
        <br />
        <button className="animate-pulse animate-infinite animate-ease-in animate-fill-backwards bg-gradient-to-l from-gray-600 via-gray-500 to-gray-400 text-white w-[200px] rounded-md font-medium my-6 mx-auto lg:md:mx-0 py-3 hover:bg-gradient-to-r  lg:md:w-[200px] lg:md:h-[60px] lg:md:text-xl ">
          <Link href="/pages/services">En savoir plus </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
