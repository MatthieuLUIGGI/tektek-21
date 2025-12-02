# 📘 Quiz — Jour 2  
## Fondations React • Composants • Props • JSX • Architecture

## Plusieurs réponses possible
---

## 🧩 Question 1  
Un composant React doit toujours :

- A. Commencer par une majuscule  
- B. Retourner du JSX  
- C. Être placé dans le dossier `components`  
- D. S’appeler avec une balise comme `<MonComposant />`

**Réponses attendues :** 

---

## 🧩 Question 2  
Que représente JSX ?

- A. Un langage séparé de JavaScript  
- B. Un mix entre JavaScript et une syntaxe proche de HTML  
- C. Du HTML dans un fichier JavaScript  
- D. Une syntaxe qui permet d’utiliser du JS entre `{}`

**Réponses attendues :** 

---

## 🧩 Question 3  
Quel est le rôle principal des *props* ?

- A. Transmettre des données du parent vers l’enfant  
- B. Modifier l’état interne du composant enfant  
- C. Personnaliser un composant  
- D. Forcer le rendu d’un composant

**Réponses attendues :**

---

## 🧩 Question 4 — Vrai / Faux  
Les props peuvent être modifiées directement dans le composant enfant.

**Réponse attendue :** ❌ Faux (elles sont immuables)

---

## 🧩 Question 5  
Que représente `{children}` dans un composant Layout ?

- A. Les props du composant  
- B. Le contenu dynamique passé entre les balises du composant  
- C. Un Hook React  
- D. Le state global de l’application

**Réponse attendue :** 

---

## 🧩 Question 6  
Quelle méthode permet d’afficher une liste d’éléments en React ?

- A. `.forEach()`  
- B. `.map()`  
- C. `.loop()`  
- D. `.filter()`

**Réponse attendue :** 
---

## 🧩 Question 7  
Pourquoi découper une maquette en composants réutilisables ?

- A. Pour rendre le code plus lisible  
- B. Pour éviter les répétitions  
- C. Pour faciliter la maintenance  
- D. Pour styliser plus facilement

**Réponses attendues :** 
---

## 🧩 Question 8  
Dans React, le flux de données par défaut est :

- A. En boucle  
- B. Parent → Enfant  
- C. Enfant → Parent  
- D. Circulaire

**Réponse attendue :**

---

## 🧩 Question 9  
Quelle structure d’arborescence est considérée comme une bonne pratique ?

- A. Tout mettre dans App.jsx  
- B. Créer `components/`, `pages/`, `layout/`  
- C. Mélanger HTML et composants dans plusieurs fichiers  
- D. Ne créer des fichiers que pour le style

**Réponse attendue :** 

---

## 🧩 Question 10  
Que renvoie ce composant ?

```jsx
function Title({ text }) {
  return <h1>{text}</h1>;
}

<Title text="Hello React" />```
