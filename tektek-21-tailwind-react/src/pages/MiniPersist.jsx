import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

function MiniPersist() {
  const [name, setName] = useState('');
  const [users, setUsers] = useLocalStorage('users', []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const addUser = () => {
    if (name.trim() !== '') {
      setUsers([...users, name]);
      setName('');
    }
  };

  const openEditModal = (index) => {
    setEditIndex(index);
    setEditValue(users[index]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditIndex(null);
    setEditValue('');
  };

  const saveEdit = () => {
    if (editValue.trim() !== '') {
      const updatedUsers = users.map((user, i) =>
        i === editIndex ? editValue : user
      );
      setUsers(updatedUsers);
      closeModal();
    }
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="flex items-center justify-center p-8">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">
          <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">Mini CRUD Persistant</h1>

          <div className="mb-8">
            <div className="flex gap-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addUser()}
                placeholder="Entrez un nom..."
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button
                onClick={addUser}
                className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all font-semibold shadow-md hover:shadow-lg"
              >
                Ajouter
              </button>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-700">Liste des utilisateurs</h2>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {users.length} {users.length > 1 ? 'utilisateurs' : 'utilisateur'}
              </span>
            </div>

            {users.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                <p className="text-gray-400 text-lg">Aucun utilisateur ajouté</p>
                <p className="text-gray-300 text-sm mt-2">Commencez par ajouter un utilisateur ci-dessus</p>
              </div>
            ) : (
              <ul className="space-y-3">
                {users.map((u, i) => (
                  <li key={i} className="group px-5 py-4 bg-white rounded-lg border-2 border-gray-100 hover:border-blue-200 transition-all flex justify-between items-center hover:shadow-md">
                    <span className="text-gray-800 font-medium">{u}</span>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => openEditModal(i)}
                        className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-all text-sm font-medium"
                      >
                        Modifier
                      </button>
                      <button
                        onClick={() => deleteUser(i)}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all text-sm font-medium"
                      >
                        Supprimer
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 transform transition-all">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Modifier l'utilisateur</h3>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom de l'utilisateur
              </label>
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && saveEdit()}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                autoFocus
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={saveEdit}
                className="flex-1 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all font-semibold shadow-md"
              >
                Enregistrer
              </button>
              <button
                onClick={closeModal}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all font-semibold"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MiniPersist;
