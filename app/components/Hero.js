'use client';

import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  

  return (
    <div className="text-white flex min-h-screen">
      <Image
        src="/assets/bg-hero.webp"
        className="w-full h-screen object-cover"
        alt="hero"
        width={1920}
        height={1080}
      />
      <div className="absolute top-0 w-full h-screen flex flex-col justify-center items-center">
        <p className="text-white-900 text-4xl p-2 sm:text-5xl md:text-6xl">
          Votre spécialiste
          <br />
        </p>
        <p className="text-white-900 text-2xl p-2 sm:text-3xl md:text-5xl">
          Logistique et Transports
        </p>
        <br />
        <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto lg:md:mx-0 py-3 hover:bg-slate-600 lg:md:w-[300px] lg:md:h-[60px] lg:md:text-xl">
          <Link href="/pages/services">En savoir plus</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
