import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillCar } from 'react-icons/ai';

const Analytics = () => {
  return (
    <div className="w-full bg-white py-10 px-4 min-h-screen">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          src="/assets/laptop.jpg"
          alt="Laptop"
        />

        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold text-3xl p-2 sm:text-5xl md:text-6xl mb-5">
            Liv&Pass Transports
          </p>
          <div className="sm:text-xl">
            <p className="text-black p-2 mb-5">
              Votre partenaire de confiance pour des livraisons de qualité et un transport de
              personnes sûr.
            </p>
            <ul className="flex flex-col text-slate-900 p-2 mb-5">
              <li>🚛 Livraison de meubles, cuisines</li>
              <li>📦 Service de messagerie</li>
              <li>🔒 Solutions de stockage sécurisées</li>
              <br />
              <li>🚀 Livraisons urgentes et express disponibles</li>
              <br />
              <li>
                👥 Transport de personnes <br />
                <br />
                <Link href={'https://bonvtc.fr/brest-thierry-vtc-29'}>
                  <AiFillCar className="w-6 h-6 text-gray-500 " />{' '}
                  <span className="font-bold cursor-pointer hover:text-slate-500">
                    VTC : Contacter Thierry Schmidt
                  </span>
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col text-black p-2 mb-5">
              <li>✅ 100% de satisfaction client.</li>
              <li>🕒 Respect des délais convenus.</li>
              <li>🚀 Livraisons rapides et sécurisées.</li>
            </ul>
          </div>
          <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto  md:mx-0 py-3 hover:bg-slate-600 md:w-[300px] md:h-[60px] md:text-xl">
            <Link href={'/pages/about'}>NOUS DÉCOUVRIR</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
