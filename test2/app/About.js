import React from 'react';

const About = () => {
    return (
        <div className="p-8 bg-slate-400 text-center shadow-md rounded-lg">
           
            <p className="text-lg mb-2">Créée en 2016, notre entreprise offre deux services principaux :</p>
            <ul className="list-disc list-inside text-left mb-4">
                <li className="mb-2">
                    <strong>Transport de marchandises</strong> dirigé par M. ECHARKI Abdelhakim
                </li>
                <li>
                    <strong>Transport de personnes</strong> sous la direction de M. SCHMIDT Thierry
                </li>
            </ul>
            <p className="text-lg mb-4">Nous nous engageons à la satisfaction client, le respect des délais, le soin apporté aux marchandises, et un service clientèle réactif.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Découvrez nos services
            </button>
        </div>
    );
};

export default About;
