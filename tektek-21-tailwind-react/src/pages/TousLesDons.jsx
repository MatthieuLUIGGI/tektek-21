import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DonationCard from '../components/common/DonationCard';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { allDonations } from '../data/donations';
import useLocalStorage from '../hooks/useLocalStorage';
import { getAllDonations } from '../utils/donationHelpers';
import EditDonationModal from '../components/modals/EditDonationModal';

export default function TousLesDons() {
  const [selectedType, setSelectedType] = useState('Tous');
  const [selectedState, setSelectedState] = useState('Tous');
  const [userDonations, setUserDonations] = useLocalStorage('donations', []);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingDonation, setEditingDonation] = useState(null);

  useEffect(() => {
    const avatarGradients = ['green', 'blue', 'purple', 'pink', 'indigo', 'teal'];
    const badgeColors = ['green', 'emerald', 'teal'];

    if (userDonations.length === 0) return;

    let needsUpdate = false;
    const updatedDonations = userDonations.map(donation => {
      if (!donation.avatarGradient || !donation.badgeColor) {
        needsUpdate = true;
        return {
          ...donation,
          avatarGradient: donation.avatarGradient || avatarGradients[Math.floor(Math.random() * avatarGradients.length)],
          badgeColor: donation.badgeColor || badgeColors[Math.floor(Math.random() * badgeColors.length)]
        };
      }
      return donation;
    });

    if (needsUpdate) {
      setUserDonations(updatedDonations);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const combinedDonations = getAllDonations(userDonations, allDonations);

  const filteredDonations = combinedDonations.filter(donation => {
    const typeMatch = selectedType === 'Tous' || donation.type === selectedType;
    const stateMatch = selectedState === 'Tous' || donation.state === selectedState;
    return typeMatch && stateMatch;
  });

  const handleEdit = (donationId) => {
    const rawDonation = userDonations.find(d => d.id === donationId);
    const transformedDonation = combinedDonations.find(d => d.id === donationId);

    if (rawDonation && transformedDonation) {
      setEditingDonation({
        ...rawDonation,
        avatarGradient: transformedDonation.avatarGradient,
        badgeColor: transformedDonation.badgeColor
      });
      setIsEditModalOpen(true);
    }
  };

  const handleDelete = (donationId) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce don ?')) {
      const updatedDonations = userDonations.filter(d => d.id !== donationId);
      setUserDonations(updatedDonations);
    }
  };

  const handleSaveEdit = (updatedDonation) => {
    const updatedDonations = userDonations.map(d =>
      d.id === updatedDonation.id ? updatedDonation : d
    );
    setUserDonations(updatedDonations);
    setIsEditModalOpen(false);
    setEditingDonation(null);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setEditingDonation(null);
  };

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
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Tous les dons</h2>
          <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto leading-relaxed">
            Découvrez tous les appareils donnés par notre communauté solidaire
          </p>
        </div>
      </section>

      <main className="container mx-auto px-6 py-16">
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Filtrer les dons</h3>
                  <p className="text-sm text-gray-500">{combinedDonations.length} don{combinedDonations.length > 1 ? 's' : ''} disponible{combinedDonations.length > 1 ? 's' : ''}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                <div className="w-full sm:w-auto">
                  <label className="block text-sm text-gray-600 mb-1">Type d'appareil</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full sm:w-48 px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-200"
                  >
                    <option>Tous</option>
                    <option>Ordinateur</option>
                    <option>Smartphone</option>
                    <option>Tablette</option>
                  </select>
                </div>

                <div className="w-full sm:w-auto">
                  <label className="block text-sm text-gray-600 mb-1">État</label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full sm:w-48 px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-200"
                  >
                    <option>Tous</option>
                    <option>Comme neuf</option>
                    <option>Très bon état</option>
                    <option>Bon état</option>
                    <option>État correct</option>
                    <option>En panne</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          {filteredDonations.length === 0 ? (
            <div className="text-center py-20">
              <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Aucun don trouvé</h3>
              <p className="text-gray-600">Essayez de modifier vos filtres</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDonations.map((donation) => (
                <DonationCard
                  key={donation.id || donation.title}
                  {...donation}
                  onEdit={() => handleEdit(donation.id)}
                  onDelete={() => handleDelete(donation.id)}
                />
              ))}
            </div>
          )}
        </section>

        <section className="text-center mb-12">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Vous souhaitez faire un don ?</h3>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Rejoignez notre communauté solidaire et donnez une seconde vie à vos appareils électroniques
            </p>
            <Link to="/donner">
              <Button className="inline-block">Faire un don maintenant</Button>
            </Link>
          </div>
        </section>
      </main>

      {isEditModalOpen && editingDonation && (
        <EditDonationModal
          donation={editingDonation}
          onSave={handleSaveEdit}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
