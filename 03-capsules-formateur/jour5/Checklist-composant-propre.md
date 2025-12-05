# 🧹 Atelier du Jour — Nettoyer et Structurer les Composants React

Demain, votre objectif sera de **cleaner vos composants** afin d’obtenir un code :

✔ plus lisible  
✔ plus cohérent  
✔ plus maintenable  
✔ plus professionnel

Ce travail est indispensable avant d’ajouter de nouvelles fonctionnalités (comme les tests, la persistance ou de nouveaux écrans).

---

## 🎯 Objectif de l’atelier

À la fin de cette séance, vous saurez :

- identifier le “mauvais code” dans un composant
- réorganiser un composant React pour qu’il soit clair et propre
- appliquer les conventions de qualité (naming, indentation, structure)
- séparer la logique, la vue et l’état
- externaliser les parties complexes (services, hooks, helpers)
- préparer un composant pour la mise en test

---

# 🧭 1. Checklist : un composant propre, c’est…

## ✔ 1. Un nom clair
Un composant = **un nom qui dit ce qu’il fait**.

❌ `Card1.jsx`  
✔ `UserCard.jsx`

---

## ✔ 2. Une structure standardisée

```jsx
function ComponentName() {
  // 1. state
  // 2. hooks (useEffect…)
  // 3. logique métier
  // 4. return JSX
}
```

## ✔ 3. Une taille raisonnable
Un composant = **une seule responsabilité**

> Au-delà de **80 lignes**, il est probablement nécessaire de le découper.

---

## ✔ 4. Pas de `console.log` inutiles
À supprimer avant chaque commit :
## ✔ 5. Des variables explicites

❌ `x`, `arr`, `tmp`  
✔ `users`, `scores`, `currentQuestion`

---

## ✔ 6. JSX lisible et bien indenté

❌ Tout sur une seule ligne  
✔ Structure aérée, indentée, facile à lire

---

## ✔ 7. Logique extraite

Si la logique devient longue, il faut l’extraire dans :

- un **service** → `storageService.js`
- un **hook** → `useUsers.js`
- un **helper** → `formatUser.js`

# 🧭 2. Méthode : Comment cleaner un composant ?

Voici le plan d'action que vous appliquerez demain :

---

## 🔧 Étape 1 — Lire le composant sans juger

Identifier les “zones rouges” :

- répétitions
- logique mélangée avec du JSX
- variables obscures
- `console.log` oubliés
- conditions complexes

---

## 🔧 Étape 2 — Nettoyer la logique

- renommer les variables
- simplifier les conditions
- supprimer les calculs inutiles
- déplacer les blocs lourds dans des fonctions

---

## 🔧 Étape 3 — Extraire ce qui n’a rien à faire dans le composant

Exemples :

- requêtes API → dossier `/services`
- persistance → `storageService`
- logique CRUD → hook `useUsers`
- formatage des données → helpers

---

## 🔧 Étape 4 — Regrouper tout le retour JSX

Aucune logique métier ne doit vivre dans le `return`.

❌ **Exemple à éviter :**

```jsx
return users.map(u => {
  if (u.score > 10) {
    // …
  }
})
```
✔ Version propre :
```jsx
const filteredUsers = users.filter(u => u.score > 10)

return (
  <div>
    {filteredUsers.map(u => (
      <UserCard key={u.id} user={u} />
    ))}
  </div>
)
```
## 🔧 Étape 5 — Donner une vraie structure au composant

Structure recommandée :

```jsx
export default function Component() {
  // 1. state
  // 2. hooks
  // 3. logique métier
  // 4. handlers (fonctions onClick, etc.)
  // 5. return JSX
}
```