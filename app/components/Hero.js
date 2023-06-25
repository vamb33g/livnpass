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
        <p className="text-white-900 text-4xl p-2  font-semi-bold">Votre spécialiste</p>

        <br />

        <p className="p-4 text-center">
          <span className="text-5xl md:text-6xl lg:text-7xl p-4 font-semibold uppercase ">
            Logistique{' '}
          </span>

          <br />

          <span className="text-4xl md:text-5xl lg:text-6xl p-4">et </span>

          <br />
          <br />

          <span className="text-5xl md:text-6xl lg:text-7xl font-semibold uppercase">
            Transports
          </span>
        </p>
        <br />
        <button className="bg-gradient-to-l from-gray-600 via-gray-500 to-gray-400 text-white w-[200px] rounded-md font-medium my-6 mx-auto lg:md:mx-0 py-3 hover:bg-gradient-to-r  lg:md:w-[200px] lg:md:h-[60px] lg:md:text-xl">
          <Link href="/pages/services">En savoir plus </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
