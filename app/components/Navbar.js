'use client';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="z-50 flex justify-between h-240mx-auto p-4 text-white text-xl fixed top-0 left-0 w-full bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400">
      <h1 className={`w-full text-3xl font-bold text-[black] ${nav ? 'hidden' : ''}`}>
        {!toggle | !nav ? (
          <Link href={'/'}>
            <Image
              src="/assets/logo-lp.png"
              alt=""
              className="w-60 h-auto"
              width={240}
              height={60}
            />
          </Link>
        ) : (
          'hidden'
        )}
      </h1>
      <ul className="hidden md:flex">
        <Link href={'/'}>
          <li className="p-4 cursor-pointer  hover:text-slate-300 mx-3">Accueil</li>
        </Link>
        <Link href={'/pages/services'}>
          <li className="p-4 cursor-pointer  hover:text-slate-300 mx-3 whitespace-nowrap">Nos Services</li>
        </Link>
        <Link href={'/pages/about'}>
          <li className="p-4 cursor-pointer hover:text-slate-300 whitespace-nowrap mx-3">
            Qui sommes-nous ?
          </li>
        </Link>
        <Link href={'/pages/contact'}>
          <li className="p-4 cursor-pointer hover:text-slate-300 mx-3 whitespace-nowrap">
            Contactez-nous
          </li>
        </Link>
      </ul>
      <div
        onClick={handleNav}
        className="block md:hidden cursor-pointer"
      >
        {nav ? (
          <AiOutlineClose
            size={30}
            onClick={() => setToggle(false)}
          />
        ) : (
          <AiOutlineMenu
            size={30}
            onClick={() => setToggle(true)}
          />
        )}
      </div>
      <ul
        className={
          nav ? 'left-0 top-0 w-[100%] border-r  ease-in-out duration-500 ' : 'hidden'
        }
      >
        <Link
          href={'/'}
          onClick={() => setNav(false)}
        >
          <li className="p-4 border-b border-gray-600 cursor-pointer text-center text-xl bg-slate-400">
            Accueil
          </li>
        </Link>
        <Link
          href={'/pages/services'}
          onClick={() => setNav(false)}
        >
          <li className="p-4 border-b border-gray-600 cursor-pointer text-center text-xl bg-slate-400">
            Nos services
          </li>
        </Link>

        <Link
          href={'/pages/about'}
          onClick={() => setNav(false)}
        >
          <li className="p-4 border-b border-gray-600 cursor-pointer  text-center text-xl bg-slate-400">
            Qui sommes-nous ?
          </li>
        </Link>
        <Link
          href={'/pages/contact'}
          onClick={() => setNav(false)}
        >
          <li className="p-4 border-b border-gray-600 cursor-pointer  text-center text-xl bg-slate-400">
            Contactez-nous
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
