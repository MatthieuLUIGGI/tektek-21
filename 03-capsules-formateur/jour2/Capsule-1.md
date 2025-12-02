# 📦 CAPSULE FORMATEUR — JOUR 2  
## Construire une mini-application « Profile Cards »

Dans cette capsule, les apprenants vont créer une **mini-application React** affichant une liste de cartes de profils, chaque carte étant un **composant réutilisable**, alimenté par des **props** et des données externes stockées dans un fichier `data/`.

---

# 🧠 Concepts à mobiliser

- Création d’un projet React (Vite)
- JSX
- Composants fonctionnels
- Props
- Itération d’un tableau avec `.map()`
- Architecture recommandée : `components/` + `data/`
- Responsabilité d’un composant (Single Responsibility Principle)

---

# 📤 Livrables attendus

Un repository GitHub contenant l’exercice du jour :

profile-cards/
├── src/
│ ├── components/ProfileCard.jsx
│ ├── data/users.js
│ ├── App.jsx
│ └── styles.css (si utilisé)
└── README.md (optionnel)


---

# 1️⃣ Initialisation du projet

Site officiel Vite : https://vitejs.fr/

# Créer un projet React :

```bash
npm create vite@latest
```

Choisir React + JavaScript.

Nettoyer le fichier App.jsx :

```bash
import './App.css'

function App() {
  return (
    <>
      <h1>Bonjour</h1>
    </>
  );
}
export default App;
```

2️⃣ Créer le composant ProfileCard.jsx
🔹 Un composant = une fonction

```bash
export default function ProfileCard() {
  return (
    <div>Profil</div>
  );
}
```
2️⃣ Les props : données reçues depuis le parent


```bash
export default function ProfileCard(img, name, role, description) {
  return (
    <div>Profil</div>
  );
}
```
Ici on utilise la déstructuration, ce qui évite d’écrire props.img, props.name, etc.

3️⃣ Structure visuelle (avec Tailwind ou CSS simple)
<div className="p-4 border rounded-lg shadow-sm bg-white max-w-xs">

4️⃣ Affichage de l’image
 

 ```bash
<img
  src={img}
  alt={name}
  className="w-full h-40 object-cover rounded-md"
/>
```
img vient des props
5️⃣ Affichage du texte
*
 ```bash
<h2 className="text-xl font-semibold mt-3">{name}</h2>
<p className="text-sm text-gray-600">{role}</p>
<p className="text-gray-700 mt-2 text-sm">{description}</p>
/>
```
Le JSX permet de mettre des valeurs dynamiques entre {}.

6️⃣ Bouton « Voir plus »
 ```bash
<button className="mt-4 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
  Voir plus
</button>

```
## BONUS : Version avancée (teaser pour Jour 3)

 ```bash
// -------------------------------------------
// ProfileCard.jsx
// Un composant fonctionnel qui reçoit des props
// et affiche une carte de profil simple.
// -------------------------------------------

import { useState } from "react";

export default function ProfileCard({ img, name, role, description }) {
  const [VoirPlus, setVoirPlus] = useState(false);

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white max-w-xs">

      <img
        src={img}
        alt={name}
        className="w-full h-40 object-cover rounded-md"
      />

      <h2 className="text-xl font-semibold mt-3">{name}</h2>
      <p className="text-sm text-gray-600">{role}</p>

      <p className="text-gray-700 mt-2 text-sm">
        {VoirPlus
          ? description
          : description.slice(0, 40) + "La journée commence bien, un petit défi en C ..…"}
      </p>

      <button
        onClick={() => setVoirPlus(!VoirPlus)}
        className="mt-4 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {VoirPlus ? "Voir moins" : "Voir plus"}
      </button>

    </div>
  );
}

```
## Explications
🔹 useState

const [VoirPlus, setVoirPlus] = useState(false);

VoirPlus : valeur actuelle
setVoirPlus : fonction qui modifie la valeur
false : état initial

👉 Première introduction douce à l’état local (useState)