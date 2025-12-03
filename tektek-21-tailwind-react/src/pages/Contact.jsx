import { Link } from 'react-router-dom';
import ContactInfoCard from '../components/common/ContactInfoCard';
import FAQItem from '../components/common/FAQItem';
import Button from '../components/ui/Button';
import { faqs } from '../data/faqs';

export default function Contact() {

  return (
    <>
      <section className="gradient-bg text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute top-0 left-0 w-64 h-64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.3,86.1C-23.4,84.6,-38.8,78.6,-52.4,69.8C-66,61,-77.8,49.4,-84.3,35.1C-90.8,20.8,-92,3.8,-88.7,-11.9C-85.4,-27.6,-77.6,-41.9,-66.8,-53.4C-56,-64.9,-42.2,-73.6,-27.4,-80.3C-12.6,-87,-6.3,-91.7,1.8,-94.8C9.9,-97.9,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute bottom-0 right-0 w-96 h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M39.5,-65.8C51.4,-58.9,61.6,-48.3,68.4,-36.1C75.2,-23.9,78.6,-10.1,78.3,3.7C78,17.5,74,31.3,66.4,42.8C58.8,54.3,47.6,63.5,35.1,69.1C22.6,74.7,8.8,76.7,-4.6,74.6C-18,72.5,-31,66.3,-42.8,58.2C-54.6,50.1,-65.2,40.1,-71.4,27.7C-77.6,15.3,-79.4,0.5,-76.8,-13.3C-74.2,-27.1,-67.2,-39.9,-57.4,-48.6C-47.6,-57.3,-35,-61.9,-22.6,-68.5C-10.2,-75.1,2,-83.7,14.1,-82.3C26.2,-80.9,27.6,-72.7,39.5,-65.8Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Nous Contacter</h2>
          <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto leading-relaxed">
            Une question ? Un projet de partenariat ? Nous sommes à votre écoute
          </p>
        </div>
      </section>

      <main className="container mx-auto px-6 py-16">
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-12">
                <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Restez en contact</span>
                <h3 className="text-3xl font-bold text-gray-800 mt-3 mb-6">Envoyez-nous un message</h3>
                <p className="text-gray-600 text-lg">Notre équipe vous répondra dans les plus brefs délais, généralement sous 24h.</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Prénom *</label>
                    <input type="text" placeholder="Jean" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-200" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Nom *</label>
                    <input type="text" placeholder="Dupont" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-200" />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input type="email" placeholder="jean.dupont@example.com" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-200" />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Téléphone</label>
                  <input type="tel" placeholder="06 12 34 56 78" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-200" />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Sujet *</label>
                  <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-200">
                    <option>Sélectionnez un sujet</option>
                    <option>Question sur un don</option>
                    <option>Devenir association partenaire</option>
                    <option>Question générale</option>
                    <option>Signaler un problème</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea rows="6" placeholder="Écrivez votre message ici..." className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-200 resize-none"></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input type="checkbox" id="privacy" className="mt-1 w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                  <label htmlFor="privacy" className="text-gray-600 text-sm">
                    J'accepte que mes données soient utilisées pour répondre à ma demande selon la <a href="#" className="text-green-600 hover:text-green-700 font-semibold">politique de confidentialité</a>.
                  </label>
                </div>

                <button type="submit" className="w-full gradient-bg text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
                  Envoyer le message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-800 mb-6">Informations de contact</h4>

                <div className="space-y-6">
                  <ContactInfoCard
                    icon={{
                      bgGradient: 'gradient-bg',
                      svg: (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )
                    }}
                    title="Adresse"
                    content={<>123 Avenue de la République<br />75011 Paris, France</>}
                  />

                  <ContactInfoCard
                    icon={{
                      bgGradient: 'bg-gradient-to-br from-emerald-500 to-teal-600',
                      svg: (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      )
                    }}
                    title="Téléphone"
                    content="01 23 45 67 89"
                    subtitle="Du lundi au vendredi, 9h-18h"
                  />

                  <ContactInfoCard
                    icon={{
                      bgGradient: 'bg-gradient-to-br from-blue-500 to-indigo-600',
                      svg: (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )
                    }}
                    title="Email"
                    content="contact@tektek-21.fr"
                    subtitle="Réponse sous 24h"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">Horaires d'ouverture</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span>Lundi - Vendredi</span>
                    <span className="font-semibold">9h - 18h</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span>Samedi</span>
                    <span className="font-semibold">10h - 16h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Dimanche</span>
                    <span className="font-semibold">Fermé</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Suivez-nous</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Questions Fréquentes</h3>

            <div className="space-y-4 max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white">
            <h3 className="text-4xl font-bold mb-6">Prêt à nous rejoindre ?</h3>
            <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
              Faites partie de notre communauté et donnez une seconde vie à vos appareils
            </p>
            <Link to="/donner">
              <Button className="bg-white text-green-600 hover:bg-white hover:text-green-700 px-8 py-4 text-lg font-bold inline-block">
                Faire un don maintenant
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
