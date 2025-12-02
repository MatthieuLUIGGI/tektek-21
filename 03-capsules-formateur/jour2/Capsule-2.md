
# 🎥 CAPSULE BONUS — JOUR 2  
## Partie 3 : Données → map() → Props → Composants

Cette capsule complète la logique du Jour 2 en introduisant une étape essentielle de l’architecture React :  
**afficher une liste dynamique de composants en utilisant un fichier de données + `.map()` + des props.**

---

# 🎯 Objectif pédagogique

À la fin de cette capsule, les apprenants auront compris :

- comment **externaliser les données** dans un fichier `data/`
- comment **importer ces données** dans une page ou un composant parent
- comment utiliser **`.map()`** pour générer une liste d’éléments
- comment **transmettre les données** du parent vers les composants via **props**
- comment fonctionne le **flux de données descendant** (*top-down data flow*)
- comment **connecter les données** à leur composant `ProfileCard`

---

# 🟦 Étape 1 — Créer le fichier `users.js`

## 📁 Arborescence recommandée
src/
├── components/ProfileCard.jsx
├── data/users.js
├── App.jsx

## 📄 Contenu du fichier `users.js`

```js
// src/data/users.js

export const users = [
  {
    id: 1,
    name: "Marie Dupont",
    role: "UX Designer",
    description: "Passionnée par l’expérience utilisateur.",
    img: "https://picsum.photos/200"
  },
  {
    id: 2,
    name: "Alex Martin",
    role: "Développeur Front-End",
    description: "Spécialisé en React, Tailwind et UI moderne.",
    img: "https://picsum.photos/201"
  },
  {
    id: 3,
    name: "Samira Ben",
    role: "Product Owner",
    description: "Experte en gestion agile et priorisation produit.",
    img: "https://picsum.photos/202"
  }
];
````
Modification  du Fichier App.jsx 

````
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard'
import { users } from "./data/users";

function App() {


  return (
    <>
     <h1>Bonjour</h1>

    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <ProfileCard
          key={user.id}
          img={user.img}
          name={user.name}
          role={user.role}
          description={user.description}
    />
      ))}
    </div>
    </>

  )
}

export default App
