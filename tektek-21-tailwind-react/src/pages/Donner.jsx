import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StepCard from '../components/common/StepCard';
import Button from '../components/ui/Button';

export default function Donner() {
  const navigate = useNavigate();
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [typeAppareil, setTypeAppareil] = useState("");
  const [marque, setMarque] = useState("");
  const [modele, setModele] = useState("");
  const [etatAppareil, setEtatAppareil] = useState("");
  const [description, setDescription] = useState("");
  const [association, setAssociation] = useState("");
  const [accepteConditions, setAccepteConditions] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!prenom.trim()) {
      alert("Le prénom est requis");
      return;
    }

    if (!nom.trim()) {
      alert("Le nom est requis");
      return;
    }

    if (!email.trim()) {
      alert("L'email est requis");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("L'email n'est pas valide");
      return;
    }

    if (!typeAppareil || typeAppareil === "Sélectionnez un type") {
      alert("Le type d'appareil est requis");
      return;
    }

    if (!etatAppareil || etatAppareil === "Sélectionnez l'état") {
      alert("L'état de l'appareil est requis");
      return;
    }

    if (!association) {
      alert("Veuillez sélectionner une association bénéficiaire");
      return;
    }

    if (!accepteConditions) {
      alert("Vous devez accepter les conditions générales d'utilisation");
      return;
    }

    console.log("Prénom:", prenom);
    console.log("Nom:", nom);
    console.log("Email:", email);
    console.log("Téléphone:", telephone);
    console.log("Type d'appareil:", typeAppareil);
    console.log("Marque:", marque);
    console.log("Modèle:", modele);
    console.log("État:", etatAppareil);
    console.log("Description:", description);
    console.log("Association:", association);

    alert("Votre don a été enregistré avec succès !");
    navigate("/");
  };

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
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Faites don de vos appareils</h2>
          <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto leading-relaxed">
            Donnez une seconde vie à vos appareils électroniques en quelques clics
          </p>
        </div>
      </section>

      <main className="container mx-auto px-6 py-16">
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="text-center mb-12">
                <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Formulaire de don</span>
                <h3 className="text-3xl font-bold text-gray-800 mt-3 mb-4">Créez votre annonce de don</h3>
                <p className="text-gray-600">Remplissez le formulaire ci-dessous pour faire don de votre appareil</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Prénom *</label>
                    <input
                      type="text"
                      placeholder="Jean"
                      value={prenom}
                      onChange={(e) => setPrenom(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Nom *</label>
                    <input
                      type="text"
                      placeholder="Dupont"
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    placeholder="jean.dupont@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Téléphone</label>
                  <input
                    type="tel"
                    placeholder="06 12 34 56 78"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-200"
                  />
                </div>

                <div className="border-t pt-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-6">Informations sur l'appareil</h4>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Type d'appareil *</label>
                      <select
                        value={typeAppareil}
                        onChange={(e) => setTypeAppareil(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-200"
                      >
                        <option>Sélectionnez un type</option>
                        <option>Ordinateur portable</option>
                        <option>Ordinateur fixe</option>
                        <option>Smartphone</option>
                        <option>Tablette</option>
                        <option>Écran</option>
                        <option>Clavier</option>
                        <option>Souris</option>
                        <option>Autre</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Marque</label>
                      <input
                        type="text"
                        placeholder="Apple, Samsung, HP..."
                        value={marque}
                        onChange={(e) => setMarque(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Modèle</label>
                      <input
                        type="text"
                        placeholder="iPhone 12, MacBook Pro..."
                        value={modele}
                        onChange={(e) => setModele(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">État de l'appareil *</label>
                      <select
                        value={etatAppareil}
                        onChange={(e) => setEtatAppareil(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-200"
                      >
                        <option>Sélectionnez l'état</option>
                        <option>Comme neuf</option>
                        <option>Très bon état</option>
                        <option>Bon état</option>
                        <option>État correct</option>
                        <option>En panne</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Description</label>
                      <textarea
                        rows="4"
                        placeholder="Décrivez votre appareil, ses caractéristiques, son état..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-200 resize-none"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Photos de l'appareil</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-green-500 transition-colors duration-200 cursor-pointer">
                        <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-gray-600 mb-2">Cliquez pour télécharger ou glissez-déposez</p>
                        <p className="text-sm text-gray-400">PNG, JPG jusqu'à 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-6">Choisissez votre association</h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="relative cursor-pointer">
                      <input
                        type="radio"
                        name="association"
                        value="Les Restos du Cœur"
                        checked={association === "Les Restos du Cœur"}
                        onChange={(e) => setAssociation(e.target.value)}
                        className="peer sr-only"
                      />
                      <div className="p-4 rounded-xl border-2 border-gray-200 peer-checked:border-green-500 peer-checked:bg-green-50 transition-all duration-200 hover:shadow-md">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                            RC
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">Les Restos du Cœur</p>
                            <p className="text-sm text-gray-500">247 appareils reçus</p>
                          </div>
                        </div>
                      </div>
                    </label>

                    <label className="relative cursor-pointer">
                      <input
                        type="radio"
                        name="association"
                        value="Emmaüs France"
                        checked={association === "Emmaüs France"}
                        onChange={(e) => setAssociation(e.target.value)}
                        className="peer sr-only"
                      />
                      <div className="p-4 rounded-xl border-2 border-gray-200 peer-checked:border-green-500 peer-checked:bg-green-50 transition-all duration-200 hover:shadow-md">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                            E
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">Emmaüs France</p>
                            <p className="text-sm text-gray-500">189 appareils reçus</p>
                          </div>
                        </div>
                      </div>
                    </label>

                    <label className="relative cursor-pointer">
                      <input
                        type="radio"
                        name="association"
                        value="Secours Populaire"
                        checked={association === "Secours Populaire"}
                        onChange={(e) => setAssociation(e.target.value)}
                        className="peer sr-only"
                      />
                      <div className="p-4 rounded-xl border-2 border-gray-200 peer-checked:border-green-500 peer-checked:bg-green-50 transition-all duration-200 hover:shadow-md">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                            SP
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">Secours Populaire</p>
                            <p className="text-sm text-gray-500">156 appareils reçus</p>
                          </div>
                        </div>
                      </div>
                    </label>

                    <label className="relative cursor-pointer">
                      <input
                        type="radio"
                        name="association"
                        value="Croix-Rouge Française"
                        checked={association === "Croix-Rouge Française"}
                        onChange={(e) => setAssociation(e.target.value)}
                        className="peer sr-only"
                      />
                      <div className="p-4 rounded-xl border-2 border-gray-200 peer-checked:border-green-500 peer-checked:bg-green-50 transition-all duration-200 hover:shadow-md">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                            CR
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">Croix-Rouge Française</p>
                            <p className="text-sm text-gray-500">134 appareils reçus</p>
                          </div>
                        </div>
                      </div>
                    </label>

                    <label className="relative cursor-pointer md:col-span-2">
                      <input
                        type="radio"
                        name="association"
                        value="Autres associations"
                        checked={association === "Autres associations"}
                        onChange={(e) => setAssociation(e.target.value)}
                        className="peer sr-only"
                      />
                      <div className="p-4 rounded-xl border-2 border-gray-200 peer-checked:border-green-500 peer-checked:bg-green-50 transition-all duration-200 hover:shadow-md">
                        <div className="flex items-center justify-center space-x-3">
                          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                          <p className="font-semibold text-gray-800">Voir toutes les associations (89)</p>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-6">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={accepteConditions}
                    onChange={(e) => setAccepteConditions(e.target.checked)}
                    className="mt-1 w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <label htmlFor="terms" className="text-gray-600 text-sm">
                    J'accepte les <a href="#" className="text-green-600 hover:text-green-700 font-semibold">conditions générales d'utilisation</a> et je certifie que les informations fournies sont exactes.
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 pt-6">
                  <Link to="/" className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200">
                    ← Retour à l'accueil
                  </Link>
                  <button type="submit" className="gradient-bg text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
                    Valider mon don
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Après votre don</span>
            <h3 className="text-4xl font-bold text-gray-800 mt-3 mb-4">Que se passe-t-il ensuite ?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Validation</h4>
              <p className="text-gray-600 text-sm">Nous validons votre demande sous 24h</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Étiquette</h4>
              <p className="text-gray-600 text-sm">Recevez une étiquette d'envoi prépayée</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Reconditionnement</h4>
              <p className="text-gray-600 text-sm">Votre appareil est reconditionné</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                4
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Remise</h4>
              <p className="text-gray-600 text-sm">L'association reçoit l'appareil</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Des questions ?</h3>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Notre équipe est là pour vous accompagner dans votre démarche de don
            </p>
            <Link to="/contact">
              <Button className="inline-block">Nous contacter</Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
