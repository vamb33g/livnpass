'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AiFillCar } from 'react-icons/ai';
import { SiWebmoney } from 'react-icons/si';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Analytics = () => {
  const [numTelVTC, setNumTelVTC] = useState(false);
  return (
    <div className="w-full bg-white py-10 px-4 min-h-screen">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
      <motion.div
            variants={fadeIn('down', 0.1)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
          ><img
          src="/assets/laptop.jpg"
          alt="Laptop"
        /></motion.div>
        
        <div className="flex flex-col justify-center">
        
          <p className="text-[#00df9a] font-bold text-3xl p-2 sm:text-5xl md:text-6xl mb-5">
            Liv&Pass Transports
          </p>
          <div className="sm:text-xl ">
            <p className="text-black p-2 mb-5">
              Votre partenaire de confiance pour des livraisons de qualité et un transport de
              personnes sûr.
            </p>
            <ul className="flex flex-col text-slate-900 p-2 mb-5">
              <li>🚛 Livraisons de meubles, cuisines</li>
              <li>📦 Service de messagerie</li>
              <li>🔒 Solution de stockage sécurisée</li>
              <br />
              <li>🚀 Livraisons urgentes et express disponibles</li>
              <br />
              <li>
                👥 Transport de personnes <br />
                <br />
                <Link href={'https://bonvtc.fr/brest-thierry-vtc-29'}>
                  <span className="font-bold cursor-pointer hover:text-slate-500">
                    VTC : Contacter Thierry Schmidt
                  </span>
                  <br />
                  <div className='flex'>
                  <SiWebmoney className="w-6 h-6 text-green-700" /> &nbsp; : &nbsp;
                  <span className='border-b-2 border-blue-700 cursor-pointer text-blue-700'>site web vtc-thierry</span></div>
                  <div className='p-1'></div>
                </Link>
                <div className="flex">
                  <AiFillCar className="w-6 h-6 text-slate-600 " /> &nbsp; : &nbsp;
                  {numTelVTC ? (
                    '07 69 41 58 87'
                  ) : (
                    <button
                      onClick={() => setNumTelVTC(true)}
                      className="relative inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      Afficher le numéro
                    </button>
                  )}{' '}
                  <br />
                </div>
              </li>
            </ul>
            <ul className="flex flex-col text-black p-2 mb-5">
              <li>✅ 100% de satisfaction client.</li>
              <li>🕒 Respect des délais convenus.</li>
              <li>🚀 Livraisons rapides et sécurisées.</li>
            </ul>
          </div>
          <button className="bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 text-white w-[200px] rounded-md font-medium my-6 mx-auto lg:md:mx-0 py-3 hover:bg-gradient-to-l lg:md:w-[200px] lg:md:h-[60px] lg:md:text-xl">
            <Link href={'/pages/about'}>NOUS DÉCOUVRIR</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
