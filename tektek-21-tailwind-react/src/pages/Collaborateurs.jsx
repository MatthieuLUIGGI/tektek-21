import { Link } from 'react-router-dom';
import OrganizationCard from '../components/common/OrganizationCard';
import Button from '../components/ui/Button';
import { organizations } from '../data/organizations';

export default function Collaborateurs() {

  return (
    <>
      <section className="gradient-bg text-white py-20 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/background-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-br from-green-600/50 to-emerald-600/50"></div>

        <div className="absolute inset-0 opacity-10">
          <svg className="absolute top-0 left-0 w-64 h-64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.3,86.1C-23.4,84.6,-38.8,78.6,-52.4,69.8C-66,61,-77.8,49.4,-84.3,35.1C-90.8,20.8,-92,3.8,-88.7,-11.9C-85.4,-27.6,-77.6,-41.9,-66.8,-53.4C-56,-64.9,-42.2,-73.6,-27.4,-80.3C-12.6,-87,-6.3,-91.7,1.8,-94.8C9.9,-97.9,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute bottom-0 right-0 w-96 h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M39.5,-65.8C51.4,-58.9,61.6,-48.3,68.4,-36.1C75.2,-23.9,78.6,-10.1,78.3,3.7C78,17.5,74,31.3,66.4,42.8C58.8,54.3,47.6,63.5,35.1,69.1C22.6,74.7,8.8,76.7,-4.6,74.6C-18,72.5,-31,66.3,-42.8,58.2C-54.6,50.1,-65.2,40.1,-71.4,27.7C-77.6,15.3,-79.4,0.5,-76.8,-13.3C-74.2,-27.1,-67.2,-39.9,-57.4,-48.6C-47.6,-57.3,-35,-61.9,-22.6,-68.5C-10.2,-75.1,2,-83.7,14.1,-82.3C26.2,-80.9,27.6,-72.7,39.5,-65.8Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Nos Organisations Partenaires</h2>
          <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto leading-relaxed">
            89 associations caritatives bénéficient de vos appareils reconditionnés
          </p>
        </div>
      </section>

      <main className="container mx-auto px-6 py-16">
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Comment devenir partenaire ?</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Vous êtes une organisation caritative et souhaitez recevoir des appareils électroniques reconditionnés pour vos bénéficiaires ? Rejoignez notre réseau de partenaires !
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Être une association à but non lucratif reconnue</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Justifier d'une action sociale ou caritative</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">S'engager à distribuer le matériel aux bénéficiaires</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button className="inline-block">Devenir partenaire</Button>
                </Link>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-600 rounded-3xl opacity-20 blur-2xl"></div>
                <img
                  src="/collaborateur.png"
                  alt="Partenariat"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Nos partenaires</span>
            <h3 className="text-4xl font-bold text-gray-800 mt-3 mb-4">Les associations qui nous font confiance</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ces organisations reçoivent régulièrement des appareils reconditionnés grâce à vos dons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {organizations.map((org, index) => (
              <OrganizationCard key={index} {...org} />
            ))}

            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                  +
                </div>
                <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">Et plus</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">81 autres associations</h4>
              <p className="text-gray-600 mb-4">Découvrez toutes nos organisations partenaires.</p>
              <div className="mt-6">
                <a href="#" className="text-green-600 font-semibold hover:text-green-700 transition-colors duration-200">
                  Voir toutes les associations →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white">
            <h3 className="text-4xl font-bold mb-6">Choisissez votre association préférée</h3>
            <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
              Faites un don et sélectionnez l'organisation caritative qui recevra votre appareil reconditionné
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/donner">
                <Button className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-bold">
                  Faire un don maintenant
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-emerald-500 text-white hover:bg-emerald-600 px-8 py-4 text-lg font-bold">
                  Devenir partenaire
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
