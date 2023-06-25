'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Analytics = () => {
  return (
    <div className="w-full bg-white py-4 px-4 min-h-screen">
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <div className="max-w-screen mx-auto grid md:grid-cols-2 pt-8">
        
          <div className="flex flex-col justify-center">
            <div className="p-8 bg-slate-400 text-center shadow-md rounded-lg pb-4">
              <p className="text-lg mb-2">
                Fondée en 2016, notre entreprise offre deux services principaux :
              </p>
              <ul className="list-disc list-inside text-left mb-4">
                <li className="mb-2">
                  <strong>Transport de marchandises</strong> dirigé par
                  <br />
                  M. ECHARKI Abdelhakim
                </li>
                <li>
                  <strong>Transport de personnes</strong> sous la direction de M. SCHMIDT Thierry
                </li>
              </ul>
              <p className="text-lg mb-4">
                Nous nous engageons à la satisfaction client, le respect des délais, le soin apporté
                aux marchandises, et un service clientèle réactif.
              </p>
            </div>
            <button className=" bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 text-white w-[200px] rounded-md font-medium my-6 mx-auto lg:md:mx-0 py-3 hover:bg-gradient-to-l lg:md:w-[200px] lg:md:h-[60px] lg:md:text-xl">
              <Link href={'/pages/about'}>En savoir plus</Link>
            </button>
          </div>
        
       
          <img
            src="/assets/about.png"
            alt="Laptop"
            className="w-full h-full object-cover"
          />
     
      </div>
    </div>
  );
};

export default Analytics;
