'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillCar } from 'react-icons/ai';

const Stockage = () => {
  const [numTel, setNumTel] = useState(false);
  const [numTel2, setNumTel2] = useState(false);
  const [numTelVTC, setNumTelVTC] = useState(false);
  const [numTel3, setNumTel3] = useState(false);
  const [numTel4, setNumTel4] = useState(false);
  const [numTel5, setNumTel5] = useState(false);

  return (
    <>
      <div className="pt-10 px-4 mt-16 z-40 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600">
        <h1 className="text-3xl font-bold mb-8">Nos Services</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow text-black hover:-translate-y-2 ">
            <h2 className="text-xl font-bold mb-4">Livraison de meubles, cuisines et colis</h2>
            <p className="text-gray-600 mb-4">
              Nous comprenons que la livraison de meubles, de cuisines et de colis est une étape
              importante pour vous. C'est pourquoi nous nous engageons à assurer une livraison
              sécurisée et ponctuelle.
            </p>
            <span className="font-bold cursor-pointer hover:text-slate-500">
              🚛&nbsp; : &nbsp;
              {numTel ? (
                '07 62 13 32 25'
              ) : (
                <button
                  onClick={() => setNumTel(true)}
                  className="relative inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                >
                  Afficher le numéro
                </button>
              )}
            </span>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-black hover:-translate-y-2">
            <h2 className="text-xl font-bold mb-4">Service de messagerie</h2>
            <p className="text-gray-600 mb-4">
              Besoin d'envoyer des colis de manière rapide et fiable ? Notre service de messagerie
              est là pour vous. Nous nous assurons que vos colis soient traités avec la plus grande
              attention et livrés dans les délais impartis.
            </p>

            <span className="font-bold cursor-pointer hover:text-slate-500">
              📦&nbsp; : &nbsp;
              {numTel2 ? (
                '07 62 13 32 25'
              ) : (
                <button
                  onClick={() => setNumTel2(true)}
                  className="relative inline-flex items-center justify-center p-1 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                >
                  Afficher le numéro
                </button>
              )}
            </span>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-black hover:-translate-y-2">
            <h2 className="text-xl font-bold mb-4">Transport de personnes</h2>
            <p className="text-gray-600 mb-4">
              Pour vos besoins de transport de personnes, nous proposons un service de chauffeurs
              VTC expérimentés et professionnels. Que ce soit pour un déplacement professionnel ou
              personnel, nos chauffeurs vous offriront un trajet confortable et sécurisé.
            </p>
            
              
              <Link href={'https://bonvtc.fr/brest-thierry-vtc-29'}>
              <span className="font-bold cursor-pointer hover:text-slate-500">
                VTC : Contacter Thierry Schmidt
              </span>
              
            </Link>
            <div className='flex'>
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
              )} <br /></div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-black hover:-translate-y-2">
            <h2 className="text-xl font-bold mb-4">Livraisons urgentes et express</h2>
            <p className="text-gray-600 mb-4">
              Nous comprenons que certaines situations nécessitent une livraison rapide. C'est
              pourquoi nous proposons des services de livraisons urgentes et express pour répondre à
              vos besoins dans les délais les plus courts possibles.
            </p>
            <span className="font-bold cursor-pointer hover:text-slate-500">
              🚀 : 07 62 13 32 25
            </span>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-black hover:-translate-y-2">
            <h2 className="text-xl font-bold mb-4">Stockage sécurisé</h2>
            <p className="text-gray-600 mb-4">
              En plus de nos services de livraison et de transport, nous proposons également des
              solutions de stockage sécurisées. Si vous avez besoin de stocker temporairement vos
              biens, nous mettons à votre disposition des installations de stockage fiables et
              sûres.
            </p>
            <span className="font-bold cursor-pointer hover:text-slate-500">
              🔒 : 07 62 13 32 25
            </span>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-black hover:-translate-y-2">
            <h2 className="text-xl font-bold mb-4">Service personnalisé</h2>
            <p className="text-gray-600 mb-4">
              Chez Liv&Pass Transports, notre objectif est de vous fournir des services de qualité
              supérieure. Nous nous engageons à respecter les délais, à assurer la sécurité de vos
              biens et à vous offrir une expérience client exceptionnelle à chaque étape.
              Contactez-nous dès maintenant pour en savoir plus sur nos services et pour bénéficier
              d'une solution sur mesure répondant à vos besoins spécifiques.
            </p>
            <span className="font-bold cursor-pointer hover:text-slate-500">
              🚛 : 07 62 13 32 25
            </span>
          </div>
        </div>
      </div>
      <div className="absolute">
        <Image
          src="/assets/storage.webp"
          alt="livraison"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </>
  );
};

export default Stockage;
