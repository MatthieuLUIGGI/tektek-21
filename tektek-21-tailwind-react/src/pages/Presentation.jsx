import { Link } from 'react-router-dom';
import HeroSection from '../components/common/HeroSection';
import ValueCard from '../components/common/ValueCard';
import StepCard from '../components/common/StepCard';
import TestimonialCard from '../components/common/TestimonialCard';
import Button from '../components/ui/Button';
import Avatar from '../components/ui/Avatar';
import { impactStats } from '../data/stats';
import { testimonials } from '../data/testimonials';

export default function Presentation() {

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
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Notre Mission</h2>
          <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto leading-relaxed">
            Réduire la fracture numérique grâce au reconditionnement et à la redistribution solidaire d'appareils électroniques
          </p>
        </div>
      </section>

      <main className="container mx-auto px-6 py-16">
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Qui sommes-nous</span>
              <h3 className="text-4xl font-bold text-gray-800 mt-3 mb-6">
                TekTek-21, la plateforme solidaire du numérique
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                TekTek-21 est une plateforme solidaire qui collecte vos appareils électroniques pour les reconditionner et les redistribuer aux associations de votre choix. Soutenue par les pouvoirs publics, nous croyons fermement que la technologie devrait être accessible à tous.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Notre processus est simple : vous faites don de vos appareils, vous sélectionnez l'organisation caritative bénéficiaire, nous reconditionnons le matériel pour le remettre à neuf, puis nous le remettons à l'association choisie. Un cercle vertueux financé principalement par des subventions publiques.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-3">
                  <Avatar letter="A" gradient="green" />
                  <Avatar letter="B" gradient="blue" />
                  <Avatar letter="C" gradient="purple" />
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white font-bold border-2 border-white">
                    +
                  </div>
                </div>
                <p className="text-gray-600 font-medium">Plus de 3,456 donateurs actifs</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-600 rounded-3xl opacity-20 blur-2xl"></div>
              <img
                src="/presentation.png"
                alt="Solidarité numérique"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Nos Valeurs</span>
            <h3 className="text-4xl font-bold text-gray-800 mt-3 mb-4">Ce qui nous guide au quotidien</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              title="Solidarité"
              description="Grâce au reconditionnement, nous permettons l'accès aux technologies numériques pour tous, indépendamment de la situation financière."
              gradient="gradient-bg"
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
            />

            <ValueCard
              title="Écologie"
              description="Le reconditionnement réduit drastiquement les déchets électroniques et prolonge la durée de vie des appareils."
              gradient="bg-gradient-to-br from-emerald-500 to-teal-600"
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />

            <ValueCard
              title="Engagement public"
              description="Financée par des subventions publiques, notre plateforme garantit un service gratuit et accessible à tous."
              gradient="bg-gradient-to-br from-blue-500 to-indigo-600"
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
            />
          </div>
        </section>

        <section className="mb-20">
          <div className="gradient-bg rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg className="absolute top-0 right-0 w-64 h-64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.3,86.1C-23.4,84.6,-38.8,78.6,-52.4,69.8C-66,61,-77.8,49.4,-84.3,35.1C-90.8,20.8,-92,3.8,-88.7,-11.9C-85.4,-27.6,-77.6,-41.9,-66.8,-53.4C-56,-64.9,-42.2,-73.6,-27.4,-80.3C-12.6,-87,-6.3,-91.7,1.8,-94.8C9.9,-97.9,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
            </div>
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold mb-4">Notre Impact en Chiffres</h3>
                <p className="text-green-50 text-lg">Des résultats concrets pour un monde plus solidaire</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {impactStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</div>
                    <p className="text-green-50 text-lg">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Comment ça marche</span>
            <h3 className="text-4xl font-bold text-gray-800 mt-3 mb-4">Le parcours de votre appareil en 4 étapes</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-1/4 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 -z-10"></div>

            <StepCard
              stepNumber="1"
              title="Donnez votre appareil"
              description="Créez votre annonce en quelques clics et décrivez votre appareil."
              gradient="gradient-bg"
            />

            <StepCard
              stepNumber="2"
              title="Choisissez l'association"
              description="Sélectionnez parmi nos 89 organisations caritatives partenaires."
              gradient="bg-gradient-to-br from-emerald-500 to-teal-600"
            />

            <StepCard
              stepNumber="3"
              title="Reconditionnement"
              description="Votre appareil est reconditionné par nos techniciens qualifiés."
              gradient="bg-gradient-to-br from-blue-500 to-indigo-600"
            />

            <StepCard
              stepNumber="4"
              title="Remise à l'association"
              description="L'appareil reconditionné est remis à l'œuvre que vous avez choisie."
              gradient="bg-gradient-to-br from-purple-500 to-pink-600"
            />
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-12">
            <div className="text-center mb-12">
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Témoignages</span>
              <h3 className="text-4xl font-bold text-gray-800 mt-3 mb-4">Ils nous font confiance</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white">
            <h3 className="text-4xl font-bold mb-6">Prêt à faire la différence ?</h3>
            <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
              Donnez vos appareils, nous les reconditionnons et les remettons aux associations de votre choix. Un service 100% gratuit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/donner">
                <Button className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-bold">
                  Faire un don maintenant
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-emerald-500 text-white hover:bg-emerald-600 px-8 py-4 text-lg font-bold">
                  En savoir plus
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
