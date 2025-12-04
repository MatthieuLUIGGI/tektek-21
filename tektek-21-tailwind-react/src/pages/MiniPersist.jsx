import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

function MiniPersist() {
  const [name, setName] = useState('');
  const [users, setUsers] = useLocalStorage('users', []);

  const addUser = () => {
    if (name.trim() !== '') {
      setUsers([...users, name]);
      setName('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Mini Persist</h1>

        <div className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Entrez un nom..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addUser}
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Ajouter
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-700">Liste des utilisateurs</h2>
          <ul className="space-y-2">
            {users.map((u, i) => (
              <li key={i} className="px-4 py-2 bg-gray-50 rounded-md border border-gray-200">
                {u}
              </li>
            ))}
          </ul>
          {users.length === 0 && (
            <p className="text-gray-400 text-sm italic">Aucun utilisateur ajouté</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MiniPersist;
