import Link from 'next/link';

const Footer = () => {
  return (
    <div className="w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 border-t-2 border-dotted border-gray-300">
      <div className=" text-center">
        <h1 className="w-full text-xl sm:text-3xl font-bold text-black mb-3">
          LIV&PASS TRANSPORTS
        </h1>
        <ul>
          <Link href={'/'}>
            <li className="py-2 text-md lg:text-xl hover:text-slate-300">Accueil</li>
          </Link>
          <Link href={'/pages/contact'}>
            <li className="py-2 text-md lg:text-xl hover:text-slate-300">Contact</li>
          </Link>
        </ul>
      </div>
      <div className=" text-center">
        <h1 className="w-full text-xl sm:text-3xl font-bold text-black mb-3">
          SOLUTIONS LOGISTIQUE
        </h1>
        <ul>
          <Link href="/pages/services">
            <li className="py-2 text-md lg:text-xl hover:text-slate-300">Transports</li>
          </Link>
          <Link href="/pages/services">
            <li className="py-2 text-md lg:text-xl hover:text-slate-300">Stockage</li>
          </Link>
        </ul>
      </div>
      <div className=" text-center">
        <h1 className="w-full text-xl sm:text-3xl font-bold text-black whitespace-pre-line mb-3">
          <span className="">LIENS </span>
          UTILES
        </h1>
        <ul>
          <Link href="/pages/legal">
            <li className="py-2 text-md lg:text-xl hover:text-slate-300">Mentions légales</li>
          </Link>
          <Link href="/pages/privacy">
            <li className="py-2 text-md lg:text-xl hover:text-slate-300">Politique de confidentialité</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
