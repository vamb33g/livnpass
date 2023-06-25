import Link from "next/link";

const About = () => {
  return (
    <div className="pt-20 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500">      
      <div className="p-8 md:w-3/4 mx-auto leading-loose text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-white text-center md:text-4xl lg:text-5xl">
          Bienvenue chez Liv&Pass Transports
        </h1>
        <br />
        <p className="mb-6 text-lg">
          Liv&Pass Transports est une société spécialisée dans la livraison de qualité, fondée en
          2016, nous sommes fiers de proposer une gamme
          complète de services de livraison. Notre objectif
          principal est de garantir à nos clients une <span className="font-semibold">satisfaction à 100%</span>.
        </p>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <p className="mb-4">
            Notre entreprise est divisée en deux branches distinctes. Tout d'abord, nous offrons un
            service de <span className="font-semibold uppercase">transport routier de marchandises</span> dirigé par Monsieur ECHARKI Abdelhakim, un
            expert dans le domaine. Grâce à notre flotte de véhicules modernes et à notre équipe de
            conducteurs expérimentés, nous assurons des livraisons rapides, sûres et efficaces pour
            répondre à tous vos besoins en matière de transport de marchandises.
          </p>
          <p className="mb-4">
            En plus de notre activité de transport de marchandises, nous proposons également un
            service de <Link href='https://bonvtc.fr/brest-thierry-vtc-29'><span className="font-semibold uppercase">transport de personnes</span></Link> . Sous la direction de Monsieur SCHMIDT Thierry, notre
            équipe de chauffeurs VTC expérimentés est prête à vous offrir un voyage confortable et
            sécurisé. Que ce soit pour un trajet professionnel ou personnel, nos chauffeurs sont
            disponibles pour vous conduire à destination avec professionnalisme et courtoisie.
          </p>
        </div>
        <p className="mb-4">
          Chez Liv&Pass Transports, nous mettons un point d'honneur à offrir un service de qualité
          supérieure à nos clients. Notre équipe est composée de professionnels dévoués qui
          s'efforcent d'assurer une livraison sans faille et une expérience client exceptionnelle à
          chaque étape. Nous travaillons en étroite collaboration avec nos clients pour comprendre
          leurs besoins spécifiques et leur fournir des solutions sur mesure.
        </p>
        <p className="mb-4 text-lg font-semibold">
          La satisfaction de nos clients est notre priorité absolue. C'est pourquoi nous nous
          engageons à respecter les délais convenus, à traiter vos marchandises avec le plus grand
          soin et à vous offrir un service clientèle réactif et attentionné. Avec Liv&Pass
          Transports, vous pouvez avoir l'esprit tranquille, sachant que vos biens sont entre de
          bonnes mains.
        </p>
        <p className="mb-4">
          Explorez notre site web pour en savoir plus sur nos services, nos tarifs compétitifs et
          nos témoignages clients. Si vous avez des questions ou si vous souhaitez planifier une
          livraison ou une réservation de transport de personnes, n'hésitez pas à nous contacter.
          Notre équipe amicale est là pour vous aider.
        </p>
        <p className="mb-4 text-lg font-semibold">
          Faites confiance à Liv&Pass Transports pour tous vos besoins en livraison et en transport.
          Nous nous engageons à vous offrir un service fiable, ponctuel et de qualité supérieure.
        </p>
      </div>
    </div>
  );
};

export default About;
