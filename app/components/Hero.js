'use client';

import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="text-white flex min-h-screen">
      <Image
        src="/assets/storage.webp"
        className="w-full h-screen object-cover"
        alt="hero"
        width={1920}
        height={1080}
      />

      <div className="absolute top-0 w-full h-screen flex flex-col justify-center items-center">
        <p className="text-white-900 text-4xl p-2 sm:text-4xl  font-semi-bold text-outline-black">
          Votre spécialiste
        </p>
        <br />
        <p className="text-white-900 text-2xl p-2  md:text-5xl text-center md:font-bold font-rubik">
          <span className="text-5xl p-4 md:mr-96 md:text-9xl">Logistique </span>
          <br />
          <span className="text-4xl md:text-6xl">et </span>
          <br />
          <span className="text-5xl md:ml-96 md:text-9xl">Transports</span>
        </p>
        <br />
        <button className="bg-gradient-to-l from-gray-600 via-gray-500 to-gray-400 text-white w-[200px] rounded-md font-medium my-6 mx-auto lg:md:mx-0 py-3 hover:bg-gradient-to-r  lg:md:w-[200px] lg:md:h-[60px] lg:md:text-xl">
          <Link href="/pages/services">En savoir plus </Link>
        </button>

        <button className="bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 text-white w-[200px] rounded-md font-medium my-6 mx-auto lg:md:mx-0 py-3 hover:bg-gradient-to-l lg:md:w-[200px] lg:md:h-[60px] lg:md:text-xl">
          <Link href="/pages/services">Obtenir un devis</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
